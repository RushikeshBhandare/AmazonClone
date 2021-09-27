import React, {useState} from "react";
import { Text, View, ScrollView } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { useRoute } from "@react-navigation/native";


import styles from "./styles";
import product from '../../data/product'
import QuantitSelector from "../../components/QuantitiSelector.js/index.js";
import Button from "../../components/Button";
import ImageCarousel from "../../components/ImageCarousel";

const ProductScreen = () =>{
    // states 
    const [selectedOption, setSelectedOption] = useState(product?.options[0])
    const [quantity, setQuantity] = useState(1)

    const route = useRoute();
    console.log(route.params)

    return(
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>
                {/* Image courseral  */}
                <ImageCarousel images={product.images}/>
                {/* Option Selector */}
                <Picker 
                selectedValue={selectedOption}
                onValueChange={(itemValue)=>{
                    setSelectedOption(itemValue)
                }}
               >
                {product.options.map((key)=>(
                    <Picker.item label={key} value={key}/>
                    ))}
                </Picker>

                {/* Price */}
                <Text style={styles.price}>
                    from {product.price}
                    { product.oldPrice && <Text style={styles.oldPrice}>{product.oldPrice}</Text>}
                </Text>

                {/* Discription */}
                <Text style={styles.description}>
                    {product.description}
                </Text>

                {/* Quantii selector  */}
                <QuantitSelector quantity={quantity} setQuantity={setQuantity}/>

                {/* Buttons S */}
                <View style={{marginBottom: 20}}>    
                    <Button text='Add to Cart ' onPress={()=>{console.log('add to cart ')}}/>
                    <Button text='Buy now' onPress={()=>{console.log('buy now')}}/>
                </View>
        </ScrollView>
    )
}

export default ProductScreen