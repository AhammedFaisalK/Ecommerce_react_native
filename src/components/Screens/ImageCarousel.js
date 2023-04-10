import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import Like from '../../assets/Icons/love.svg';


import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
const ENTRIES1 = [
  {
    title:"Coktail Dress",
    subtitle: "$168.99",
    illustration: require('../../assets/Images/summer.jpg'),
  },
  {
    title: "Casual Jeans Shoes",
    subtitle: "$168.99",
    illustration:require('../../assets/Images/red-girl.jpg'),
  },
  {
    title: "Beach Color",
    subtitle: "$168.99",
    illustration:require('../../assets/Images/beach-girl.jpg'),
  },
];
const {width: screenWidth} = Dimensions.get('window');

const ImageCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <TouchableOpacity  activeOpacity={0.8} style={styles.item}>
        <ParallaxImage
          source={item.illustration}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
       <Like width={25} height={25} style={{position:'absolute',top:18,right:105}}/>
        <Text style={[styles.title,{textAlign:'center',color:"#000",fontFamily:"Gordita-Medium",fontSize:14,marginTop:8}]} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={[styles.title,{textAlign:'center',color:"#000",fontFamily:"Gordita-Medium",fontSize:16,marginTop:5}]} >
          {item.subtitle}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
    
  },
  title:{
    textAlign:'center'
  }
});
