import React, { useCallback, useState } from 'react';
import {FlatList, Text, View, useWindowDimensions,Image, StyleSheet,TouchableOpacity} from 'react-native';

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
  return <View>
 <FlatList data={data}  renderItem={({item})=>(
          <>
          <TouchableOpacity style={{position:'relative'}}  activeOpacity={0.8}>
          <Image style={[styles.image,{width:windowWidth - 30}]} source={item.image}/>
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
      <View style={styles.dots}>
    {data.map((image,index)=>(
    <View style={[styles.dot,{backgroundColor:index===activeDot?'#000':'#ededed'}]} key={index}></View>
    ))}
    </View>
    <View>
      
    </View>
  </View>
};

export default Signup;
const styles=StyleSheet.create({
  root:{

  },
  image:{
    margin:10,
      height:500,
      resizeMode:'contain',
  },
  dot:{
    width:10,
    height:10,
    borderRadius:25,
    borderWidth:1,
    borderColor:'#c9c9c9',
    backgroundColor:'#ededed',
    margin:5
  },
  dots:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center"
  },
  topTitle:{
    textAlign:'center',
    fontSize:35,
    color:"#000",
    fontWeight:'500',

  },
  mainTitle:{
    textAlign:'center',
    fontSize:40,
    width:300,
    color:"#000",
    fontWeight:'500',
    position:"absolute",
    bottom:50,
    right:4

  },
  highlightImage:{
    height:30,
    width:30,
    resizeMode:'contain',
    position:'absolute',
    bottom:58,
    right:50
  }
})