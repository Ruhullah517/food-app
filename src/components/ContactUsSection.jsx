import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import HeadphoneIcon from '../../assets/Icons/headPhone2.svg';
import WebIcon from '../../assets/Icons/Web.svg';
import WhatsappIcon from '../../assets/Icons/WhatApp.svg';
import InstaIcon from '../../assets/Icons/Insta.svg';
import FBIcon from '../../assets/Icons/Facebook.svg';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from "expo-font";
import { useState } from "react";


const ContactUsSection = () => {

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    });

    const payMethods = [
        {
            id: 1,
            title: "Customer Service",
            icon: <HeadphoneIcon width={35} height={24} strokeWidth={2} />,
            checked: false
        },
        {
            id: 2,
            title: "Website",
            icon: <WebIcon width={34} height={33} />,
            checked: false
        },
        {
            id: 3,
            title: "Whatsapp",
            icon: <WhatsappIcon width={35} height={35} />,
            checked: false
        },
        {
            id: 4,
            title: "Facebook",
            icon: <FBIcon width={35} height={35} />,
            checked: false
        },
        {
            id: 5,
            title: "Instagram",
            icon: <InstaIcon width={35} height={35} />,
            checked: false
        }
    ];

    if (!loaded) {
        return null;
    }

    return (<>
        {payMethods.map((method, index) => {
            return (

                <View key={index} style={styles.rowBox} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20 }}>
                        {method.icon}

                        <Text style={styles.label}>{method.title}</Text>

                    </View>
                    <TouchableOpacity style={styles.downArrow}>
                        <BackArrow />
                    </TouchableOpacity>
                </View>


            )
        })}
    </>)
};

const styles = StyleSheet.create({
    rowBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingLeft: 5,
        width: 323,

    },
    label: {
        color: '#391713',
        fontFamily: 'LeagueSpartanMedium',
        fontSize: 20,
    },
    downArrow: {
        transform: [{ rotate: '-90deg' }]
    },
});

export default ContactUsSection;

