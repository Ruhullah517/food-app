import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const OrderItem = ({ order }) => {

  const [loaded] = useFonts({
    LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
    LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
    LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
    LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
    LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
    LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

  })

  if (!loaded) {
    return null;
  }
  return (<>
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image source={order.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.itemName}>{order.name}</Text>
          <Text style={styles.date}>{order.date}</Text>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel Order</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.price}>${order.price}</Text>
        <Text style={styles.quantity}>{order.quantity} items</Text>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track Driver</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View
      style={{
        width: '96%',
        backgroundColor: '#FFD8C7',
        height: 1,
        marginLeft: 5
      }}
    />
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 5,
    alignItems: 'center',
    width: width * 0.87
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: width * 0.5,
  },
  image: {
    width: 71,
    height: 108,
    borderRadius: 20,
  },
  details: {
    marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: 3
  },
  itemName: {
    fontSize: 20,
    fontFamily: 'LeagueSpartanMedium',
    color: '#391713',
  },
  date: {
    fontSize: 14,
    color: '#391713',
    fontFamily: 'LeagueSpartanLight',

  },
  cancelButton: {
    backgroundColor: '#E95322',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: "74%",

  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'LeagueSpartanMedium',
    width: '100%'
  },
  rightSide: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    rowGap: 3
  },
  price: {
    fontSize: 20,
    fontFamily: 'LeagueSpartanMedium',
    color: '#E95322',
  },
  quantity: {
    fontSize: 14,
    color: '#391713',
    marginTop: 5,
    // marginBottom: 8,
    fontFamily: 'LeagueSpartanLight',

  },
  trackButton: {
    backgroundColor: '#FFE7DF',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  trackButtonText: {
    color: '#E95322',
    fontSize: 15,
    fontFamily: 'LeagueSpartanRegular',
  },
});

export default OrderItem;
