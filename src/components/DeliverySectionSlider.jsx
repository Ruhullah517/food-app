import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DeliveryBoyIcon from '../../assets/Icons/DeliverBoyIcon.svg';

const DeliverySectionSlider = () => {
    const slideAnim = useRef(new Animated.Value(0)).current; // Initial position of the icon

    useEffect(() => {
        // Start the sliding animation
        Animated.timing(slideAnim, {
            toValue: 1, // End position
            duration: 3000, // Duration of the animation in milliseconds
            useNativeDriver: true, // Using native driver for better performance
        }).start();
    }, [slideAnim]);

    const translateX = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 270], // Start at 0% and slide to 100%
    });

    return (
        <View style={styles.container}>
            {/* Gradient Slider with Shine */}
            <View style={styles.sliderContainer}>
                <LinearGradient
                    colors={['#ff0000', '#ff9900', '#00ff00']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.slider}
                >
                    {/* Shine Effect */}
                    <LinearGradient
                        colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0)']}
                        start={{ x: 1, y: 0.3 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.shine}
                    />
                    <Animated.View
                        style={[
                            styles.iconContainer,
                            { transform: [{ translateX }] }, // Apply the sliding animation
                        ]}
                    >
                        <DeliveryBoyIcon style={styles.icon} width={22} height={21} />
                    </Animated.View>
                </LinearGradient>
            </View>

            {/* Text and Time/Date */}
            <View style={styles.detailsContainer}>
                {/* Left Side */}
                <View style={styles.leftContainer}>
                    <Text style={styles.text}>Delivery goes your way</Text>
                    <Text style={styles.date}>01 Sep 24</Text>
                    <Text style={styles.time}>06:20 PM</Text>
                </View>

                {/* Right Side */}
                <View style={styles.rightContainer}>
                    <Text style={styles.text}>Pick up your delivery</Text>
                    <Text style={styles.date}>01 Sep 24</Text>
                    <Text style={styles.time}>07:15 PM</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
    },
    sliderContainer: {
        width: '100%',
        height: 22,
        marginBottom: 20,
        borderRadius: 15,
        // overflow: 'hidden',
        position: 'relative',
    },
    slider: {
        flex: 1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shine: {
        position: 'absolute',
        top: 2,
        left: 5,
        right: 0,
        height: '50%',
        borderRadius: 15,
        width: "95%"
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -10,
        left: 0, // Start icon from the left side of the slider
        borderWidth: 2,
        borderColor: '#E95322'
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: '#ff9900',
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 0,
    },
    leftContainer: {
        alignItems: 'flex-start',
    },
    rightContainer: {
        alignItems: 'flex-end',
    },
    text: {
        color: '#ff6600',
        fontSize: 13,
        fontFamily: 'LeagueSpartanMedium'
    },
    date: {
        color: '#391713',
        fontSize: 13,
        fontFamily: 'LeagueSpartanMedium'

    },
    time: {
        color: '#B8B8B8',
        fontSize: 13,
        fontFamily: 'LeagueSpartanMedium'

    },
});

export default DeliverySectionSlider;
