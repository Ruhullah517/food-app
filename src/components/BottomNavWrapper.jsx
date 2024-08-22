import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomNav from './BottomNav';

const BottomNavigationWrapper = ({ children }) => {
  const route = useRoute();
  const showBottomNav = !['Launching', 'OnBoarding'].includes(route.name);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    // Cleanup the event listeners on component unmount
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 10}
        style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
        {showBottomNav && !isKeyboardVisible && <BottomNav />}
      </KeyboardAvoidingView>
    </View>
  );
};

export default BottomNavigationWrapper;
