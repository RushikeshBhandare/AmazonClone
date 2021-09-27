import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import ShoppingCart from '../screens/ShoopingCart.js' 
import AddressScreen from '../screens/AddressScreen'

const Stack = createStackNavigator();

const ShoppingCartStack = () =>{
    return(
        <Stack.Navigator
            independent={false}
        >
           <Stack.Screen component={ShoppingCart} name='Cart' options={{headerShown:false}}/>
           <Stack.Screen component={AddressScreen} name='Address' options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}    
export default ShoppingCartStack