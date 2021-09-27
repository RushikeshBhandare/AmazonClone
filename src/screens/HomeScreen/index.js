import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ProductItem from '../../components/ProductItem.js/index.js'
import products from "../../data/products";



const HomeScreen = ({searchValue}) =>{
    console.log(searchValue)
    return(
        <View style={styles.page}>  
            <FlatList
                data={products}
                renderItem={({item})=>{
                    return(
                        <ProductItem item={item}/>
                    ) 
                }}   
                showsVerticalScrollIndicator= {false}
                keyExtractor={(item)=> item.id}       
            />

        </View>
    )
}
const styles = StyleSheet.create({
    page:{
       padding: 10
    },
})

export default HomeScreen