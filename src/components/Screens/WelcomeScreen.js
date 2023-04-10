import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,ScrollView,FlatList} from 'react-native';
import Like from '../../assets/Icons/love.svg';
import Header from '../Includes/Header';
import Spotlight from './Spotlight';
import Categories from './Categories';
import ImageCarousel from './ImageCarousel';


const WelcomeScreen = ({navigation}) => {
  return<>
  <Header navigation ={navigation}/>
  <ScrollView style={styles.root}  showsVerticalScrollIndicator={false}>
  <View style={styles.spotlight}>
    <Spotlight/>
    <Categories/>
    <ImageCarousel/>
    <View style={styles.popular}>
        <View style={styles.popularHeading}>
            <Text style={styles.popularTitle}>Most Popular</Text>
            <Text style={[styles.popularTitle,{fontSize:14}]}>See all</Text>
        </View>
        <ScrollView contentContainerStyle={styles.popularItems} showsVerticalScrollIndicator={false}>
       
           <TouchableOpacity activeOpacity={0.8} style={styles.singleItem}  onPress={()=>navigation.navigate('AddCart')}>
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
        fontFamily:'Gordita-Medium',
        color:"#000",
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