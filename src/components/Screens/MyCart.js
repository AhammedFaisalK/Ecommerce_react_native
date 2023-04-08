import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, Pressable,ScrollView} from 'react-native';
import LeftArrow from '../../assets/Icons/left-arrow.svg';
import Cart from '../../assets/Icons/cart.svg';
import Minus from '../../assets/Icons/minus.svg';
import Plus from '../../assets/Icons/plus.svg';
import Delete from '../../assets/Icons/cross.svg';
import RightArrow from '../../assets/Icons/right-arrow.svg';



const MyCart = () => {
  return (
    <>
    <View style={styles.cartMain}>
    <View style={styles.cartHeader}>
    <TouchableOpacity activeOpacity={0.8}>
        <LeftArrow width={27} height={27}/>
    </TouchableOpacity>
    <Text style={styles.cartHeaderText}>My Cart</Text>
      <TouchableOpacity activeOpacity={0.8}>
      <Cart width={27} height={27}/>
      </TouchableOpacity>
  </View>
  <ScrollView showsVerticalScrollIndicator={false}>
  <View style={styles.cartAddedItems} >
    <View style={styles.cartEachItem}>
      <View style={styles.cartAddContainer}>
        <Image  source={require('../../assets/Images/tshirt.jpeg')} style={styles.cartItemImage} />
        <View style={styles.cartItemDetails} >
          <Text  style={styles.cartItemName} numberOfLines={2}>Casual Jeans & Shoes</Text>
          <Text  style={styles.cartItemSize}>Size : M</Text>
          <Text style={styles.cartItemPrice}><Text style={{color:'#faa97b'}}>$ </Text>178.99</Text>
          <View style={styles.cartItemCountContainer}>
          <Minus width={27} height={27}/>
          <Text style={styles.cartItemCount}>1</Text>
          <Plus width={27} height={27}/>
          </View>
        </View>
      </View>
      <Delete width={20} height={20} />
    </View>
    <View style={styles.cartEachItem}>
      <View style={styles.cartAddContainer}>
        <Image  source={require('../../assets/Images/top.jpg')} style={styles.cartItemImage} />
        <View style={styles.cartItemDetails} >
          <Text  style={styles.cartItemName} numberOfLines={2}>Beach Crochet Lace</Text>
          <Text  style={styles.cartItemSize}>Size : XL</Text>
          <Text style={styles.cartItemPrice}><Text style={{color:'#faa97b'}}>$ </Text>39.99</Text>
          <View style={styles.cartItemCountContainer}>
          <Minus width={27} height={27}/>
          <Text style={styles.cartItemCount}>1</Text>
          <Plus width={27} height={27} />
          </View>
        </View>
      </View>
      <Delete width={20} height={20} />
    </View>
    
  </View>

  <View style={styles.cartAmountDetails} >
  <View style={styles.voucherContainer}>
    <Text style={styles.voucher}>Promo/Student Code Or Vouchers</Text>
    <RightArrow width={24} height={24} />
  </View>
    <View style={styles.shipAmountDetails}>
      <View  style={styles.subTotalDetails}>
        <Text style={styles.subTotal}>Sub Total</Text>
        <Text style={styles.subTotalAmount}>$ 226.97</Text>
      </View>
      <View  style={styles.shipTotalDetails}>
        <Text style={styles.shipping}>Shipping</Text>
        <Text style={styles.shippingTotalAmount}>$ 20.9</Text>
      </View>
    </View>
    <View style={styles.totalDetails}>
    <Text style={styles.total}>Total</Text>
    <Text style={styles.totalAmount}>$ 346.97</Text>
    </View>
  </View>
</ScrollView>
  <View style={styles.checkoutButtonConatiner}>
  <Pressable style={styles.checkoutButton}>
      <Text style={styles.checkoutButtonText}>Checkout</Text>
  </Pressable>
  </View>
  </View>
  </>
  )
};

export default MyCart;
const styles = StyleSheet.create({
  cartMain:{
    height:"100%",
  },
    cartHeader:{
        paddingVertical:20,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#fff"
    },
    cartHeaderText:{
      fontSize:18,
      fontFamily:"Gordita-Medium",
      color:'#000',
    },
    cartAddedItems:{
      paddingHorizontal:20,
      paddingTop:20,
      backgroundColor:"#fff",
      // flex:1
    },
    cartEachItem:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:'flex-end',
      marginBottom:20
    },
    cartAddContainer:{
      flexDirection:"row",
    },
    cartItemImage:{
      height:150,
      width:100,
      borderRadius:10,
      resizeMode:'contain',
    },
    cartItemDetails:{
      marginLeft:18
    },
    cartItemName:{
      width:115,
      fontSize:18,
      fontFamily:"Gordita-Medium",
      lineHeight:25.5,
      color:"#000",
      marginBottom:5
    },
    cartItemSize:{
      fontSize:14,
      fontFamily:"Gordita-Medium",
      color:"#b3b3b3",
      marginBottom:5
    },
    cartItemPrice:{
      fontSize:18,
      fontFamily:"Gordita-Medium",
      color:"#000"
    },
    cartItemCountContainer:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:15
    },
    cartItemCount:{
      fontSize:16,
      fontFamily:"Gordita-Medium",
      color:"#000",
      marginHorizontal:10
    },
    voucherContainer:{
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:"center",
      backgroundColor:"#fff",
      // paddingHorizontal:20,
      paddingVertical:10,
    },
    voucher:{
      fontSize:17,
      fontFamily:"Gordita-Medium",
      color:"#000"
    },
    cartAmountDetails:{
      backgroundColor:"#fff",
      paddingHorizontal:20,
      paddingVertical:10,
      // flex:1
    },
    shipAmountDetails:{
      fontFamily:"Gordita-Medium",
      borderStyle:"dashed",
      borderBottomWidth:2,
      borderBottomColor:"#d5d5d5",
      paddingBottom:15
    },
    subTotalDetails:{
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:'center',
  
    },
    subTotal:{
      fontSize:16,
      fontFamily:"Gordita-Medium",
      color:"#a3a3a3"
    },
    subTotalAmount:{
      fontSize:20,
      fontFamily:"Gordita-Medium",
      color:"#000",
    },
    shipTotalDetails:{
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:'center'
    },
    shipping:{
      fontSize:16,
      fontFamily:"Gordita-Medium",
      color:"#a3a3a3"

    },
    shippingTotalAmount:{
      fontSize:20,
      fontFamily:"Gordita-Medium",
      color:"#000",
    },
    totalDetails:{
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:10
    },
    total:{
      fontSize:16,
      fontFamily:"Gordita-Medium",
      color:"#a3a3a3"
    },
    totalAmount:{
      fontSize:20,
      fontFamily:"Gordita-Medium",
      color:"#000",
    },
    checkoutButtonConatiner:{
      justifyContent:"center",
      alignItems:'center',
      marginBottom:5,
      backgroundColor:"#fff",
 
    },
    checkoutButton:{
      justifyContent:"center",
      alignItems:'center',
      paddingVertical:10,
      backgroundColor:"#000",
      borderRadius:10,
      width:'90%'
    },
    checkoutButtonText:{
      paddingVertical:10,
      fontSize:17,
      fontFamily:"Gordita-Medium",
      color:"#fff"
    }
})