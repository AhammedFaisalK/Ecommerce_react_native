import React from 'react';
import {StyleSheet, Text,SafeAreaView,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/components/Screens/Navigation';

const App = () => {
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
