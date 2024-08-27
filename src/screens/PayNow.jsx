import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CardIcon from '../../assets/Icons/Card icon.svg'


const { width, height } = Dimensions.get('window');


const PayNowPage = ({ route }) => {
    const navigation = useNavigation();

    const { orderItems, totalAmount, shippingAddress } = route.params;


    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    });




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
                    <Text style={styles.signup}>Payment</Text>
                </View>

                <Card style={styles.card}>
                    <View style={styles.cardContainer}>
                        <View style={styles.drawerItems}>
                            <View style={{ flexDirection: "column", paddingHorizontal: 15, rowGap: 10, marginBottom: 10 }}>
                                <Text style={styles.shippingtext}>Shipping Address</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="778 Locust View Drive Oaklanda, CA"
                                    placeholderTextColor="#391713"
                                    value={shippingAddress}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'LeagueSpartanMedium', fontSize: 20, color: '#391713' }}>Order Summary</Text>
                                    <TouchableOpacity style={styles.cancelButton}>
                                        <Text style={styles.cancelButtonText}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        {orderItems.map(item => (
                                            <View style={{ flexDirection: 'row', columnGap: 10 }}>
                                                <Text style={{ fontFamily: "LeagueSpartanLight", fontSize: 14 }}>{item.name}</Text>
                                                <Text style={{ fontFamily: "LeagueSpartanLight", fontSize: 14, color: '#E95322' }}>{item.quantity}Items</Text>
                                            </View>
                                        ))}
                                    </View>
                                    <Text style={{ fontFamily: 'LeagueSpartanMedium', fontSize: 20 }}>${totalAmount}.00</Text>
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#FFD8C7',
                                        height: 1,
                                        marginLeft: 0,
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'LeagueSpartanMedium', fontSize: 20, color: '#391713' }}>Payment Method</Text>
                                    <TouchableOpacity style={styles.cancelButton}>
                                        <Text style={styles.cancelButtonText}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', columnGap: 5 }}>
                                        <CardIcon width={31} height={21} />
                                        <Text>Credit Card</Text>
                                    </View>
                                    <Text style={styles.inputCard}>*** *** *** 43 /00 /000</Text>
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#FFD8C7',
                                        height: 1,
                                        marginLeft: 0,
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'LeagueSpartanMedium', fontSize: 20, color: '#391713' }}>Delivery Time</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text>Estimated Delivery</Text>
                                    <Text style={{ fontFamily: 'LeagueSpartanMedium', fontSize: 20, color: '#E95322' }}>25 mins</Text>
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#FFD8C7',
                                        height: 1,
                                        marginLeft: 0,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                mode="contained"
                                onPress={() => { }}
                                style={styles.loginButton}
                                labelStyle={styles.loginButtonText}
                            >
                                Pay Now
                            </Button>
                        </View>
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
            columnGap: 90
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
            paddingVertical: 25,
            backgroundColor: '#F5F5F5',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            alignItems: 'center'
        },
        drawerItems: {
            width: width * 0.95,
        },
        shippingtext: {
            fontFamily: "LeagueSpartanBold",
            fontSize: 24
        },
        input: {
            height: 35,
            borderColor: '#8b4513',
            // borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 15,
            marginBottom: 20,
            backgroundColor: '#F3E9B5',
        },
        inputCard: {
            height: 20,
            // width:155,
            borderColor: '#8b4513',
            // borderWidth: 1,
            borderRadius: 20,
            backgroundColor: '#F3E9B5',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            paddingVertical: 2,
        },
        totalsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            // backgroundColor: '#F54A0D',
            // borderRadius: 10,
            width: width * 0.93
        },
        totals: {
            color: '#391713',
            fontFamily: 'LeagueSpartanMedium',
            fontSize: 20,
            marginLeft: 10
        },
        loginButton: {
            backgroundColor: '#FFDECF',
            borderRadius: 30,
            width: 150,
            height: 38,
            marginTop: 50,
            marginBottom: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loginButtonText: {
            fontSize: 23,
            fontFamily: 'LeagueSpartanRegular',
            paddingVertical: 1,
            width: "100%",
            height: '50%',
            color: '#E95322'
        },
        cancelButton: {
            backgroundColor: '#FFDECF',
            paddingVertical: 1,
            paddingHorizontal: 10,
            borderRadius: 20,
            width: 58,
            alignItems: 'center',
            justifyContent: 'center'
        },
        cancelButtonText: {
            color: '#fff',
            fontSize: 12,
            fontFamily: 'LeagueSpartanRegular',
            color: '#E95322',
        },
    }
)

export default PayNowPage;