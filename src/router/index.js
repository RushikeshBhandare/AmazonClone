import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen' 
import BottomTabNav from './bottomTabNavigator'

const Stack = createStackNavigator();

const Router = () =>{
    return(
        <NavigationContainer
            initialRouteName="Home"
            // screenOptions={{
            //     headerShown: false,
            //   headerTintColor: 'white',
            //   headerStyle: { backgroundColor: 'tomato' },
            // }}
        >
            <Stack.Navigator>
                <Stack.Screen name='HomeTabs' component={BottomTabNav} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}    
export default Router