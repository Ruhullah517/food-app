import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CircleIcon from '../../assets/Icons/CircleIcon.svg';
import HeadphoneIcon from '../../assets/Icons/headPhone2.svg';
import WebIcon from '../../assets/Icons/Web.svg';
import WhatsappIcon from '../../assets/Icons/WhatApp.svg';
import KeyIcon from '../../assets/Icons/KeyIcon.svg';
import NotifyIcon from '../../assets/Icons/NotifyIcon.svg';
import ProfileIcon from '../../assets/Icons/ProfileIcon.svg';

const { width, height } = Dimensions.get('window');


const SettingsPage = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })

    const settings = [
        {
            id: 1,
            title: "Notification Setting",
            icon: <NotifyIcon width={24} height={35} strokeWidth={1.5} />,
            checked: false,
            onPress: () => { navigation.navigate('NotificationSetting') }
        },
        {
            id: 2,
            title: "Password Setting",
            icon: <KeyIcon width={35} height={34} />,
            checked: false,
            onPress: () => {navigation.navigate('PasswordSetting') }

        },
        {
            id: 3,
            title: "Delete Account",
            icon: <ProfileIcon width={23} height={34} strokeWidth={1.3} />,
            checked: false,
            onPress: () => { }

        }
    ];

    if (!loaded) {
        return null;
    }
    return (<>
        <ScrollView >
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.signup}>Settings</Text>
                    </View>
                </View>

                <Card style={styles.card}>
                    <View style={styles.container}>
                        {settings.map(item => {
                            return (
                                <>
                                    <TouchableOpacity style={styles.rowBox} onPress={item.onPress}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20 }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 25, height: 35, }}>
                                                {item.icon}
                                            </View>

                                            <Text style={styles.label}>{item.title}</Text>

                                        </View>
                                        <TouchableOpacity style={styles.downArrow}>
                                            <BackArrow />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </>

                            )
                        })}
                    </View>
                </Card>
            </View>
        </ScrollView>

    </>
    )
};

const styles = StyleSheet.create(
    {
        header: {
            backgroundColor: '#F5CB58',
            padding: 30,
            paddingTop: 50,
        },
        headerText: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            columnGap: 90,
            marginTop: 20
        }
        ,
        signup: {
            fontSize: 28,
            fontFamily: 'LeagueSpartanBold',
            color: '#F8F8F8',
            lineHeight: 25.76,
            textAlign: 'center',
        },
        card: {
            width: width,
            height: "100%",
            alignSelf: 'center',
            marginTop: 20,
            paddingBottom: 60,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 30,
            paddingVertical: 20,
            backgroundColor: '#F5F5F5',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
        }
        ,
        container: {
            paddingTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            rowGap: 15,
            paddingBottom: 80,
            width: "100%"
        },
        description: {
            fontSize: 14,
            fontFamily: "LeagueSpartanLight"
        },
        loginButtonUpper: {
            backgroundColor: '#FFDECF',
            borderRadius: 20,
            width: 150,
            height: 28,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loginButtonActive: {
            backgroundColor: '#E95322',
            borderRadius: 20,
            width: 155,
            height: 28,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loginButtonText: {
            fontSize: 17,
            fontFamily: 'LeagueSpartanRegular',
            width: "100%",
            height: 20,
            color: '#E95322'
        },
        loginButtonTextActive: {
            fontSize: 17,
            fontFamily: 'LeagueSpartanRegular',
            width: "100%",
            height: 20,

        },
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

    }
)

export default SettingsPage;