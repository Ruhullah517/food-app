import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import OrderIcon from '../../assets/Icons/orderIcon.svg';
import CallIcon from '../../assets/Icons/callIcon.svg';
import ChatIcon from '../../assets/Icons/chatIcon.svg';
import ProfileIcon from '../../assets/Icons/ProfileIcon.svg';
import LocationIcon from '../../assets/Icons/locationIcon.svg';
import CardIcon from '../../assets/Icons/Card icon.svg';
import SettingIcon from '../../assets/Icons/settingIcon.svg';
import LogoutIcon from '../../assets/Icons/logoutIcon.svg';
import { useNavigation } from '@react-navigation/native';



const { width, height } = Dimensions.get('window');


export default function CustomDrawerContent(props) {

const navigation = useNavigation();

  const [loaded] = useFonts({
    LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
    LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
    LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
    LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
    LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
    LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

  })
  const drawerItems = [
    { label: "My Orders", icon: <OrderIcon width={22} height={26} />, onPress: () => { navigation.navigate('MyOrders')} },
    { label: "My Profile", icon: <ProfileIcon width={22} height={26} />, onPress: () => { } },
    { label: "Delivery Address", icon: <LocationIcon width={22} height={26} />, onPress: () => { } },
    { label: "Payment Methods", icon: <CardIcon width={22} height={26} />, onPress: () => { } },
    { label: "Contact Us", icon: <CallIcon width={22} height={26} />, onPress: () => { } },
    { label: "Help & FAQs", icon: <ChatIcon width={22} height={26} />, onPress: () => { } },
    { label: "Settings", icon: <SettingIcon width={22} height={26} />, onPress: () => { } },
    { label: "Log Out", icon: <LogoutIcon width={22} height={26} />, onPress: () => { } },
  ];

  if (!loaded) {
    return null;
  }

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image source={require("../../assets/profile.png")} style={styles.profilePic} />
        <View>
          <Text style={styles.userName}>John Smith</Text>
          <Text style={styles.userEmail}>LoremIpsum@email.com</Text>
        </View>
      </View>
      <View style={styles.drawerItems}>
        {drawerItems.map((item, index) => (<>
          <DrawerItem
            key={index}
            label={item.label}
            labelStyle={styles.item}
            onPress={item.onPress}
            icon={() => <View style={styles.iconBack}>{item.icon}</View>}
          />
          {index < drawerItems.length - 1 ? < View style={{ width: "75%", backgroundColor: '#FFD8C7', height: 1, marginLeft: 20 }}></View >: null
}</>
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
    marginLeft: 15,
    marginBottom: 20,
    flexDirection: 'row',
    columnGap: 15,
    marginTop: 20
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginTop:10
  },
  userName: {
    fontSize: 33,
    // fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'LeagueSpartanMedium'
  },
  userEmail: {
    fontSize: 16,
    color: '#F3E9B5',
    fontFamily: 'LeagueSpartanMedium'

  },
  drawerItems: {
    flex: 1,
    width: width * 0.9
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
  }
});