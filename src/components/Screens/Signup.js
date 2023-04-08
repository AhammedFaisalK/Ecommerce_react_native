import React, { useCallback, useState } from 'react';
import {FlatList, Text, View, useWindowDimensions,Image, StyleSheet,TouchableOpacity,Pressable} from 'react-native';
import RightWhite  from '../../assets/Icons/right-arrowwhite.svg'

const Signup = () => {
  const [activeDot, setActiveDot] = useState(0)
  const data = [{
    image:require('../../assets/Images/slider-image.png'),
    mainTitle:"    Classy Fashion",
    topTitle:"Fastacy",
    highlightImage:require('../../assets/Images/Polygon.png')
},
{
  image:require('../../assets/Images/slider-image.png'),
  mainTitle:"    Classy Fashion",
  topTitle:"Fastacy",
  highlightImage:require('../../assets/Images/Polygon.png')
},
{
  image:require('../../assets/Images/slider-image.png'),
  mainTitle:"    Classy Fashion",
  topTitle:"Fastacy",
  highlightImage:require('../../assets/Images/Polygon.png')
}
]
const windowWidth = useWindowDimensions().width
const flatListUpdated = useCallback(({viewableItems})=>{
  if(viewableItems.length > 0){
    setActiveDot(viewableItems[0].index || 0);
  }
  console.log(viewableItems)
},[])
  return <View style={styles.signupRoot}>
 <FlatList data={data} style={styles.imageCarouselStyle}  renderItem={({item})=>(
          <>
          <TouchableOpacity style={{position:'relative'}}  activeOpacity={0.8}>
          <Image style={[styles.mainImage,{width:windowWidth - 30}]} source={item.image}/>
           <Text style={styles.mainTitle} numberOfLines={2}>{item.mainTitle}</Text>
           <Image source={item.highlightImage} style={styles.highlightImage}/>
           <View style={{ position:'absolute', transform: [{skewY: '-18deg'}],top:30,left:20}}>
           <Text style={styles.topTitle}>{item.topTitle}</Text>

           </View>
          </TouchableOpacity>
           </>
    )}  horizontal
    showsHorizontalScrollIndicator={false}
    snapToInterval={windowWidth - 20}
    snapToAlignment={'center'}
    decelerationRate={'fast'}
    viewabilityConfig={{
      viewAreaCoveragePercentThreshold:50,
    }}
    onViewableItemsChanged={flatListUpdated}/>
      <View style={styles.imagedots}>
    {data.map((image,index)=>(
    <View style={[styles.imagedot,{backgroundColor:index===activeDot?'#000':'#ededed'}]} key={index}></View>
    ))}
    </View>
    <View style={styles.signupBottom}>
      <View style={styles.dressesList}>
        <Text style={[styles.Tops,styles.marginStyles]}>Tops <Text style={{color:"#f0ba7f",marginLeft:5}}>━</Text></Text>
        <Text style={[styles.Tshirts,styles.marginStyles]}>Tshirts</Text>
        <Text style={[styles.Hoodies,styles.marginStyles]}>Hoodies</Text>
        <Text style={[styles.signupCategories,]}>126+Categories</Text>
      </View>
      <Pressable  style={styles.signUpButton}>
      <Text style={styles.signUpButtonText}>Sign Up</Text>
      <RightWhite width={25} height={25}/>
  </Pressable>
    </View>
  </View>
};

export default Signup;
const styles=StyleSheet.create({
  signupRoot:{
    height:'100%'
  },
  mainImage:{
    margin:10,
      height:500,
      resizeMode:'contain',
  },
  imagedot:{
    width:10,
    height:10,
    borderRadius:25,
    borderWidth:1,
    borderColor:'#c9c9c9',
    backgroundColor:'#ededed',
    margin:5
  },
  imagedots:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    marginBottom:20
  },
  topTitle:{
    textAlign:'center',
    fontSize:35,
    fontFamily:"Gordita-Medium",
    color:"#000",
  },
  mainTitle:{
    textAlign:'center',
    fontSize:35,
    fontFamily:"Gordita-Medium",
    width:250,
    color:"#000",
    position:"absolute",
    bottom:85,
    right:4

  },
  highlightImage:{
    height:30,
    width:30,
    resizeMode:'contain',
    position:'absolute',
    bottom:90,
    right:30
  },
  signUpButton:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:'center',
    paddingVertical:5,
    backgroundColor:"#000",
    width:'50%',
    height:"80%",
    borderTopRightRadius:8,
    borderBottomRightRadius:8
    },
    signUpButtonText:{
        paddingVertical:5,
        fontSize:14,
    fontFamily:"Gordita-Medium",
        color:"#fff",
        marginRight:10

},
signupBottom:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:"flex-end",
  paddingHorizontal:20,
  marginBottom:10
},
imageCarouselStyle:{
  paddingHorizontal:10,
  flex:1,
},
dressesList:{

},
Tops:{
  fontFamily:"Gordita-Regular",
  fontSize:14,
  color:"#b8b8b8"
},
Tshirts:{
  fontFamily:"Gordita-Regular",
  fontSize:14,
  color:"#b8b8b8"

},
Hoodies:{
  fontFamily:"Gordita-Regular",
  fontSize:14,
  color:"#b8b8b8"

},
signupCategories:{
  fontFamily:"Gordita-Regular",
  fontSize:14,
  textDecorationLine:'underline',
  color:"#b8b8b8"

},
marginStyles:{
  marginBottom:2
}
})