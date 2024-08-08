// components/LaunchingPage.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Svg } from 'react-native-svg';
import Icon2 from '../../assets/Icons/MainIcon2.svg';
import { useFonts } from 'expo-font';

const LaunchingTwo = ({ navigation }) => {

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Icon2 width={250} height={250} />
                {/* <Image source={require('../assets/ic_launcher.png')} style={styles.logo} /> */}
                <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnBoarding')}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('OnBoarding')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E95322',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
        width: 300
    },
    subtitle: {
        fontSize: 14,
        color: '#F8F8F8',
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        fontFamily:'LeagueSpartanMedium'
    },
    buttonContainer: {
        width: '60%',
        marginBottom: 60
    },
    button: {
        backgroundColor: '#F5CB58',
        paddingVertical: 8,
        borderRadius: 25,
        marginVertical: 0,
        alignItems: 'center',
    },
    button2: {
        backgroundColor: '#F3E9B5',
        paddingVertical: 8,
        borderRadius: 25,
        marginVertical: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#E95322',
        fontSize: 24,
        fontFamily:'LeagueSpartanMedium'

    },

});

export default LaunchingTwo;
