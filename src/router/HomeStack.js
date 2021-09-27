import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, SafeAreaView, View, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import HomeScreen from '../screens/HomeScreen' 
import ProductScreen from '../screens/ProductScreen'

const Stack = createStackNavigator();

// Search Componrent
const HeaderComponent = ({searchValue, setSearchValue}) =>{
    return(
        <SafeAreaView 
            style={{
                    backgroundColor: '#22e3dd', 
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
        >
            <View
                style={{
                    height: 40,
                    width: "90%",
                    backgroundColor: 'white',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10
                }}
            >
                
                <Feather name="search" size ={20}/>
                <TextInput
                    style={{
                        height: 40,
                        fontSize: 16,
                        width: "90%",
                        backgroundColor: 'white',
                        marginLeft: 10,
                        borderRadius: 3,
                        padding: 5

                    }}
                    value={searchValue}
                    onChangeText={setSearchValue}
                    placeholder="search"
                />
            </View>
        </SafeAreaView>
    )
}


const HomeStack = () =>{
    const [searchValue, setSearchValue] = useState('')

    
    return(
   
        <Stack.Navigator
            independent={false}
            screenOptions={{
                header: ()=> {
                    return(
                        <HeaderComponent searchVlaue={searchValue} setSearchValue={setSearchValue}/>
                    )
                }
            }}
        >
           <Stack.Screen component={()=>{
               return(
                   <HomeScreen searchValue={searchValue}/>
               )
           }} name='home'/>
           <Stack.Screen component={ProductScreen} name='productDetails'/>
        </Stack.Navigator>

    )
}    
export default HomeStack