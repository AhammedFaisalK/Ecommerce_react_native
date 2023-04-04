import React from 'react';
import {Text,StyleSheet,TouchableOpacity,View, Image} from 'react-native';
import Like from '../../assets/Icons/love.svg';
import LeftArrow from '../../assets/Icons/left-arrow.svg';

const ProductDetails = () => {
  return  <View style={styles.root}>
 <View style={styles.productHeader}>
  <TouchableOpacity activeOpacity={0.8}>
      <LeftArrow width={27} height={27}/>
  </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} >
      <Like width={27} height={27}/>
      </TouchableOpacity>
</View>
<View style={styles.productDetail}>
<Text style={styles.spotlightTitle}>Beach Crochet Lace</Text>
<Text style={[styles.spotlightTitle,{  marginBottom:20}]}>$ 39.99</Text>
<Image source={require('../../assets/Images/hanging-dress.jpg')} style={styles.productImage}/>
</View>
<View style={styles.sizes}>
<Text style={styles.sizeHead}>Select Size</Text>
<View  style={styles.sizesCont}>
    <View style={[styles.size,{backgroundColor:"#FB975D"}]}>
        <Text style={[styles.sizeTitle,{color:"#fff"}]}>S</Text>
    </View>
    <View style={styles.size}>
        <Text style={styles.sizeTitle}>M</Text>
    </View>
    <View style={styles.size}>
        <Text style={styles.sizeTitle}>L</Text>
    </View>
    <View style={styles.size}>
        <Text style={styles.sizeTitle}>XL</Text>
    </View>
    <View style={styles.size}>
        <Text style={styles.sizeTitle}>XXL</Text>
    </View>
</View>
</View>
<View style={[styles.sizes,{paddingBottom:15}]}>
    <Text style={styles.sizeHead}>Select color</Text>
    <View style={styles.sizesCont} >
    <View style={[styles.size,{borderColor:'#FB975D'}]}>
    </View>
    <View style={[styles.size,{backgroundColor:'#C4B5B1'}]}>
    </View>
    <View style={[styles.size,{backgroundColor:'#D6E1FD'}]}>
    </View>
    <View style={[styles.size,{backgroundColor:'#F6D6FE'}]}>
    </View>
    <View style={[styles.size,{backgroundColor:'#D5EEED'}]}>
    </View>
    <View style={[styles.size,{backgroundColor:'#D9D9D9'}]}>
    </View>
    <View style={[styles.size,{backgroundColor:'#FED6DF'}]}>
    </View>
    </View>
</View>
<View style={styles.bottom}>
    <Text style={styles.price}>$ 39.99</Text>
    <TouchableOpacity  style={styles.button}>
      <Text style={styles.buttonText}>Add to cart</Text>
  </TouchableOpacity>
</View>
  </View>
};

export default ProductDetails;
const styles= StyleSheet.create({
    root:{
        height:'100%',
    },
    productHeader:{
        paddingVertical:20,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    productDetail:{
        paddingHorizontal:30,
    },
    spotlightTitle:{
       textAlign:'center',
       marginBottom:5,
       fontSize:18,
       color:"#000"
    },
    productImage:{
        width:300,
        height:250,
        borderRadius:10
    },
    sizes:{
        paddingHorizontal:30,
        paddingTop:20,
    },
    sizeHead:{
        color:"#000"
    },
    sizesCont:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:20
    },
    size:{
        borderWidth:1,
        borderColor:'#dddddd',
        borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:9,
        marginRight:15
    },
    sizeTitle:{

    },
    button:{
        justifyContent:"center",
        alignItems:'center',
        paddingVertical:10,
     
        backgroundColor:"#000",
        borderRadius:10,
        width:'50%'
        },
        buttonText:{
            paddingVertical:5,
            fontSize:15,
            color:"#fff"
    },
    bottom:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:30,
        paddingTop:20,
    },
    price:{

    },
})