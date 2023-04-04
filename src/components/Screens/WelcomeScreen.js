import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,ScrollView,FlatList} from 'react-native';
import Carousel from './Carousel';
import Like from '../../assets/Icons/love.svg';
import Header from '../Includes/Header';
import Spotlight from './Spotlight';
import Categories from './Categories';


const WelcomeScreen = () => {
//  const popularItems= [{
//     id:1,
//     image:require('../../assets/Images/hanging-dress.jpg'),
//  },
//  {
//     id:2,
//     image:require('../../assets/Images/amazing-woman.jpg'),
//  },
//  {
//     id:3,
//     image:require('../../assets/Images/amazing-woman.jpg'),
//  },
//  {
//     id:4,
//     image:require('../../assets/Images/amazing-woman.jpg'),
//  },
//  {
//     id:5,
//     image:require('../../assets/Images/amazing-woman.jpg'),
//  },
//  {
//     id:6,
//     image:require('../../assets/Images/amazing-woman.jpg'),
//  },
// ]
  return<>
  <Header/>
  <ScrollView style={styles.root}  showsVerticalScrollIndicator={false}>
  <View style={styles.spotlight}>
    <Spotlight/>
    <Categories/>
    {/* <ScrollView style={styles.featuredGallery} horizontal={true}>
        <TouchableOpacity style={[styles.galleryCard]}>
            <Image style={[styles.galleryImage,{ width:150,
        height:200}]} source={require('../../assets/Images/red-girl.jpg')} />
            <Text>Coktail Dress</Text>
            <Text>$168.99</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.galleryCard}>
        <Image style={[styles.galleryImage]} source={require('../../assets/Images/red-girl.jpg')} />
        <Text>Casual Jeans Shoes</Text>
            <Text>$178.99</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.galleryCard}>
        <Image style={[styles.galleryImage,{ width:150,
        height:200}]} source={require('../../assets/Images/beach-girl.jpg')} />
        <Text>Casual Jeans Shoes</Text>
            <Text>$48.99</Text>
        </TouchableOpacity>
    </ScrollView> */}
    <Carousel/>
    <View style={styles.popular}>
        <View style={styles.popularHeading}>
            <Text style={styles.popularTitle}>Most Popular</Text>
            <Text style={[styles.popularTitle,{fontSize:15}]}>See all</Text>
        </View>
        <ScrollView contentContainerStyle={styles.popularItems} showsVerticalScrollIndicator={false}>
       
           <TouchableOpacity activeOpacity={0.8} style={styles.singleItem} >
            <Image source={require('../../assets/Images/hanging-dress.jpg')} style={{ width:150,
        height:220,
        resizeMode:'contain',
        borderRadius:10}} />
        <Like width={25} height={25} style={{position:'absolute',top:25,right:20}}/>
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.8} style={styles.singleItem} >
            <Image source={require('../../assets/Images/amazing-woman.jpg')} style={{ width:150,
        height:220,
        resizeMode:'contain',
        borderRadius:10}} />
        <Like width={25} height={25} style={{position:'absolute',top:25,right:20}}/>
           </TouchableOpacity>
           <TouchableOpacity  activeOpacity={0.8} style={styles.singleItem} >
            <Image source={require('../../assets/Images/amazing-woman.jpg')} style={{ width:150,
        height:220,
        resizeMode:'contain',
        borderRadius:10}} />
        <Like width={25} height={25} style={{position:'absolute',top:25,right:20}}/>
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.8} style={styles.singleItem} >
            <Image source={require('../../assets/Images/amazing-woman.jpg')} style={{ width:150,
        height:220,
        resizeMode:'contain',
        borderRadius:10}} />
        <Like width={25} height={25} style={{position:'absolute',top:25,right:20}}/>
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.8} style={styles.singleItem} >
            <Image source={require('../../assets/Images/amazing-woman.jpg')} style={{ width:150,
        height:220,
        resizeMode:'contain',
        borderRadius:10}} />
        <Like width={25} height={25} style={{position:'absolute',top:25,right:20}}/>
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.8} style={styles.singleItem} >
            <Image source={require('../../assets/Images/amazing-woman.jpg')} style={{ width:150,
        height:220,
        resizeMode:'contain',
        borderRadius:10}} />
        <Like width={25} height={25} style={{position:'absolute',top:25,right:20}}/>
           </TouchableOpacity>
        </ScrollView>
    </View>
  </View>
  </ScrollView>
  </>
};

export default WelcomeScreen
const styles= StyleSheet.create({
    root:{
        height:'100%',
    },
    spotlight:{
        paddingHorizontal:20,
        backgroundColor:"#fff"
    },
    featuredGallery:{
        flexDirection:'row',
        width:'100%'
    },
    galleryImage:{
        width:150,
        height:220,
        resizeMode:'contain',
        borderRadius:10
    },
    galleryCard:{
        // height:'60%',
        // width:'80%'
    },
    popular:{
    },
    popularHeading:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20
    },
    popularTitle:{
        fontSize:17,
        fontFamily:'Gordita-Regular',
        color:"#000",
        fontWeight:'700'
    },
    popularItems:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    singleItem:{
        position:'relative',
        marginBottom:10
    }
})