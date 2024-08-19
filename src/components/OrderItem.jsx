import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import DoneIcon from '../../assets/Icons/DoneIcon.svg';
import CancelIcon from '../../assets/Icons/CancelIcon.svg';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OrderItem = ({ order, pressed }) => {
  const navigation = useNavigation();
  

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
      <Image source={order.image} style={styles.image} />
      <View style={pressed != 2 ? styles.detailContainer : styles.detailContainerCancelled}>
        <View style={styles.leftSide}>
          <View style={pressed === 0 ? styles.detailsActive : styles.detailsCompleted}>
            <Text style={styles.itemName}>{order.name}</Text>
            <Text style={styles.date}>{order.date}, {order.time}</Text>
            {pressed !== 0 && (
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', columnGap: 3 }}>
                {pressed === 1 ? <DoneIcon width={10} height={10} /> : <CancelIcon width={10} height={10} />}
                <Text style={{ color: '#E95322', fontFamily: 'LeagueSpartanLight', fontSize: 12 }}>
                  {pressed === 1 ? "Order delivered" : "Order Cancelled"}
                </Text>
              </View>
            )}
            {pressed !== 2 && (
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  if (pressed === 1) {
                    navigation.navigate('LeaveReview', {order});
                  }else{
                    navigation.navigate('CancelOrder', {order});
                  }
                }}
              >
                {pressed === 0 ? (
                  <Text style={styles.cancelButtonText}>Cancel Order</Text>
                ) : (
                  pressed === 1 && <Text style={styles.cancelButtonText}>Leave a review</Text>
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={pressed === 0 ? styles.rightSideActive : styles.rightSideCompleted}>
          <Text style={styles.price}>${order.price.toFixed(2)}</Text>
          <Text style={styles.quantity}>{order.quantity} items</Text>
          {pressed != 2 ? <TouchableOpacity style={pressed === 0 ? styles.trackButtonActive : styles.trackButtonCompleted}>
            <Text style={styles.trackButtonText}>{pressed === 0 ? "Track Driver" : pressed === 1 ? "Order Again" : null}</Text>
          </TouchableOpacity> : null}
        </View>
      </View>
    </View >
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
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 5,
    alignItems: 'center',
    width: "100%",
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 108,
    columnGap: 15
  },
  detailContainerCancelled: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 108,
    columnGap: 50
  }
  ,
  leftSide: {
    flexDirection: 'row',

  },
  image: {
    width: 71,
    height: 108,
    borderRadius: 20,
  },
  detailsActive: {
    marginLeft: 5,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    height: 108
  },
  detailsCompleted: {
    marginLeft: 5,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    // rowGap:2,
    height: 95

  },
  itemName: {
    fontSize: 20,
    fontFamily: 'LeagueSpartanMedium',
    color: '#391713',
    width: 155
  },
  date: {
    fontSize: 14,
    color: '#391713',
    fontFamily: 'LeagueSpartanLight',

  },
  cancelButton: {
    backgroundColor: '#E95322',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 114,
    height: 26

  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'LeagueSpartanMedium',
    width: '100%'
  },
  rightSideActive: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: -45,
    // rowGap:5,
    height: 100
  },
  rightSideCompleted: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: -45,
    // rowGap:5,
    height: 100
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
  trackButtonActive: {
    backgroundColor: '#FFE7DF',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 95,
    height: 25
  },
  trackButtonCompleted: {
    backgroundColor: '#FFE7DF',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 100,
    height: 26
  },
  trackButtonText: {
    color: '#E95322',
    fontSize: 15,
    fontFamily: 'LeagueSpartanRegular',
  },
});

export default OrderItem;
