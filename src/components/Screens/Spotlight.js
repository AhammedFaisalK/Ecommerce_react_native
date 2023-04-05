import React from 'react';
import {Text,View,Image, StyleSheet} from 'react-native';

const Spotlight = () => {
    
  return ( <View style={styles.spotlightTitleContainer}>
  <Text style={styles.spotlightTitle}>Find your style</Text>
  <Image style={styles.spotlightImage} source={require('../../assets/Images/underline.png')} />
  </View>
  )
};

export default Spotlight;
const styles=StyleSheet.create({
    spotlightTitleContainer:{
        position:'relative'
    },
    spotlightTitle:{
        fontSize:25,
        fontFamily:'Gordita-Regular',
        color:"#000",
    
    },
    spotlightImage:{
        position:'absolute',
        top:32.5,
        left:100, 
    },
})