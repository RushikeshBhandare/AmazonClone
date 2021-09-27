import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    page:{
       padding: 10
    },

   root:{
       borderWidth: 1,
       borderColor: 'gray',
       borderRadius: 10,
       backgroundColor: '#fff' , 
       marginVertical: 5 ,
       padding: 5
   },
   row:{
       flexDirection: 'row'
   },
   image:{
       flex: 2,
       height: 150,
       resizeMode: 'contain' 

   },
   rightContainer:{
       padding:10,
       flex:3, 
       
   },  
   ratingContainer:{
       flexDirection: 'row',
       alignItems: 'center',
       marginVertical: 5
   },
   star:{
       margin: 2
   },
   title:{
       fontSize: 18,
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
   quantitySelector:{
       margin: 5
   }
})

export default styles