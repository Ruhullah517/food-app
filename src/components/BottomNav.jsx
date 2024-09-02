import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HomeIcon from "../../assets/Icons/HomeIcon.svg";
import HeartIcon from "../../assets/Icons/heartIconWhite.svg";
import DishIcon from "../../assets/Icons/DishIcon.svg";
import OrderIcon from "../../assets/Icons/orderBoard.svg";
import HeadPhoneIcon from "../../assets/Icons/headPhoneIcon.svg";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

// export function BottomTabs() {
//   return (
//     <Tab.Navigator style={styles.container} >
//       <Tab.Screen name='Home' component={HomeDrawer}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TouchableOpacity style={styles.navItem}>
//               <HomeIcon
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           )
//         }}
//       />
//       <Tab.Screen name='Meals' component={MealsPage}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TouchableOpacity style={styles.navItem}>
//               <DishIcon
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           )
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

const BottomNav = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomePage')}>
        <HomeIcon
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MealsPage')}>
        <DishIcon
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={()=> navigation.navigate('FavouritesPage')}>
        <HeartIcon
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={()=>navigation.navigate('History')}>
        <OrderIcon
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <HeadPhoneIcon
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#E95322', // Replace with your primary color
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: '#fff', // Replace with your primary foreground color
  },
});

export default BottomNav;
