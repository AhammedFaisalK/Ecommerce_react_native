import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import MenuBar from '../../assets/Icons/menubar.svg';
import Search from '../../assets/Icons/search.svg';
import Cart from '../../assets/Icons/cart.svg';

const Header = () => {
  return  (  <View style={styles.header}>
  <TouchableOpacity activeOpacity={0.8}>
      <MenuBar width={27} height={27}/>
  </TouchableOpacity>
  <View style={styles.headerCartContainer}>
      <TouchableOpacity activeOpacity={0.8} style={{marginRight:10}}>
      <Search width={27} height={27}/>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
      <Cart width={27} height={27}/>
      </TouchableOpacity>
  </View>
</View>
)
};

export default Header;
const styles = StyleSheet.create({
    header:{
        paddingVertical:30,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#fff"
    },
    headerCartContainer:{
        flexDirection:'row',
        alignItems:'center'
    }
})
