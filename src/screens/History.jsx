import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CardIcon from '../../assets/Icons/Card icon.svg';
import DoneIcon from '../../assets/Icons/DoneIcon.svg';


const { width, height } = Dimensions.get('window');


const HistoryPage = () => {
    const navigation = useNavigation();
    // const { orderItems, totalAmount, shippingAddress } = route.params;
    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    });


    const historyItems = [
        {
            orderNumber: "0054752",
            date: '29 Nov',
            time: '01:20 pm',
            amount: 50,
            orderStatus: 'Delivered',
            items: [
                {
                    name: 'Strawberry Shake',
                    price: 25,
                    quantity: 2,
                    date: '29 Nov',
                    time: '01:20 pm',
                    image: require('../../assets/lasagna.png'),
                },
                {
                    name: 'Broccoli Lasagna',
                    price: 12,
                    quantity: 1,
                    date: '29 Nov',
                    time: '01:20 pm',
                    image: require('../../assets/icecream.png'),
                },
            ]
        },
        {
            orderNumber: "0028762",
            date: '10 Nov',
            time: '06:05 pm',
            amount: 50,
            orderStatus: 'Delivered',
            items: [
                {
                    name: 'Broccoli Lasagna',
                    price: 12,
                    quantity: 1,
                    date: '10 Nov',
                    time: '06:05 pm',
                    image: require('../../assets/icecream.png'),

                },
                {
                    name: 'Strawberry Shake',
                    price: 25,
                    quantity: 2,
                    time: '06:05 pm',
                    date: '10 Nov',
                    image: require('../../assets/lasagna.png'),
                },
            ]
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
                    <Text style={styles.signup}>History</Text>
                </View>

                <Card style={styles.card}>
                    <View style={styles.cardContainer}>
                        <View style={styles.drawerItems}>
                            <View style={{ flexDirection: "column", paddingHorizontal: 15, rowGap: 10, marginBottom: 10 }}>
                                <View
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#FFD8C7',
                                        height: 1,
                                        marginLeft: 0,
                                    }}
                                />
                                {historyItems.map((item, index) =>
                                    <View key={index}>
                                        <View style={{ flexDirection: 'row', columnGap: 25, marginTop: 10, marginBottom: 10 }}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                                <Text style={{ fontFamily: 'LeagueSpartanMedium', fontSize: 20, color: '#391713' }}>Order No. {item.orderNumber}</Text>
                                                <Text style={{ fontFamily: "LeagueSpartanLight", fontSize: 14 }}>{item.date}, {item.time}</Text>
                                                <Text style={{ fontFamily: "LeagueSpartanLight", fontSize: 14, color: '#E95322' }}><DoneIcon /> Order {item.orderStatus}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                                                <Text style={{ fontFamily: 'LeagueSpartanMedium', fontSize: 20, color: '#E95322' }}>${item.amount.toFixed(2)}</Text>
                                                <Text style={{ fontFamily: "LeagueSpartanLight", fontSize: 14 }}>{item.items.length} items</Text>
                                                <Button
                                                    mode="contained"
                                                    onPress={() => navigation.navigate('OrderDetails', { item })}
                                                    style={styles.cancelButton}
                                                    labelStyle={styles.cancelBtnText}
                                                >
                                                    Details
                                                </Button>
                                            </View>
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
                                )}
                            </View>
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
        cancelButton: {
            backgroundColor: '#FFDECF',
            borderRadius: 20,
            width: 99,
            height: 24,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cancelButtonActive: {
            backgroundColor: '#E95322',
            borderRadius: 20,
            width: 99,
            height: 24,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cancelBtnText: {
            fontSize: 14,
            fontFamily: 'LeagueSpartanRegular',
            width: "100%",
            height: 20,
            color: "#E95322"
        },
        cancelBtnTextActive: {
            fontSize: 14,
            fontFamily: 'LeagueSpartanRegular',
            width: "100%",
            height: 20,
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
    }
)

export default HistoryPage;