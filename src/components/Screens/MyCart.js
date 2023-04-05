import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import LeftArrow from '../../assets/Icons/left-arrow.svg';
import Cart from '../../assets/Icons/cart.svg';



const MyCart = () => {
  return (
    <View style={styles.cartHeader}>
    <TouchableOpacity activeOpacity={0.8}>
        <LeftArrow width={27} height={27}/>
    </TouchableOpacity>
    <Text>My Cart</Text>
      <TouchableOpacity activeOpacity={0.8}>
      <Cart width={27} height={27}/>
      </TouchableOpacity>
  </View>
  )
};

export default MyCart;
const styles = StyleSheet.create({
    cartHeader:{
        paddingVertical:30,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#fff"
    }
})