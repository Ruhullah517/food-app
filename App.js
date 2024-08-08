import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OnBoarding from './src/screens/OnBoarding';
import LaunchingTwo from './src/screens/LaunchingScreenTwo';
import HomePage from './src/screens/Home';
import LoginPage from './src/screens/LoginPage';
import SetPassword from './src/screens/SetPassword'
import SignupPage from './src/screens/SignupPage';
import CustomDrawerContent from './src/components/ProfileDrawer'; // Your custom drawer component

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        drawerStyle: {
          width: '83%',
          backgroundColor: 'transparent',
           // Covers 80% of the screen
        },
        overlayColor: 'rgba(0.3, 0.3, 0.3, 0.3)', // Keeps the remaining 20% of the home screen visible
        sceneContainerStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: darkens the background slightly
        },
      }}
    >
      <Drawer.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Launching">
          <Stack.Screen
            name="Launching"
            component={LaunchingTwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SetPassword"
            component={SetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignupPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
