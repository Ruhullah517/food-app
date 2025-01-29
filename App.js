import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './src/screens/OnBoarding';
import LaunchingTwo from './src/screens/LaunchingScreenTwo';
import BottomTabs from './src/components/MainNavigator';
import CommonStackNavigator from './src/components/MainNavigator';
import Toast from 'react-native-toast-message'; // Import the Toast component
import * as SecureStore from 'expo-secure-store';

const Stack = createStackNavigator();
const { width } = Dimensions.get('window');

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await SecureStore.getItemAsync('userToken');
      if (token) {
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {
            isLoggedIn ?
              <Stack.Screen name="MainApp" component={CommonStackNavigator} />
              :
              <>
                <Stack.Screen name="Launching" component={LaunchingTwo} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="MainApp" component={CommonStackNavigator} />
              </>
          }
        </Stack.Navigator>
      </NavigationContainer>

      {/* Add Toast Component to make it globally available */}
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});
