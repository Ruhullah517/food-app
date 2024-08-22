import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AddIcon from '../../assets/Icons/plusIcon';
import AddIconWhite from '../../assets/Icons/plusIconWhite';
import MinusIcon from '../../assets/Icons/minusIcon';
import MinusIconWhite from '../../assets/Icons/minusIconWhite';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('window');


const CartItem = ({ item, onQuantityChange, ConfirmOrderPage }) => {

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    });


    const handleIncrease = () => {
        onQuantityChange(item.quantity + 1);
    };

    const handleDecrease = () => {
        if (item.quantity > 1) {
            onQuantityChange(item.quantity - 1);
        }
    };


    if (!loaded) {
        return null;
    }

    return (
        <View style={ConfirmOrderPage ? styles.containerConfirm : styles.container}>
            {/* Left Side: Image, Name, and Price */}
            <View style={!ConfirmOrderPage ? styles.leftSide : styles.leftSideConfirm}>
                <Image source={item.image} style={!ConfirmOrderPage ? styles.image : styles.imageConfirm} />
                <View style={styles.details}>
                    <Text style={ConfirmOrderPage ? styles.itemNameConfirm : styles.itemName}>{item.name}</Text>
                    {!ConfirmOrderPage ? <Text style={ConfirmOrderPage ? styles.priceConfirm : styles.price}>${item.price.toFixed(2)}</Text> :
                        <View style={{ flexDirection: 'column', rowGap: 5, }}>
                            <View style={{ flexDirection: 'row', columnGap: 5, }}>
                                <Text style={ConfirmOrderPage ? styles.dateConfirm : styles.date}>{item.date}</Text>
                                <Text style={ConfirmOrderPage ? styles.timeConfirm : styles.time}>{item.time}</Text>
                            </View>
                            <TouchableOpacity style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText}>Cancel Order</Text>
                            </TouchableOpacity>

                        </View>
                    }
                </View>
            </View>

            {/* Right Side: Date, Time, and Quantity Controls */}
            <View style={styles.rightSide}>
                {!ConfirmOrderPage ? <Text style={ConfirmOrderPage ? styles.dateConfirm : styles.date}>{item.date}</Text> :
                    <Text style={ConfirmOrderPage ? styles.priceConfirm : styles.price}>${item.price.toFixed(2)}</Text>}
                {!ConfirmOrderPage ? <Text style={ConfirmOrderPage ? styles.timeConfirm : styles.time}>{item.time}</Text> :
                    <Text style={{ fontFamily: 'LeagueSpartanLight', fontSize: 14 }}>{item.quantity} items</Text>
                }
                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={ConfirmOrderPage ? styles.buttonBackConfirm : styles.buttonBack} onPress={handleDecrease}>
                        {!ConfirmOrderPage ? <MinusIcon style={styles.button} /> :
                            <MinusIconWhite style={styles.buttonConfirm} />}
                    </TouchableOpacity>
                    <Text style={ConfirmOrderPage ? styles.quantityConfirm : styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity style={ConfirmOrderPage ? styles.buttonBackConfirm : styles.buttonBack} onPress={handleIncrease}>
                        {!ConfirmOrderPage ? <AddIcon style={styles.button} /> :
                            <AddIconWhite style={styles.buttonConfirm} />}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: '#F54A0D',
        borderRadius: 10,
        marginBottom: 10,
        width: width * 0.77

    },
    containerConfirm: {
        flexDirection: 'row',
        columnGap: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: '#F54A0D',
        borderRadius: 10,
        marginBottom: 10,
        width: width * 0.9

    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.2,
        marginLeft: 7
    },
    leftSideConfirm: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.6,
        marginLeft: 7
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 20,
        marginRight: 10,
    },
    imageConfirm: {
        width: 71,
        height: 108,
        borderRadius: 20,
        marginRight: 10,
    },
    details: {
        flexDirection: 'column',
    },
    itemName: {
        fontSize: 15,
        color: '#FFFFFF',
        fontFamily: 'LeagueSpartanMedium'
    },
    itemNameConfirm: {
        fontSize: 20,
        color: '#391713',
        fontFamily: 'LeagueSpartanMedium'
    },
    price: {
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'LeagueSpartanLight'
    },
    priceConfirm: {
        fontSize: 20,
        color: '#E95322',
        fontFamily: 'LeagueSpartanMedium'
    },
    rightSide: {
        alignItems: 'flex-end',
    },
    date: {
        fontSize: 13,
        fontFamily: 'LeagueSpartanMedium',
        color: '#FFFFFF',
    },
    dateConfirm: {
        fontSize: 14,
        fontFamily: 'LeagueSpartanLight',
        color: '#391713',
    },
    time: {
        fontSize: 13,
        color: '#FFFFFF',
        fontFamily: 'LeagueSpartanMedium',

    },
    timeConfirm: {
        fontSize: 14,
        color: '#391713',
        fontFamily: 'LeagueSpartanLight',

    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    quantityContainerConfirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    button: {
        fontSize: 18,
        color: '#FFFFFF',
        paddingHorizontal: 10,
    },
    buttonConfirm: {
        fontSize: 18,
        color: '#FFFFFF',
        paddingHorizontal: 10,
    },
    buttonBack: {
        backgroundColor: "#fff",
        width: 14,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    buttonBackConfirm: {
        backgroundColor: "#E95322",
        width: 14,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    quantity: {
        fontSize: 13,
        color: '#FFFFFF',
        marginHorizontal: 10,
        fontFamily: 'LeagueSpartanRegular'
    },
    quantityConfirm: {
        fontSize: 13,
        color: '#391713',
        marginHorizontal: 10,
        fontFamily: 'LeagueSpartanRegular'
    },
    cancelButton: {
        backgroundColor: '#FFDECF',
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: 106,
        height: 25,
        alignItems:'center'

    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'LeagueSpartanMedium',
        width: '100%',
        color: '#E95322'
    },
});

export default CartItem;
