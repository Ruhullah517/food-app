import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import HomePage from "../screens/Home";
import BottomNav from "./BottomNav";
import DrawerWrapper from "./DrawerWrapper";
import { useEffect, useState } from "react";

export default function HomeDrawer() {

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
    <DrawerWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        >
        <HomePage />
        {!isKeyboardVisible && <BottomNav />}
      </KeyboardAvoidingView>
    </DrawerWrapper>
  );
}
