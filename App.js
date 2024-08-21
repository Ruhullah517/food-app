import React, { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Drawer } from 'react-native-drawer-layout';
import OnBoarding from './src/screens/OnBoarding';
import LaunchingTwo from './src/screens/LaunchingScreenTwo';
// import HomePage from './src/screens/Home';
// import LoginPage from './src/screens/LoginPage';
// import SetPassword from './src/screens/SetPassword';
// import SignupPage from './src/screens/SignupPage';
// import { ProfileDrawerContext, NotificationsDrawerContext, CartDrawerContext } from './src/DrawerContext';
// import ProfileDrawer from './src/components/ProfileDrawer';
// import CartDrawer from './src/components/CartDrawer';
// import NotificationDrawer from './src/components/NotificationDrawer';
// import MyOrders from './src/screens/MyOrders';
// import LeaveReviewPage from './src/screens/OrderReview';
// import CancelOrderPage from './src/screens/CancelOrder';
// import ConfirmationPage from './src/components/ConfirmationPage';
// import HomeDrawer from './src/components/HomeDrawer';
// import MealsPage from './src/screens/Meals';
// import MealsDrawer from './src/components/MealsDrawer';
import BottomTabs from './src/components/MainNavigator';
import CommonStackNavigator from './src/components/MainNavigator';

const Stack = createStackNavigator();
const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Launching" component={LaunchingTwo} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="MainApp" component={CommonStackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative'
  },
});
