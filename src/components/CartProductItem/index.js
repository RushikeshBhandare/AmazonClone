import React, {useState}  from "react";
import { View, Text, Image } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";

import QuantitiSelector from '../../components/QuantitiSelector.js'
import QuantitSelector from "../../components/QuantitiSelector.js";

const CartProductItem = ({item}) =>{
    
    const [quantity, setQuantity] = useState(item.quantity)

    return(
        <View style={styles.root}>
            <View style={styles.row}>
                <Image
                    style={styles.image}
                    source={{uri: item.item.image}}
                />
                
                <View style={styles.rightContainer}> 
                    <Text numberOfLines={3} style={styles.title}>{item.item.title}</Text>
                    {/* ratings */}
                    <View style={styles.ratingContainer}>
                    { 
                        [0,0,0,0,0].map((ele, index)=>{
                            return(
                                <FontAwesome 
                                    key={`${item.item.id}-${index}`}
                                    style={styles.star} 
                                    name= {index < Math.floor(item.item.avgRating) ? 'star' : 'star-o'} 
                                    size={18} 
                                    color={'#e47911'}
                                />
                            )
                        })
                    }
                        <Text>{item.item.avgRating}</Text>
                    </View>
                    <Text style={styles.price}>
                        from {item.item.price}
                        { item.item.oldPrice && <Text style={styles.oldPrice}>{item.item.oldPrice}</Text>}
                    </Text>
                    
                </View>
            </View>
                    {/* quantity Selector */}
            <View style={styles.quantitySelector}>
               <QuantitSelector quantity={quantity} setQuantity={setQuantity}/>
            </View>

    </View>
    )
}


export default CartProductItem