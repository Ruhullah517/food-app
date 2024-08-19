import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDrawer from './HomeDrawer';
import MealsDrawer from './MealsDrawer';
import LoginPage from '../screens/LoginPage';
import MealsPage from '../screens/Meals';
import LaunchingTwo from '../screens/LaunchingScreenTwo';
import OnBoarding from '../screens/OnBoarding';
import SetPassword from '../screens/SetPassword';
import SignupPage from '../screens/SignupPage';
import MyOrders from '../screens/MyOrders';
import BottomNav from './BottomNav';
import CancelOrderPage from '../screens/CancelOrder';
import ConfirmationPage from './ConfirmationPage';
import LeaveReviewPage from '../screens/OrderReview';
import MyProfilePage from '../screens/MyProfile';
import DeliveryAddressPage from '../screens/DeliveryAddress';
import AddNewAddressPage from '../screens/AddNewAddress';
import PaymentMethodsPage from '../screens/PaymentMethods';
import AddCardPage from '../screens/AddCard';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function CommonStackNavigator({ initialRoute }) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name="HomePage" component={HomeDrawer} />
        <Stack.Screen name="MealsPage" component={MealsDrawer} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="SignUp" component={SignupPage} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="CancelOrder" component={CancelOrderPage} />
        <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} />
        <Stack.Screen name="LeaveReview" component={LeaveReviewPage} />
        <Stack.Screen name="MyProfile" component={MyProfilePage} />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddressPage} />
        <Stack.Screen name="AddNewAddress" component={AddNewAddressPage} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethodsPage} />
        <Stack.Screen name="AddCard" component={AddCardPage} />
      </Stack.Navigator>
    );
  };


export default function BottomTabs() {
    return (
      <Tab.Navigator   tabBar={(props) => <BottomNav {...props} />}>
        <Tab.Screen 
          name="Home" 
          children={() => <CommonStackNavigator initialRoute="HomePage" />} 
          options={{ headerShown: false }} 
          
        />
        <Tab.Screen 
          name="Meals" 
          children={() => <CommonStackNavigator initialRoute="MealsPage" />} 
          options={{ headerShown: false }} 
        />
      </Tab.Navigator>
    );
  };