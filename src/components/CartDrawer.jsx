import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import OrderIcon from '../../assets/Icons/orderIcon.svg';
import CartIcon from '../../assets/Icons/cart.svg';
import AddIcon from '../../assets/Icons/addIcon.svg';
import DynamicDrawer from './DynamicDrawer';
import CartItem from './CartItem';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const { width, height } = Dimensions.get('window');



export default function CartDrawer(props) {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
    LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
    LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
    LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
    LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
    LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

  })
  const initialCartItems = [
    {
      image: require('../../assets/icecream.png'),
      name: 'Strawberry Shake',
      price: 20.00,
      date: '29/11/24',
      time: '15:00',
      quantity: 1,
    },
    {
      image: require('../../assets/lasagna.png'),
      name: 'Broccoli Lasagna',
      price: 12.00,
      date: '29/11/24',
      time: '12:00',
      quantity: 1,
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const taxAndFees = 5.00; // Fixed tax and fees
  const delivery = 3.00; // Fixed delivery fee

  const subtotal = calculateSubtotal();
  const total = subtotal + taxAndFees + delivery;

  const handleCheckout = () => {

    const checkoutDetails = {
      cartItems,
      subtotal,
      taxAndFees,
      delivery,
      total
    };
    navigation.navigate('ConfirmOrder', { checkoutDetails });
  }


  if (!loaded) {
    return null;
  }

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profilePic}>
          <CartIcon width={25} height={26} />
        </View>
        <View>
          <Text style={styles.userName}>Cart</Text>
        </View>
      </View>
      <View
        style={{
          width: '85%',
          backgroundColor: '#F5CB58',
          height: 1,
          marginLeft: 20,
          marginBottom: 10
        }}
      />
      <View style={styles.drawerItems}>
        {cartItems.length > 0 ?
          <Text style={{ color: '#F8F8F8', fontFamily: 'LeagueSpartanMedium', fontSize: 20, marginLeft: 25, marginBottom: 10 }}>You have {cartItems.length} items in the cart</Text>
          : null
        }
        {cartItems.length < 1 ? (
          <View style={{ width: width * 0.7, alignItems: 'center', marginLeft: 10 }}>
            <View>
              <Text style={{ color: '#F8F8F8', fontFamily: 'LeagueSpartanMedium', fontSize: 20, }}>Your Cart Is Empty</Text>
            </View>
            <View style={{ marginTop: 60 }}>
              <AddIcon width={184} height={184} />
            </View>
            <Text style={{ color: '#F8F8F8', fontFamily: 'LeagueSpartanBold', fontSize: 24, textAlign: 'center' }}>Want To Add Something?</Text>
          </View>

        ) : (
          cartItems.map((item, index) => (
            <View key={index}>
              <CartItem
                key={index}
                item={item}
                onQuantityChange={(newQuantity) => updateQuantity(index, newQuantity)}
              />

              <View
                style={{
                  width: '76%',
                  backgroundColor: '#FFD8C7',
                  height: 1,
                  marginLeft: 20,
                }}
              />

            </View>
          ))
        )}
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <View style={styles.totalsContainer}>
            <Text style={styles.totals}>Subtotal</Text>
            <Text style={styles.totals}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.totalsContainer}>
            <Text style={styles.totals}>Tax and Fees</Text>
            <Text style={styles.totals}>${taxAndFees.toFixed(2)}</Text>
          </View>
          <View style={styles.totalsContainer}>
            <Text style={styles.totals}>Delivery</Text>
            <Text style={styles.totals}>${delivery.toFixed(2)}</Text>
          </View>
          <View style={{ width: width * 0.68, marginLeft: 20, borderStyle: 'dotted', borderTopWidth: 1, borderColor: '#FFDECF' }}></View>
          <View style={styles.totalsContainer}>
            <Text style={styles.totals}>Total</Text>
            <Text style={styles.totals}>${total}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginLeft: -20 }}>
          <Button
            mode="contained"
            style={styles.loginButton}
            labelStyle={styles.loginButtonText}
            onPress={handleCheckout}
          >
            Checkout
          </Button>
        </View>
      </View>

    </DrawerContentScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E95322',
    paddingLeft: 10,
    borderTopLeftRadius: 70,
    borderBottomLeftRadius: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 100

  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    columnGap: 15,
    marginTop: 20,
    justifyContent: 'center'
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  userName: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'LeagueSpartanBold'
  },
  userEmail: {
    fontSize: 16,
    color: '#F3E9B5',
    fontFamily: 'LeagueSpartanMedium'

  },
  drawerItems: {
    flex: 1,
    width: width * 0.9,
  },
  item: {
    color: '#F3E9B5',
    fontFamily: 'LeagueSpartanMedium',
    fontSize: 24,

  },
  iconBack: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 12,
  },
  totalsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: '#F54A0D',
    borderRadius: 10,
    width: width * 0.77
  },
  totals: {
    color: '#F8F8F8',
    fontFamily: 'LeagueSpartanMedium',
    fontSize: 20,
    marginLeft: 10
  },
  loginButton: {
    backgroundColor: '#F5CB58',
    borderRadius: 30,
    width: width * 0.4,
    marginTop: 20,
    marginBottom: 4,
    height: 40

  },
  loginButtonText: {
    fontSize: 24,
    fontFamily: 'LeagueSpartanMedium',
    paddingVertical: 2,
    color: '#E95322'
  },
});

