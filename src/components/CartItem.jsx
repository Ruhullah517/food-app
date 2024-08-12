import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AddIcon from '../../assets/Icons/plusIcon';
import MinusIcon from '../../assets/Icons/minusIcon';

const { width, height } = Dimensions.get('window');


const CartItem = ({ item, onQuantityChange }) => {

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
        padding: 10,
        // backgroundColor: '#F54A0D',
        borderRadius: 10,
        marginBottom: 10,
        width: width * 0.77

    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.2,
        marginLeft: 10
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
        color: '#FFFFFF',
        fontFamily: 'LeagueSpartanMedium'
    },
    price: {
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'LeagueSpartanLight'
    },
    rightSide: {
        alignItems: 'flex-end',
    },
    date: {
        fontSize: 13,
        fontFamily: 'LeagueSpartanMedium',
        color: '#FFFFFF',
    },
    time: {
        fontSize: 13,
        color: '#FFFFFF',
        fontFamily: 'LeagueSpartanMedium',

    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    button: {
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
    quantity: {
        fontSize: 13,
        color: '#FFFFFF',
        marginHorizontal: 10,
        fontFamily: 'LeagueSpartanRegular'
    },
});

export default CartItem;
