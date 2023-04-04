import React from 'react';
import {Text,ScrollView,View,Image,StyleSheet,useWindowDimensions} from 'react-native';

const ImageCarousel = () => {
    const {width} = useWindowDimensions();
    const SIZE = width + 0.7
    const data= [{
        image:require('../../assets/Images/red-girl.jpg'),
        itemName:"Casual Jeans Shoes",
        itemPrice:"$178.99"
    },
    {
        image:require('../../assets/Images/beach-girl.jpg'),
        itemName:"Coktail Dress",
        itemPrice:"$168.99"
    },
    {
        image:require('../../assets/Images/red-girl.jpg'),
        itemName:"Coktail Dress",
        itemPrice:"$168.99"
    }
]
  return <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={false} scrollEventThrottle={16} snapToInterval={SIZE} decelerationRate={'fast'}>
    {data.map((item,index)=>{
        return(
            <View style={{width:SIZE}} key={index}>
                <Image source={item.image} style={styles.image}/>
                <Text>{item.itemName}</Text>
                <Text>{item.itemPrice}</Text>
            </View>
        )
    })}
  </ScrollView>
};

export default ImageCarousel;
const styles= StyleSheet.create({
    imageContainer:{
        borderRadius:34,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'undefined',
        aspectRatio:1,

    }
})