import React from 'react';
import {StyleSheet, Text,SafeAreaView} from 'react-native';
import ProductDetails from './src/components/Screens/ProductDetails';
import WelcomeScreen from './src/components/Screens/WelcomeScreen';


const App = () => {
  return <SafeAreaView>
{/* <WelcomeScreen/> */}
<ProductDetails/>
  </SafeAreaView>
};

export default App;
const styels= StyleSheet.create({
  text:{
    fontSize:40,
    fontFamily:'Gorditas-Bold'
  }
})
