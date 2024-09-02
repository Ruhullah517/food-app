import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import OrderItem from '../components/OrderDetailItem';



const { width, height } = Dimensions.get('window');


const OrderDetailPage = ({ route }) => {
    const navigation = useNavigation();

    const { item } = route.params;
    const [order, setOrder] = useState(item);
    const taxAndFees = 5.00; 
    const delivery = 3.00;
    const calculateSubtotal = () => {
        return order.items.reduce((sum, order) => sum + order.price * order.quantity, 0);
    };
    const calculateTotal = () => {
        return calculateSubtotal() + taxAndFees + delivery;
    };
    const updateQuantity = (index, newQuantity) => {
        const updatedItems = [...order.items];
        updatedItems[index].quantity = newQuantity;
        setOrder({ ...order, items: updatedItems });
    };

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
                    <Text style={styles.signup}>Order Details</Text>
                </View>

                <Card style={styles.card}>
                    <View style={styles.cardContainer}>
                        <View style={styles.drawerItems}>
                            <View style={{ flexDirection: "column", paddingHorizontal: 25, rowGap: 10, marginBottom: 10 }}>
                                <View>
                                    <Text style={{ fontFamily: 'LeagueSpartanMedium', fontSize: 20 }}>Order No. {order.orderNumber}</Text>
                                    <Text style={{ fontFamily: 'LeagueSpartanLight', fontSize: 14 }}>{order.date}, {order.time}</Text>
                                </View>
                                {order.items.map((item, index) =>
                                    <View key={index}>
                                        <View
                                            style={{
                                                width: '100%',
                                                backgroundColor: '#FFD8C7',
                                                height: 1,
                                                marginLeft: 0,
                                            }}
                                        />
                                        <OrderItem
                                            key={index}
                                            item={item}
                                            onQuantityChange={(newQuantity) => updateQuantity(index, newQuantity)}
                                        />
                                    </View>
                                )}
                            </View>
                            <View style={{ marginTop: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.totalsContainer}>
                                    <Text style={styles.totals}>Subtotal</Text>
                                    <Text style={styles.totals}>${calculateSubtotal().toFixed(2)}</Text>
                                </View>
                                <View style={styles.totalsContainer}>
                                    <Text style={styles.totals}>Tax and Fees</Text>
                                    <Text style={styles.totals}>${taxAndFees}</Text>
                                </View>
                                <View style={styles.totalsContainer}>
                                    <Text style={styles.totals}>Delivery</Text>
                                    <Text style={styles.totals}>${delivery}</Text>
                                </View>
                                <View style={{ width: width * 0.82, marginLeft: 20, borderStyle: 'dotted', borderTopWidth: 1, borderColor: '#FFDECF' }}></View>
                                <View style={styles.totalsContainer}>
                                    <Text style={styles.totals}>Total</Text>
                                    <Text style={styles.totals}>${calculateTotal().toFixed(2)}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                mode="contained"
                                onPress={()=>navigation.navigate('LiveTracker')}
                                style={styles.loginButton}
                                labelStyle={styles.loginButtonText}
                            >
                                Order Again
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
            columnGap: 60
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
            width: width,
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
        totalsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
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
            width: 100,
            height: 26,
            marginTop: 10,
            marginBottom: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loginButtonText: {
            fontSize: 15,
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

export default OrderDetailPage;