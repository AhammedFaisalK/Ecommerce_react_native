import React from 'react';
import {Text,useWindowDimensions,StyleSheet, View,FlatList,Image, TouchableOpacity} from 'react-native';
import Like from '../../assets/Icons/love.svg';
const Carousel = () => {
    const data= [{
        image:require('../../assets/Images/summer.jpg'),
        itemName:"Casual Jeans Shoes",
        itemPrice:"$178.99"
    },
    {
        image:require('../../assets/Images/red-girl.jpg'),
        itemName:"Beach Color",
        itemPrice:"$168.99"
    },
    {
        image:require('../../assets/Images/beach-girl.jpg'),
        itemName:"Coktail Dress",
        itemPrice:"$168.99"
    }
]
const windowWidth = useWindowDimensions().width
  return <View>
     <FlatList data={data} renderItem={({item})=>(
        <>
       <TouchableOpacity style={{position:'relative'}}  activeOpacity={0.8}>
       <Image style={[styles.image,{width:windowWidth - 40}]} source={item.image}/>
       <Like width={25} height={25} style={{position:'absolute',top:18,right:105}}/>
   
        <Text style={{textAlign:'center',color:"#000",fontFamily:"Gordita-Medium",fontSize:14}}>{item.itemName}</Text>
        <Text style={{textAlign:'center',color:"#000",fontFamily:"Gordita-Medium",fontSize:16}}>{item.itemPrice}</Text>
       </TouchableOpacity>
        </>
    )}
    horizontal
    showsHorizontalScrollIndicator={false}
    snapToInterval={windowWidth - 20}
    snapToAlignment={'center'}
    decelerationRate={'fast'}
    viewabilityConfig={{
      viewAreaCoveragePercentThreshold:50,
    }}
    />
  </View>
};

export default Carousel;
const styles=StyleSheet.create({
    image:{
      marginRight:2,
        height:250,
        resizeMode:'contain',
    },
})