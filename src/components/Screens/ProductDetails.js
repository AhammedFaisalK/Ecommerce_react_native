import React, { useState } from 'react';
import {Text,StyleSheet,TouchableOpacity,View, ScrollView,Image, Pressable} from 'react-native';
import Like from '../../assets/Icons/love.svg';
import Liked from '../../assets/Icons/lovefill.svg';
import LeftArrow from '../../assets/Icons/left-arrow.svg';

const ProductDetails = ({navigation}) => {
    const [active, setActive] = useState(1);
    const [color, setColor] = useState(1);
    const[favorite,setFavourite] = useState(false)
    const sizeData = 
    [
        {
            id:1,
            sizeName:"S",

        },
        {
            id:2,
            sizeName:"M",
        },
        {
            id:3,
            sizeName:"L",
        },
        {
            id:4,
            sizeName:"XL",
        },
        {
            id:5,
            sizeName:"XXL",
        }
    ]

    const productColor = [
        {
            id:1,
            color:"",
        },
        {
            id:2,
            color:"#FB975D",
        },
        {
            id:3,
            color:"#C4B5B1",
        },
        {
            id:4,
            color:"#D6E1FD",
        },
        {
            id:5,
            color:'#F6D6FE',
        },
        {
            id:6,
            color:'#D5EEED',
        },
        {
            id:7,
            color:'#D9D9D9',
        },
        {
            id:8,
            color:'#FED6DF',
        }
    ]
  return  <View style={styles.main}>
 <View style={styles.productHeader}>
  <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('WelcomeScreen')}>
      <LeftArrow width={27} height={27}/>
  </TouchableOpacity>
   {favorite ?    <TouchableOpacity activeOpacity={0.8} onPress={()=>setFavourite(false)} >
      <Liked width={27} height={27}/>
      </TouchableOpacity> :    <TouchableOpacity activeOpacity={0.8}  onPress={()=>setFavourite(true)}>
      <Like width={27} height={27}/>
      </TouchableOpacity>}
</View>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.productDetail}>
<Text style={styles.productTitle}>Beach Crochet Lace</Text>
<Text style={[styles.productTitle,{  marginBottom:20}]}>$ 39.99</Text>
<Image source={require('../../assets/Images/hanging-dress.jpg')} style={styles.productImage}/>
</View>
<View style={styles.sizes}>
<Text style={styles.sizeHead}>Select Size</Text>
<View  style={styles.sizesCont}>
    {sizeData.map((data)=>(
          active === data.id ?   <TouchableOpacity style={[styles.size,{backgroundColor:"#FB975D"}]} onPress={()=>setActive(null)} key={data.id}  activeOpacity={0.8}>
          <Text style={[styles.sizeTitle,{color:"#fff"}]}>{data.sizeName}</Text>
      </TouchableOpacity> :    <TouchableOpacity style={[styles.size]} onPress={()=>setActive(data.id)}  key={data.id} activeOpacity={0.8}>
          <Text style={[styles.sizeTitle]}>{data.sizeName}</Text>
      </TouchableOpacity>
    ))}
</View>
</View>
<View style={[styles.sizes,{paddingTop:15}]}>
    <Text style={styles.sizeHead}>Select Color</Text>
    <View style={styles.sizesCont} >
        {productColor.map((product)=>(
            color === product.id ?      <TouchableOpacity style={[styles.size,{borderColor:'#FB975D', backgroundColor:`${product.color}`}]} onPress={()=>setColor(null)}  key={product.id} activeOpacity={0.8}>
            </TouchableOpacity> :     <TouchableOpacity style={[styles.size,{backgroundColor:`${product.color}`}]} onPress={()=>setColor(product.id)} key={product.id} activeOpacity={0.8}>
                </TouchableOpacity>
            
        ))}
    </View>
</View>
</ScrollView>
<View style={styles.bottom}>
    <Text style={styles.price}>$ 39.99</Text>
    <Pressable  style={styles.button} onPress={()=>navigation.navigate('MyCart')}>
      <Text style={styles.buttonText}>Add to cart</Text>
  </Pressable>
</View>
  </View>
};

export default ProductDetails;
const styles= StyleSheet.create({
    main:{
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
   productTitle:{
       textAlign:'center',
       marginBottom:5,
       fontSize:18,
    fontFamily:"Gordita-Medium",
       color:"#000",
    },
    productImage:{
        width:300,
        height:250,
        borderRadius:10,
    },
    sizes:{
        paddingHorizontal:30,
        paddingTop:20,
    },
    sizeHead:{
        fontSize:16,
    fontFamily:"Gordita-Medium",
        color:"#000",
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
        fontSize:14,
    fontFamily:"Gordita-Medium",
        color:"#000"
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
            fontSize:16,
    fontFamily:"Gordita-Medium",
            color:"#fff"
    },
    bottom:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:30,
        paddingTop:20,
        marginBottom:15,
    },
    price:{
        fontSize:18,
    fontFamily:"Gordita-Medium",
        color:"#000",
    },
})