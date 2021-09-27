import React  from "react";
import { View, Text, Image, Pressable } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const ProductItem = ({item}) =>{

    const navigation = useNavigation();

    const onPress = () =>{
        navigation.navigate('productDetails', {id: item.id})
        console.log("item Pressed ")
    }
    return(
        <Pressable 
            style={styles.root}
            onPress={onPress}
        >
            <Image
                style={styles.image}
                source={{uri: item.image}}
            />
            
            <View style={styles.rightContainer}> 
                <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                {/* ratings */}
                <View style={styles.ratingContainer}>
                   { 
                    [0,0,0,0,0].map((ele, index)=>{
                        return(
                            <FontAwesome 
                                key={`${item.id}-${index}`}
                                style={styles.star} 
                                name= {index < Math.floor(item.avgRating) ? 'star' : 'star-o'} 
                                size={18} 
                                color={'#e47911'}
                            />
                        )
                    })
                   }
                    <Text>{item.avgRating}</Text>
                </View>
                <Text style={styles.price}>
                    from {item.price}
                    { item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
                </Text>
            </View>
    </Pressable>
    )
}


export default ProductItem