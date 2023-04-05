import React from 'react';
import {StyleSheet, Text,SafeAreaView} from 'react-native';
import ProductDetails from './src/components/Screens/ProductDetails';
import WelcomeScreen from './src/components/Screens/WelcomeScreen';
import MyCart from './src/components/Screens/MyCart';


const App = () => {
  return <SafeAreaView >
{/* <WelcomeScreen/> */}
{/* <ProductDetails/> */}
<MyCart/>
  </SafeAreaView>
};

export default App;
const styels= StyleSheet.create({
  text:{
    backgroundColor:"#fff"
  }
})
