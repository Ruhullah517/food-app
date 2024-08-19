import React, { useState, useMemo, useContext } from "react";
import { View, Dimensions } from "react-native";
import { Drawer } from "react-native-drawer-layout";
import ProfileDrawer from './ProfileDrawer';
import NotificationDrawer from "./NotificationDrawer";
import CartDrawer from "./CartDrawer";
import { CartDrawerContext, NotificationsDrawerContext, ProfileDrawerContext } from "../DrawerContext";

const { width } = Dimensions.get('window');

export default function DrawerWrapper({ children }) {
  const [openDrawer, setOpenDrawer] = useState(null);

  const profileDrawerValue = useMemo(() => ({
    openProfileDrawer: () => setOpenDrawer("profile"),
    closeDrawer: () => setOpenDrawer(null),
  }), []);

  const notificationsDrawerValue = useMemo(() => ({
    openNotificationsDrawer: () => setOpenDrawer("notifications"),
    closeDrawer: () => setOpenDrawer(null),
  }), []);

  const cartDrawerValue = useMemo(() => ({
    openCartDrawer: () => setOpenDrawer("cart"),
    closeDrawer: () => setOpenDrawer(null),
  }), []);

  return (
    <ProfileDrawerContext.Provider value={profileDrawerValue}>
      <NotificationsDrawerContext.Provider value={notificationsDrawerValue}>
        <CartDrawerContext.Provider value={cartDrawerValue}>
          <View style={{ flex: 1, position:'relative' }}>
            <Drawer
              open={!!openDrawer}
              onOpen={() => {}}
              onClose={() => setOpenDrawer(null)}
              drawerPosition="right"
              renderDrawerContent={() => {
                if (openDrawer === "profile") return <ProfileDrawer />;
                if (openDrawer === "notifications") return <NotificationDrawer />;
                if (openDrawer === "cart") return <CartDrawer />;
              }}
              drawerStyle={{ backgroundColor: 'transparent', width: width * 0.83, position:'absolute', zIndex:100,}}
            >
              <View style={{ flex: 1 }}>
                {children}
              </View>
            </Drawer>
          </View>
        </CartDrawerContext.Provider>
      </NotificationsDrawerContext.Provider>
    </ProfileDrawerContext.Provider>
  );
}
