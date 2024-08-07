// // AppNavigator.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './screens/SplashScreen';
// import LaunchingPage from './src/screens/LaunchingScreenTwo';
// import OnboardingPage from './src/screens/OnBoarding';
// import SignupPage from './screens/SignupPage';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator >
//                 {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> */}
//                 <Stack.Screen name="Launch" component={LaunchingPage} options={{ headerShown: false }} />
//                 <Stack.Screen name="Onboarding" component={OnboardingPage} options={{ headerShown: false }} />
//                 {/* <Stack.Screen name="Signup" component={SignupPage} options={{ headerShown: false }} /> */}
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// export default AppNavigator;
