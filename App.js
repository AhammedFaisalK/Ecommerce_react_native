import React from 'react';
import {StyleSheet, Text,SafeAreaView,View} from 'react-native';
import ProductDetails from './src/components/Screens/ProductDetails';
import WelcomeScreen from './src/components/Screens/WelcomeScreen';
import MyCart from './src/components/Screens/MyCart';
import Checkout from './src/components/Screens/Checkout';
import Signup from './src/components/Screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/components/Screens/Navigation';

const App = () => {
//   return <SafeAreaView>
// {/* <Navigation/> */}
// <WelcomeScreen/>
//   </SafeAreaView>
return(
 <SafeAreaProvider>
      <Navigation/>
 </SafeAreaProvider>

 
)
};

export default App;
const styels= StyleSheet.create({
  text:{
    backgroundColor:"#fff"
  }
})
