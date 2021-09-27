import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root :{
        padding: 10,
        backgroundColor: 'white',
        paddingBottom: 30
    },  
    price:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice:{
        fontSize: 13,
        fontWeight: 'normal',
        textDecorationLine: "line-through",
        margin: 10
 
    },
    description:{
        marginVertical: 10,
        lineHeight: 20
    },
    title:{
        // color: 'gray'
    }

})

export default styles