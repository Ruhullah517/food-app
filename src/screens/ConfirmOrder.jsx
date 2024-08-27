import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CartItem from '../components/CartItem';


const { width, height } = Dimensions.get('window');


const ConfirmOrderPage = ({ route }) => {
    const navigation = useNavigation();

    const { checkoutDetails } = route.params;
    const { cartItems, subtotal, taxAndFees, delivery, total } = checkoutDetails;
    const [orderItems, setOrderItems] = useState(cartItems);
    const [subTotal, setSubTotal] = useState(subtotal);
    const [totalAmount, setTotalAmount] = useState(total);
    const [shippingAddress, setShippingAddress] = useState('');
    const updateQuantity = (index, newQuantity) => {
        const updatedItems = [...orderItems];
        updatedItems[index].quantity = newQuantity;
        setOrderItems(updatedItems);
        calculateSubtotal();
        calculateTotal();
    };
    const calculateSubtotal = () => {
        const result = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setSubTotal(result);
    };


    const calculateTotal = () => {
        const result = subTotal + taxAndFees + delivery;
        setTotalAmount(result);

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
                    <Text style={styles.signup}>Confirm Order</Text>
                </View>

                <Card style={styles.card}>
                    <View style={styles.cardContainer}>
                        <View style={styles.drawerItems}>
                            <View style={{ flexDirection: "column", paddingHorizontal: 15, rowGap: 10, marginBottom:10 }}>
                                <Text style={styles.shippingtext}>Shipping Address</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="778 Locust View Drive Oaklanda, CA"
                                    placeholderTextColor="#391713"
                                    value={shippingAddress}
                                    onChangeText={setShippingAddress}
                                />
                                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                    <Text style={{ fontFamily: 'LeagueSpartanMedium', fontSize: 20, color:'#391713'}}>Order Summary</Text>
                                    <TouchableOpacity style={styles.cancelButton}>
                                        <Text style={styles.cancelButtonText}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: '90%',
                                    backgroundColor: '#FFD8C7',
                                    height: 1,
                                    marginLeft: 20,
                                }}
                            />
                            {orderItems.map((item, index) => (
                                <View key={index}>
                                    <CartItem
                                        key={index}
                                        item={item}
                                        onQuantityChange={(newQuantity) => updateQuantity(index, newQuantity)}
                                        ConfirmOrderPage={true}
                                    />

                                    <View
                                        style={{
                                            width: '90%',
                                            backgroundColor: '#FFD8C7',
                                            height: 1,
                                            marginLeft: 20,
                                        }}
                                    />

                                </View>
                            ))}
                            <View style={{ marginTop: 20, }}>
                                <View style={styles.totalsContainer}>
                                    <Text style={styles.totals}>Subtotal</Text>
                                    <Text style={styles.totals}>${subTotal.toFixed(2)}</Text>
                                </View>
                                <View style={styles.totalsContainer}>
                                    <Text style={styles.totals}>Tax and Fees</Text>
                                    <Text style={styles.totals}>${taxAndFees.toFixed(2)}</Text>
                                </View>
                                <View style={styles.totalsContainer}>
                                    <Text style={styles.totals}>Delivery</Text>
                                    <Text style={styles.totals}>${delivery.toFixed(2)}</Text>
                                </View>
                                <View style={{ width: width * 0.82, marginLeft: 20, borderStyle: 'dotted', borderTopWidth: 1, borderColor: '#FFDECF' }}></View>
                                <View style={styles.totalsContainer}>
                                    <Text style={styles.totals}>Total</Text>
                                    <Text style={styles.totals}>${totalAmount}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                mode="contained"
                                onPress={() => {navigation.navigate('Payment',{orderItems, totalAmount,shippingAddress})}}
                                style={styles.loginButton}
                                labelStyle={styles.loginButtonText}
                            >
                                Place Order
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
            width: 157,
            height: 38,
            marginTop: 10,
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
            justifyContent:'center'
        },
        cancelButtonText: {
            color: '#fff',
            fontSize: 12,
            fontFamily: 'LeagueSpartanRegular',
            color: '#E95322',
        },
    }
)

export default ConfirmOrderPage;