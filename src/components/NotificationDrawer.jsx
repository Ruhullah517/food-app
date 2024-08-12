import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import OrderIcon from '../../assets/Icons/orderIcon.svg';
import CookwareIcon from '../../assets/Icons/Cookware.svg';
import HeartIcon from '../../assets/Icons/heartIcon.svg';
import DevliveryIcon from '../../assets/Icons/DeliverBoyIcon.svg';

import DynamicDrawer from './DynamicDrawer';
import NotificationWhite from '../../assets/Icons/NotificationWhite.svg';



const { width, height } = Dimensions.get('window');



export default function NotificationDrawer(props) {

  const [loaded] = useFonts({
    LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
    LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
    LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
    LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
    LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
    LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

  })
  const drawerItems = [
    { label: "We have added a product you might like.", icon: <CookwareIcon width={22} height={26} />, onPress: () => { } },
    { label: "One of your favorite is on promotion.", icon: <HeartIcon width={22} height={26} />, onPress: () => { } },
    { label: "Your order has been delivered", icon: <OrderIcon width={22} height={26} />, onPress: () => { } },
    { label: "The delivery is on his way", icon: <DevliveryIcon width={22} height={26} />, onPress: () => { } },

  ];

  if (!loaded) {
    return null;
  }

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <NotificationWhite style={styles.profilePic}  />
        <View>
          <Text style={styles.userName}>Notifications</Text>
        </View>
      </View>
      <View
                style={{
                  width: '85%',
                  backgroundColor: '#FFD8C7',
                  height: 1,
                  marginLeft: 20,
                  marginBottom:10
                }}
              />
      <View style={styles.drawerItems}>
        {drawerItems.map((item, index) => (
          <View key={index}>
            <DynamicDrawer item={item} styles={styles} index={index} />
            {index < drawerItems.length - 1 && (
              <View
                style={{
                  width: '75%',
                  backgroundColor: '#FFD8C7',
                  height: 1,
                  marginLeft: 20,
                }}
              />
            )}
          </View>
        ))}
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

  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
    flexDirection: 'row',
    columnGap: 15,
    marginTop: 20,
    justifyContent:'center'
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginTop: 10,
  },
  userName: {
    fontSize: 24,
    color: '#F8F8F8',
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
    color: '#FFFFFF',
    fontFamily: 'LeagueSpartanMedium',
    fontSize: 15,
    width:width*0.3,
  },
  iconBack: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 12,
    marginLeft:3
  }
});
