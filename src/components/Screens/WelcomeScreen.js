import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,ScrollView,FlatList} from 'react-native';
import MenuBar from '../../assets/Icons/menubar.svg';
import Search from '../../assets/Icons/search.svg';
import Cart from '../../assets/Icons/cart.svg';
import Carousel from './Carousel';
import Like from '../../assets/Icons/love.svg';


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
  <View style={styles.root}>
   <View style={styles.header}>
    <TouchableOpacity activeOpacity={0.8}>
        <MenuBar width={27} height={27}/>
    </TouchableOpacity>
    <View style={styles.headerCartContainer}>
        <TouchableOpacity activeOpacity={0.8} style={{marginRight:10}}>
        <Search width={27} height={27}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
        <Cart width={27} height={27}/>
        </TouchableOpacity>
    </View>
  </View>
  <View style={styles.spotlight}>
    <View style={styles.spotlightTitleContainer}>
    <Text style={styles.spotlightTitle}>Find your style</Text>
    <Image style={styles.spotlightImage} source={require('../../assets/Images/underline.png')} />
    </View>
    <View style={styles.category}>
        <TouchableOpacity  activeOpacity={0.8} style={styles.categoryElement}>
            <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.categoryElement}>
            <Text style={styles.categoryText}>Winter</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={[styles.categoryElement,{backgroundColor:'#000'}]}>
            <Text style={[styles.categoryText,{color:"#fff"}]}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.8} style={styles.categoryElement}>
            <Text style={styles.categoryText}>Eyewear</Text>
        </TouchableOpacity>
    </View>
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
           <TouchableOpacity  activeOpacity={0.8} style={styles.singleItem} >
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
  </View>
  </>
};

export default WelcomeScreen
const styles= StyleSheet.create({
    root:{
        height:'100%',
    },
    header:{
        paddingVertical:30,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerCartContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    spotlight:{
        paddingHorizontal:20,
    },
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
        left:100
    },
    category:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:30
    },
    categoryElement:{
        borderWidth:1,
        borderColor:'#dddddd',
        borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:9,
        marginRight:15
    },
    categoryText:{
        color:"#000"
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