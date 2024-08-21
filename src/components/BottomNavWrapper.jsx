import React from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomNav from './BottomNav';

const BottomNavigationWrapper = ({ children }) => {
  const route = useRoute();
  const showBottomNav = !['Launching', 'OnBoarding'].includes(route.name);

  return (
    <View style={{ flex: 1 }}>
      {children}
      {showBottomNav && <BottomNav />}
    </View>
  );
};

export default BottomNavigationWrapper;
