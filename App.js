import React,{useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import OnBoarding from './src/screens/OnBoarding';
import Launching from './src/screens/LaunchingScreen';
import LaunchingTwo from './src/screens/LaunchingScreenTwo';
import HomePage from './src/screens/Home';


export default function App() {
 
  return (
    <View style={styles.container}>
      
        <HomePage />
      
      {/* <OnBoarding /> */}
      {/* <LaunchingTwo/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5CB58',
  },
 
});
