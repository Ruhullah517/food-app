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
import InstaIcon from '../../assets/Icons/Insta.svg';
import FBIcon from '../../assets/Icons/Facebook.svg';
import ContactUsSection from '../components/ContactUsSection';
import FAQ from '../components/FAQsSection';
import FilterIcon from "../../assets/Icons/filterIcon.svg";

const { width, height } = Dimensions.get('window');


const HelpnFAQs = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })
    const [pressed, setPressed] = useState(0);
    const [subPressed, setSubPressed] = useState(0);

    const [payMethods, setPayMethods] = useState([
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
    ]);

    const handleCheckboxPress = (id) => {
        const updatedPayMethods = payMethods.map(method =>
            method.id === id
                ? { ...method, checked: !method.checked }
                : { ...method, checked: false }
        );
        setPayMethods(updatedPayMethods);
        console.log(updatedPayMethods);
    };




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
                        <Text style={styles.signup}>Help & FAQs</Text>
                        <Text style={{ color: '#E95322', fontFamily: 'LeagueSpartanRegular', fontSize: 16 }}>How can we help you?</Text>
                    </View>
                </View>

                <Card style={styles.card}>
                    <View style={styles.container}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', columnGap: 10, marginBottom: 30 }}>
                            <Button
                                mode="contained"
                                onPress={() => setPressed(0)}
                                style={pressed === 0 ? styles.loginButtonActive : styles.loginButtonUpper}
                                labelStyle={pressed === 0 ? styles.loginButtonTextActive : styles.loginButtonText}
                            >
                                FAQ
                            </Button>
                            <Button
                                mode="contained"
                                onPress={() => setPressed(1)}
                                style={pressed === 1 ? styles.loginButtonActive : styles.loginButtonUpper}
                                labelStyle={pressed === 1 ? styles.loginButtonTextActive : styles.loginButtonText}
                            >
                                Contact Us
                            </Button>
                        </View>

                        {pressed === 0 ? <View style={{ flexDirection: 'column', marginTop: -30, rowGap: 10 }}>
                            <View style={{ flexDirection: 'row', columnGap: 5, marginLeft: -2 }}>
                                <Button
                                    mode="contained"
                                    onPress={() => setSubPressed(0)}
                                    style={subPressed === 0 ? styles.faqsSubButtonActive : styles.faqsSubButton}
                                    labelStyle={subPressed === 0 ? styles.faqsSubButtonTextActive : styles.faqsSubButtonText}
                                >
                                    General
                                </Button>
                                <Button
                                    mode="contained"
                                    onPress={() => setSubPressed(1)}
                                    style={subPressed === 1 ? styles.faqsSubButtonActive : styles.faqsSubButton}
                                    labelStyle={subPressed === 1 ? styles.faqsSubButtonTextActive : styles.faqsSubButtonText}
                                >
                                    Account
                                </Button>
                                <Button
                                    mode="contained"
                                    onPress={() => setSubPressed(2)}
                                    style={subPressed === 2 ? styles.faqsSubButtonActive : styles.faqsSubButton}
                                    labelStyle={subPressed === 2 ? styles.faqsSubButtonTextActive : styles.faqsSubButtonText}
                                >
                                    Services
                                </Button>
                            </View>
                            <View style={styles.searchBarContainer}>
                                <TextInput
                                    style={styles.searchBar}
                                    placeholder="Search"
                                />
                                <TouchableOpacity style={styles.searchIcon}>
                                    <FilterIcon width={32} height={32} style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </View> : null}
                        {pressed === 1 ? <ContactUsSection /> : <FAQ />}

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
            columnGap: 75,
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
            marginTop: 10,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 30,
            paddingVertical: 20,
            backgroundColor: '#F8F8F8',
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
        faqsSubButton: {
            backgroundColor: '#FFDECF',
            borderRadius: 20,
            width: 102,
            height: 27,
            justifyContent: 'center',
            alignItems: 'center',
        },
        faqsSubButtonActive: {
            backgroundColor: '#E95322',
            borderRadius: 20,
            width: 102,
            height: 27,
            justifyContent: 'center',
            alignItems: 'center',
        },
        faqsSubButtonText: {
            fontSize: 14,
            fontFamily: 'LeagueSpartanMedium',
            width: "100%",
            height: 20,
            color: '#E95322'
        },
        faqsSubButtonTextActive: {
            fontSize: 14,
            fontFamily: 'LeagueSpartanMedium',
            width: "100%",
            height: 20,

        },
        searchBarContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            width: 320,
            height: 41,
            position: 'relative'
        },
        searchBar: {
            flex: 1,
            height: 41,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            paddingLeft: 36,
            position: 'relative'
        },
        searchIcon: {
            position: 'absolute',
            right: 5
        },

    }
)

export default HelpnFAQs;