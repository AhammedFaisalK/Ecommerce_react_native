import React, { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Categories = () => {
    const [activeCategory,setActiveCategory] =useState(3)
    const productCategories = [{id:1,category:"All"},{id:2,category:"Winter"},{id:3,category:"Women"},{id:4,category:"Eyewear"}]
  return (
    <View style={styles.category}>
        {productCategories.map((category)=>(
            activeCategory === category.id ?   <TouchableOpacity  activeOpacity={0.8} style={[styles.categoryElement,{backgroundColor:'#000'}]} onPress={()=>setActiveCategory(null)} key={category.id}>
            <Text style={[styles.categoryText,{color:"#fff"}]}>{category.category}</Text>
        </TouchableOpacity> :   <TouchableOpacity  activeOpacity={0.8} style={styles.categoryElement}  onPress={()=>setActiveCategory(category.id)}  key={category.id}>
               <Text style={styles.categoryText}>{category.category}</Text>
           </TouchableOpacity>
             
        ))}
    {/* <TouchableOpacity activeOpacity={0.8} style={styles.categoryElement}>
        <Text style={styles.categoryText}>Winter</Text>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.8} style={[styles.categoryElement,{backgroundColor:'#000'}]}>
        <Text style={[styles.categoryText,{color:"#fff"}]}>Women</Text>
    </TouchableOpacity>
    <TouchableOpacity  activeOpacity={0.8} style={styles.categoryElement}>
        <Text style={styles.categoryText}>Eyewear</Text>
    </TouchableOpacity> */}
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
        backgroundColor:"#fff",
        marginTop:5
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