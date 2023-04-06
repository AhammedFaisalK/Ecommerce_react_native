import React from 'react';
import {Text, View, ScrollView,TouchableOpacity, StyleSheet, Image, Pressable} from 'react-native';
import BackArrow from '../../assets/Icons/left-arrow.svg';
import Cross from '../../assets/Icons/cross-black.svg';
import Location from '../../assets/Icons/location.svg';
import Forward from '../../assets/Icons/right-arrow.svg';



const Checkout = () => {
  return ( 
    <>  
  <View style={styles.checkoutMain}>
    <ScrollView>
  <View style={styles.checkoutHeader}>
    <TouchableOpacity activeOpacity={0.8}>
        <BackArrow width={27} height={27}/>
    </TouchableOpacity>
    <Text style={styles.checkoutHeaderText}>Checkout</Text>
      <TouchableOpacity activeOpacity={0.8}>
      <Cross width={25} height={25}/>
      </TouchableOpacity>
  </View>
  <View style={styles.paymentSection}>
    <View style={styles.deliverySection}>
        <Text style={styles.deliveryAddressTitle}>Delivery Address</Text>
        <View style={styles.exactLocation}>
            <View style={{backgroundColor:"#fff",width:27,paddingVertical:10,paddingHorizontal:20, justifyContent:'center',alignItems:'center'}}>
            <Location width={27} height={27}/>
            </View>
            <View style={styles.locationContainer}>
                <Text style={styles.streetAddress}>20845 Oakridge From Lane</Text>
                <Text style={styles.countryCode}>Newyork(NYC)</Text>
            </View>
            <Forward width={27} height={27}/>
        </View>
    </View>
    <View style={styles.paymentMethods}>
    <Text style={styles.paymentMethodTitle}>Payment Method</Text>
    <View style={styles.paymentMethod}>
        <View style={styles.cardDetails}>
            <View style={styles.cardCredentials}>
                <Image source={require('../../assets/Images/Master-Card.png')}/>
                <View style={styles.cardType}>
                    <Text style={styles.cardTypeName}>Master Card</Text>
                    <Text  style={styles.cardNumber}>... ...... 0758 4085</Text>
                </View>
            </View>
            <View style={[{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#fd9700',
        backgroundColor: '#fd9700',
        alignItems: 'center',
        justifyContent: 'center',
      },]}>
        {
            <View style={{
              height: 8,
              width: 8,
              borderRadius: 6,
              backgroundColor: '#fff',
            }}/>

        }
      </View>
        </View>
        <View style={styles.cardDetails}>
            <View style={styles.cardCredentials}>
                <Image source={require('../../assets/Images/Apple-Pay.png')}/>
                <View style={styles.cardType}>
                    <Text style={styles.cardTypeName}>Apple Pay</Text>
                    <Text  style={styles.cardNumber}>... ...... 0758 4085</Text>
                </View>
            </View>
            <View style={[{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#c3c2c2',
        alignItems: 'center',
        justifyContent: 'center',
      },]}>
       
      </View>
        </View>
        <View style={styles.cardDetails}>
            <View style={styles.cardCredentials}>
                <Image source={require('../../assets/Images/gg.jpg')}/>
                <View style={styles.cardType}>
                    <Text style={styles.cardTypeName}>Google Pay</Text>
                    <Text  style={styles.cardNumber}>... ...... 0758 4085</Text>
                </View>
            </View>
            <View style={[{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#c3c2c2',
        alignItems: 'center',
        justifyContent: 'center',
      },]}>
       
      </View>
        </View>
    </View>
    </View>
  </View>
  <View style={styles.cartSection} >
    <View style={styles.cartTitleCont}>
        <Text style={styles.cartTitle}>My Cart</Text>
        <Forward width={27} height={27}/>
    </View>
    <View style={styles.addedItems}>
    <View style={styles.addedItem}>
        <Image  source={require('../../assets/Images/tshirt.jpeg')} style={styles.addedItemImage} />
        <View style={styles.addedItemDetails} >
          <Text  style={styles.addedItemName} numberOfLines={2}>Casual Jeans & Shoes</Text>
          <Text  style={styles.addedItemSize}>Size : M</Text>
          <Text style={styles.addedItemPrice}><Text style={{color:'#faa97b'}}>$ </Text>178.99</Text>
        </View>
      </View>
      <View style={styles.addedItem}>
        <Image  source={require('../../assets/Images/tshirt.jpeg')} style={styles.addedItemImage} />
        <View style={styles.addedItemDetails} >
          <Text  style={styles.addedItemName} numberOfLines={2}>Casual Jeans & Shoes</Text>
          <Text  style={styles.addedItemSize}>Size : M</Text>
          <Text style={styles.addedItemPrice}><Text style={{color:'#faa97b'}}>$ </Text>178.99</Text>
        </View>
      </View>
    </View>
    <View style={styles.addedTotalAmountCont}>
        <Text style={styles.addedTotal}>Total</Text>
        <Text style={styles.addedTotalAmount}>$ 346.97</Text>
    </View>

  </View>  
  <View style={styles.paymentButtonConatiner}>
  <Pressable style={styles.paymentButton}>
      <Text style={styles.paymentButtonText}>Pay Now</Text>
  </Pressable>
  </View>
  </ScrollView>  
  </View>
  </>
  )
};

