import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import BackArrow from '../../assets/Icons/left-arrow.svg';
import Cross from '../../assets/Icons/cross-black.svg';
import Location from '../../assets/Icons/location.svg';
import Forward from '../../assets/Icons/right-arrow.svg';



const Checkout = () => {
  return ( <View>
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
    
  </View>
  )
};

export default Checkout;

const styles = StyleSheet.create({
    checkoutHeader:{
        paddingVertical:20,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#fff"
    },
    checkoutHeaderText:{
      fontSize:20,
      color:'#000',
      fontWeight:'500'
    },
    paymentSection:{
        backgroundColor:"#F6F4F5",
        paddingHorizontal:20,
        paddingVertical:20,
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
    }

})