import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'

import HomeScreen from '../screens/HomeScreen' 
import ShoppingCartStack from './ShoppingCartStack'
import HomeStack from './HomeStack';
import MenuScreen from '../screens/MenuScreen'

const Tab = createBottomTabNavigator();

const BottomTabNav = () =>{
    return(
        <Tab.Navigator
            screenOptions={{
                inactiveTintColor: '#ffbd7d',
                activeTintColor: '#e47911',
                showLabel: false,
            }}
        >
            <Tab.Screen
                component={HomeStack} 
                name="homeTab" 
                options={{
                    headerShown:false,
                    tabBarIcon: ({color})=>{
                        return(
                            <Entypo name="home" size={25} color={color} />
                        )
                    }
                 }}
            />
            <Tab.Screen 
                component={HomeScreen} 
                name="profile"
                options={{
                    tabBarIcon: ({color})=>{
                        return(
                            <Entypo name="user" size={25} color={color} />
                        )
                    }
                 }}
            />
            <Tab.Screen 
                component={ShoppingCartStack} 
                name="shoppingCart"
                options={{
                    tabBarIcon: ({color})=>{
                        return(
                            <Entypo name="shopping-cart" size={25} color={color} />
                        )
                    }
                 }}
            />
            <Tab.Screen 
                component={MenuScreen} 
                name="More"
                options={{
                    tabBarIcon: ({color})=>{
                        return(
                            <Entypo name="menu" size={25} color={color} />
                        )
                    }
                 }}
            />
        </Tab.Navigator>
    )
}    
export default BottomTabNav