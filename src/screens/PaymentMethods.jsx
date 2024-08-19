import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CircleIcon from '../../assets/Icons/CircleIcon.svg';
import CardIcon from '../../assets/Icons/Card icon.svg';
import AppleIcon from '../../assets/Icons/Mac.svg';
import GooglePlayIcon from '../../assets/Icons/Google-play.svg';
import PaypalIcon from '../../assets/Icons/Paypal.svg';

const { width, height } = Dimensions.get('window');


const PaymentMethodsPage = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })

    const [addresses, setAddresses] = useState([
        {
            id: 1,
            title: "*** *** *** 43",
            icon: <CardIcon width={39} height={27} />,
            checked: false
        },
        {
            id: 2,
            title: "Apple Pay",
            icon: <AppleIcon width={34} height={47} />,
            checked: false
        },
        {
            id: 3,
            title: "Paypal",
            icon: <PaypalIcon  width={31} height={39}/>,
            checked: false
        },
        {
            id: 4,
            title: "Google-Pay",
            icon: <GooglePlayIcon width={32} height={39}/>,
            checked: false
        }
    ]);

    const handleCheckboxPress = (id) => {
        const updatedAddresses = addresses.map(address =>
            address.id === id
                ? { ...address, checked: !address.checked }
                : { ...address, checked: false }
        );
        setAddresses(updatedAddresses);
        console.log(updatedAddresses);
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
                    <Text style={styles.signup}>Payment Methods</Text>
                </View>

                <Card style={styles.card}>

                    <View style={styles.container}>
                        {addresses.map(address => {
                            return (
                                <>
                                    <View style={styles.rowBox} >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20 }}>
                                            {address.icon}
                                            
                                                <Text style={styles.label}>{address.title}</Text>
                                           
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => handleCheckboxPress(address.id)}
                                            style={{
                                                borderColor: "#FF5722",
                                                padding: 2,
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                backgroundColor: '#FFFFFF'
                                            }}
                                        >
                                            <CircleIcon
                                                color='#FF5722'
                                                fill={address.checked ? '#FF5722' : '#FFFFFF'}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: "100%", borderTopWidth: 1, borderTopColor: '#FFD8C7' }}></View>
                                    </>
                                    
                            )
                        })}

                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            mode="contained"
                            onPress={() => { navigation.navigate('AddCard') }}
                            style={styles.loginButton}
                            labelStyle={styles.loginButtonText}
                        >
                            Add New Card
                        </Button>
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
            columnGap: 50
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
            marginTop: 50,
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
            flexDirection: 'column',
            rowGap: 15,
            paddingBottom: 80,
        },
        rowBox: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 5
        },
        description: {
            fontSize: 14,
            fontFamily: "LeagueSpartanLight"
        },
        input: {
            height: 35,
            borderColor: '#8b4513',
            borderRadius: 13,
            paddingHorizontal: 15,
            backgroundColor: '#F3E9B5',
            fontFamily: 'LeagueSpartanMedium',
            fontSize: 20,
            color: '#391713',
        },
        label: {
            color: '#391713',
            fontFamily: 'LeagueSpartanRegular',
            fontSize: 20,
        },
        loginButton: {
            backgroundColor: '#FFDECF',
            borderRadius: 30,
            width: 128,
            height: 36,
            marginTop: 8,
            marginBottom: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loginButtonText: {
            fontSize: 17,
            fontFamily: 'LeagueSpartanRegular',
            paddingVertical: 1,
            width: "100%",
            height: '50%',
            color: '#E95322'
        },

    }
)

export default PaymentMethodsPage;