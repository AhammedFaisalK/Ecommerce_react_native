import React from 'react';
import {StyleSheet, Text,SafeAreaView} from 'react-native';
import ProductDetails from './src/components/Screens/ProductDetails';
import WelcomeScreen from './src/components/Screens/WelcomeScreen';
import MyCart from './src/components/Screens/MyCart';
import Checkout from './src/components/Screens/Checkout';
import Signup from './src/components/Screens/Signup';


const App = () => {
  return <SafeAreaView >
{/* <WelcomeScreen/> */}
{/* <ProductDetails/> */}
{/* <MyCart/> */}
{/* <Checkout/> */}
<Signup/>
  </SafeAreaView>
};

export default App;
const styels= StyleSheet.create({
  text:{
    backgroundColor:"#fff"
  }
})
