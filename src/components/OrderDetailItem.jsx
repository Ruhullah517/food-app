import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AddIcon from '../../assets/Icons/plusIcon';
import MinusIcon from '../../assets/Icons/minusIcon';


const { width, height } = Dimensions.get('window');


const OrderItem = ({ item, onQuantityChange }) => {

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
        <View style={styles.container}>
            {/* Left Side: Image, Name, and Price */}
            <View style={styles.leftSide}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                </View>
            </View>

            {/* Right Side: Date, Time, and Quantity Controls */}
            <View style={styles.rightSide}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.time}>{item.time}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.buttonBack} onPress={handleDecrease}>
                        <MinusIcon style={styles.button} />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity style={styles.buttonBack} onPress={handleIncrease}>
                        <AddIcon style={styles.button} />
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
        paddingVertical: 10,
        // backgroundColor: '#F54A0D',
        borderRadius: 10,
        marginBottom: 10,
        // width: width * 0.77

    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.2,
        // marginLeft: 7
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 20,
        marginRight: 10,
    },

    details: {
        flexDirection: 'column',
    },
    itemName: {
        fontSize: 15,
        color: '#391713',
        fontFamily: 'LeagueSpartanMedium'
    },

    price: {
        fontSize: 14,
        color: '#391713',
        fontFamily: 'LeagueSpartanLight'
    },

    rightSide: {
        alignItems: 'flex-end',
    },
    date: {
        fontSize: 13,
        fontFamily: 'LeagueSpartanMedium',
        color: '#391713',
    },

    time: {
        fontSize: 13,
        color: '#391713',
        fontFamily: 'LeagueSpartanMedium',

    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },

    button: {
        fontSize: 18,
        color: '#391713',
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

    quantity: {
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
        alignItems: 'center'

    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'LeagueSpartanMedium',
        width: '100%',
        color: '#E95322'
    },
});

export default OrderItem;
