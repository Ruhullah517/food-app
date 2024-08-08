import React, { useRef, useState } from 'react';
import {
    View,
    Animated,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    FlatList
} from 'react-native';
import { Card, Button, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import Vector from '../../assets/Icons/Vector.svg';
import Delivery from '../../assets/Icons/DeliverBoyIcon.svg';
import CardIcon from '../../assets/Icons/Card icon.svg';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';




const { width, height } = Dimensions.get('window');

const constants = [
    {
        id: 1,
        title: 'Order For Food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        image: require('../../assets/a71428bad6f8180bac9ad440a389a541.png'),
        icon: <Vector />,

    },
    {
        id: 2,
        title: 'Easy Payment',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: require('../../assets/10dbbfa35444d8a696a8e628115ab848.png'),
        icon: <CardIcon />,
    },
    {
        id: 3,
        title: 'Fast Delivery',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: require('../../assets/01a78ee96748528fe0ad9f7af04ad3d1.png'),
        icon: <Delivery />
    },
];
const OnBoarding = () => {
    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),
        InterBlack: require('../../assets/fonts/Inter 24pt Black.ttf')
    })


    const navigation = useNavigation();
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null);

    const handleNext = () => {
        const currentIndex = Math.round(scrollX._value / width);
    
        if (currentIndex < constants.length - 1) {
            // If not the last page, scroll to the next page
            const nextIndex = currentIndex + 1;
            flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        } else {
            // If it's the last page, navigate to the login page
            navigation.navigate('Login'); 
        }
    };

    const renderFooter = () => (
        <View style={styles.footer}>
            <View style={styles.pagination}>
                {constants.map((_, index) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width,
                    ];
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [20, 20, 20],
                        extrapolate: 'clamp',
                    });
                    const dotColor = scrollX.interpolate({
                        inputRange,
                        outputRange: ['#ddd', '#FF5733', '#ddd'],
                        extrapolate: 'clamp',
                    });
                    return (
                        <Animated.View
                            key={index}
                            style={[
                                styles.dot,
                                { width: dotWidth, backgroundColor: dotColor },
                            ]}
                        />
                    );
                })}
            </View>
            <Button mode="contained" style={styles.nextButton} onPress={handleNext}>
                Next
            </Button>
        </View>
    );

    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Animated.FlatList
                ref={flatListRef}
                data={constants}
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                renderItem={({ item }) => (
                    <View style={styles.page}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={item.image}
                                style={styles.image}
                            />
                            <TouchableOpacity style={styles.skipButton}>
                                <Text style={styles.skipText}>Skip</Text>
                                <Arrow name="navigate-next" size={20} color="#E95322" />
                            </TouchableOpacity>
                        </View>
                        <Card style={styles.card}>
                            <Card.Content>
                                <View style={styles.iconContainer}>
                                    {item.icon}
                                </View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Paragraph style={styles.description}>{item.description}</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                )}
            />
            {renderFooter()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative'
    },
    page: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    skipButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:"center"


    },
    skipText: {
        color: '#E95322',
        fontSize: 16,
        fontFamily:'LeagueSpartanSemiBold'
    },
    card: {
        width: width,
        alignSelf: 'center',
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical:10,
        paddingHorizontal:30,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 1,
        position: 'absolute',
        bottom: 70,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0, // Add some margin if needed
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
        color: '#E95322',
        fontFamily: 'InterBlack'
    },
    description: {
        textAlign: 'center',
        color: '#391713',
        marginBottom: 20,
        fontFamily: 'LeagueSpartanMedium',
        fontSize: 14,
        lineHeight:14

    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    dot: {
        width: 30,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#ddd',
        marginHorizontal: 5,
    },
    dotActive: {
        width: 30,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#E95322',
        marginHorizontal: 5,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        paddingVertical: 20,
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: '#E95322',
        marginTop: 10,
        width: width * 0.4,
        fontSize: 17,
        fontFamily: "LeagueSpartanMedium",
        fontWeight: 500
    },
});

export default OnBoarding;
