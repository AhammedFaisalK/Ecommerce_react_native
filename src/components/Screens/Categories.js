import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Categories = () => {
  return (
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
  )
};

export default Categories;
const styles=StyleSheet.create({
    category:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:30,
        backgroundColor:"#fff"
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
})