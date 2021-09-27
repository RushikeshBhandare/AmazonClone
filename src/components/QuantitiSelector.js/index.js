import React from "react";
import { Text, View, Pressable, StyleSheet }from 'react-native'

const QuantitSelector = ({quantity, setQuantity}) =>{
    
    const onMinus = ()=>{
        setQuantity(Math.max(0, quantity - 1))
    }
    const onPlus =() =>{
        setQuantity(quantity + 1)

    }
    return(
        <View style={styles.root}>
            <Pressable style={styles.button} onPress={onMinus}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.quantiti}>{quantity}</Text>
            
            <Pressable style={styles.button} onPress={onPlus}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: 130,
        justifyContent: 'space-between'
    },
    button:{
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c2c2c2'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    quantiti:{
        color: '#007eb9'
    }
})

export default QuantitSelector