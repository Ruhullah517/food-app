import React, { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Drawer } from 'react-native-drawer-layout';
import OnBoarding from './src/screens/OnBoarding';
import LaunchingTwo from './src/screens/LaunchingScreenTwo';
import HomePage from './src/screens/Home';
import LoginPage from './src/screens/LoginPage';
import SetPassword from './src/screens/SetPassword';
import SignupPage from './src/screens/SignupPage';
import { ProfileDrawerContext, NotificationsDrawerContext, CartDrawerContext } from './src/DrawerContext';
import ProfileDrawer from './src/components/ProfileDrawer';
import CartDrawer from './src/components/CartDrawer';
import NotificationDrawer from './src/components/NotificationDrawer';
import MyOrders from './src/screens/MyOrders';

const Stack = createStackNavigator();
const { width, height } = Dimensions.get('window');


function HomeDrawer() {
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);
  const [notificationsDrawerOpen, setNotificationsDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const profileDrawerValue = useMemo(() => ({
    openProfileDrawer: () => setProfileDrawerOpen(true),
    closeProfileDrawer: () => setProfileDrawerOpen(false),
  }), []);

  const notificationsDrawerValue = useMemo(() => ({
    openNotificationsDrawer: () => setNotificationsDrawerOpen(true),
    closeNotificationsDrawer: () => setNotificationsDrawerOpen(false),
  }), []);

  const cartDrawerValue = useMemo(() => ({
    openCartDrawer: () => setCartDrawerOpen(true),
    closeCartDrawer: () => setCartDrawerOpen(false),
  }), []);

  return (
    <ProfileDrawerContext.Provider value={profileDrawerValue}>
      <NotificationsDrawerContext.Provider value={notificationsDrawerValue}>
        <CartDrawerContext.Provider value={cartDrawerValue}>
          <Drawer
            open={profileDrawerOpen}
            onOpen={() => setProfileDrawerOpen(true)}
            onClose={() => setProfileDrawerOpen(false)}
            drawerPosition="right" // Ensuring the drawer opens from the right
            renderDrawerContent={() => <ProfileDrawer />}
            drawerStyle={{ backgroundColor: 'transparent',width:width*0.83 }}
          >
            <Drawer
              open={notificationsDrawerOpen}
              onOpen={() => setNotificationsDrawerOpen(true)}
              onClose={() => setNotificationsDrawerOpen(false)}
              drawerPosition="right" // Ensuring the drawer opens from the right
              renderDrawerContent={() => <NotificationDrawer />}
              drawerStyle={{ backgroundColor: 'transparent',width:width*0.83  }}

            >
              <Drawer
                open={cartDrawerOpen}
                onOpen={() => setCartDrawerOpen(true)}
                onClose={() => setCartDrawerOpen(false)}
                drawerPosition="right" // Ensuring the drawer opens from the right
                renderDrawerContent={() => <CartDrawer />}
                gestureHandler={false}
                drawerStyle={{ backgroundColor: 'transparent',width:width*0.83  }}

              >
                <View style={{ flex: 1 }}>
                  <HomePage />
                </View>
              </Drawer>
            </Drawer>
          </Drawer>
        </CartDrawerContext.Provider>
      </NotificationsDrawerContext.Provider>
    </ProfileDrawerContext.Provider>
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
          <Stack.Screen
            name="MyOrders"
            component={MyOrders}
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
