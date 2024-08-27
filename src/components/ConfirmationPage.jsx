import { useFonts } from 'expo-font';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import BackArrow from '../../assets/Icons/backarrow.svg';
import CircleIcon from '../../assets/Icons/CircleIcon.svg';
import CancelIcon from '../../assets/Icons/CancelIcon.svg'; // Replace this with your actual done icon

const { width, height } = Dimensions.get('window');

const ConfirmationPage = ({ route, navigation }) => {
    const [loadingComplete, setLoadingComplete] = useState(false);
    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),
        InterBlack: require('../../assets/fonts/Inter 24pt Black.ttf')
    });

    const opacity1 = useRef(new Animated.Value(1)).current;
    const opacity2 = useRef(new Animated.Value(1)).current;
    const opacity3 = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const fadeAnimation = (animatedValue) => {
            return Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]);
        };

        const loopAnimation = Animated.loop(
            Animated.stagger(300, [
                fadeAnimation(opacity1),
                fadeAnimation(opacity2),
                fadeAnimation(opacity3),
            ])
        );

        loopAnimation.start();

        // Stop the animation and show the done icon after a few seconds
        setTimeout(() => {
            loopAnimation.stop();
            setLoadingComplete(true);
        }, 3000); // Adjust this time as needed

    }, [opacity1, opacity2, opacity3]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        {
                            !loadingComplete ? (
                                <>
                                    <View style={{ position: "relative" }}>
                                        <CircleIcon width={139} height={139} strokeWidth={0.5} />
                                        <View style={{ flexDirection: "row", columnGap: 10, position: 'absolute', top: 60, left: 30 }}>
                                            <Animated.View style={{ opacity: opacity1 }}>
                                                <CircleIcon width={18} height={18} strokeWidth={0.5} fill="#E95322" />
                                            </Animated.View>
                                            <Animated.View style={{ opacity: opacity2 }}>
                                                <CircleIcon width={18} height={18} strokeWidth={0.5} fill="#E95322" />
                                            </Animated.View>
                                            <Animated.View style={{ opacity: opacity3 }}>
                                                <CircleIcon width={18} height={18} strokeWidth={0.5} fill="#E95322" />
                                            </Animated.View>
                                        </View>
                                    </View>
                                </>
                            ) : (
                                <CancelIcon width={139} height={139} strokeWidth={0.5} />
                            )}
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.login}>¡Order Cancelled!</Text>
                        <Text style={styles.description}>Your order has been successfully cancelled</Text>
                    </View>
                </View>
                <Text style={styles.bottomText}>If you have any questions, reach directly to our customer support</Text>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        backgroundColor: '#F5CB58',
        padding: 30,
        paddingTop: 50,
        height: height,
        flexDirection: 'column',
        rowGap: 50
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 60,
        marginTop: 20,
        width: width
    },
    textContainer: {
        justifyContent: 'flex-start',
        alignItems: "center",
        flexDirection: "column",
        rowGap: 5,
        marginTop: 30,
        width: "80%",
    },
    login: {
        fontSize: 24,
        fontFamily: 'InterBlack',
        color: '#391713',
        lineHeight: 25.76,
        textAlign: 'center',
        padding: 5
    },
    description: {
        fontFamily: 'LeagueSpartanMedium',
        fontSize: 16,
        textAlign: 'center',
        color: "#391713"
    },
    bottomText: {
        fontSize: 16,
        fontFamily: 'LeagueSpartanMedium',
        color: '#391713',
        textAlign: 'center',
        marginTop: height * 0.2
    }
});

export default ConfirmationPage;