export default Checkout;

const styles = StyleSheet.create({
    checkoutMain:{
        height:"100%"
    },
    checkoutHeader:{
        paddingVertical:20,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#fff",

    },
    checkoutHeaderText:{
      fontSize:20,
      color:'#000',
      fontWeight:'500'
    },
    paymentSection:{
        backgroundColor:"#F6F4F5",
        paddingHorizontal:20,
        paddingTop:20,
    },
    deliverySection:{
    },
    deliveryAddressTitle:{
        fontSize:18,
        color:'#000',
      fontWeight:'500',
        marginBottom:18
    },
    exactLocation:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    locationContainer:{

    },
    streetAddress:{
        fontSize:18,
        color:'#000',
      fontWeight:'500',
        marginBottom:8

    },
    countryCode:{
        fontSize:15,
        color:"#d0d0d0",
      fontWeight:'400',
    },
    paymentMethods:{
        marginTop:25
    },
    paymentMethodTitle:{
        fontSize:18,
        color:'#000',
      fontWeight:'500',
        marginBottom:18
    },
    paymentMethod:{

    },
    cardDetails:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:20
    },
    cardCredentials:{
        flexDirection:"row",
    },
    cardType:{
        marginLeft:20
    },
    cardTypeName:{
        fontSize:18,
        color:'#000',
      fontWeight:'500',
      marginBottom:5
    },
    cardNumber:{
        color:"#dbd9da"
    },
    cartSection:{
        backgroundColor:"#F6F4F5",
        paddingHorizontal:20,


    },
    cartTitleCont:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:20
    },
    cartTitle:{
        fontSize:18,
        color:'#000',
      fontWeight:'500',
    },
    addedItems:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    addedItem:{
        flexDirection:"row",
        flex:1
    },
    addedItemImage:{
        height:100,
        width:50,
        borderRadius:10,
        resizeMode:'contain',

    },
    addedItemDetails:{
        marginLeft:10
    },
    addedItemName:{
        width:88,
        fontSize:14,
        fontWeight:"500",
        lineHeight:25,
        color:"#989898",
        marginBottom:2
    },
    addedItemSize:{
        fontSize:12,
        fontWeight:"500",
        color:'#c5c5c5',
        marginBottom:12

    },
    addedItemPrice:{
        fontSize:14,
        fontWeight:"500",
        color:'#000'
    },
    addedTotalAmountCont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        marginTop:20
    },
    addedTotal:{
        fontSize:16,
        color:"#adadad",
        fontWeight:'500'
    },
    addedTotalAmount:{
        fontSize:18,
        color:"#000",
    },
    paymentButtonConatiner:{
        justifyContent:"center",
        alignItems:'center',
        marginTop:20,
    },
    paymentButton:{
        justifyContent:"center",
        alignItems:'center',
        paddingVertical:10,
        backgroundColor:"#000",
        borderRadius:10,
        width:'90%'
    },
    paymentButtonText:{
        paddingVertical:10,
      fontSize:15,
      color:"#fff"

    }
})