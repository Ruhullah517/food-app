import React, { useRef } from 'react';
import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer';
import HomePage from '../screens/Home';
import ProfileDrawerContent from './ProfileDrawer';
import CartDrawerContent from './CartDrawer';
import NotificationsDrawerContent from './NotificationDrawer';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const drawerRef = useRef(null);

  const openDrawer = (drawerName) => {
    drawerRef.current?.dispatch(DrawerActions.jumpTo(drawerName));
    drawerRef.current?.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        const { state, navigation } = props;

        if (!state || !state.routes) {
          return null;
        }

        const activeRoute = state.routes[state.index];
        
        switch (activeRoute.name) {
          case 'ProfileDrawer':
            return <ProfileDrawerContent {...props} />;
          case 'CartDrawer':
            return <CartDrawerContent {...props} />;
          case 'NotificationsDrawer':
            return <NotificationsDrawerContent {...props} />;
          default:
            return null;
        }
      }}
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          width: '83%',
          backgroundColor: 'transparent',
        },
        overlayColor: 'rgba(0.3, 0.3, 0.3, 0.3)',
        sceneContainerStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
      ref={drawerRef}
    >
      <Drawer.Screen
        name="HomePage"
        options={{ headerShown: false }}
      >
        {props => (
          <HomePage
            {...props}
            openDrawer={openDrawer}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="ProfileDrawer" component={ProfileDrawerContent} />
      <Drawer.Screen name="CartDrawer" component={CartDrawerContent} />
      <Drawer.Screen name="NotificationsDrawer" component={NotificationsDrawerContent} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
