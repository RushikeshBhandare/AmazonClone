import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import products from "../../data/cart";
import CartProductItem from "../../components/CartProductItem";
import Button from '../../components/Button'

const ShoopingCart = ( ) =>{
    const navigation = useNavigation()

    const Checkout = () =>{
        navigation.navigate('Address')
    }

    const totelPrice = products.reduce(
        (summedPrice, product)=>
        summedPrice + product.item.price * product.quantity
    , 0);



    return(
        <View style={styles.page}>  
       
            {/* render Component */}
            <FlatList
                data={products}
                renderItem={({item})=>{
                    return(
                       <CartProductItem item={item}/>                        
                    ) 
                }}   
                ListHeaderComponent={()=>{
                    return(
                        <View>
                        <Text style={{fontSize: 18}}>Subtotel ({products.length}): 
                            <Text style={{color: '#e47911',  fontWeight: 'bold'}}>   ${totelPrice.toFixed(2)} </Text>
                         </Text>
                         <Button 
                            text='checkout' 
                            containerStyle={{backgroundColor:"#f7e300", borderColor:"#c7b702"}}
                            onPress={Checkout} 
                        />
                    </View>
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

export default ShoopingCart