import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({text, onPress, containerStyle}) =>{
    return(
        <Pressable style={[styles.root, containerStyle]} onPress={onPress}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root:{  
        backgroundColor: '#e47911',
        marginVertical:10,
        margin: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d97818'
    },
    text:{
        fontSize: 16
    }
})

export default Button