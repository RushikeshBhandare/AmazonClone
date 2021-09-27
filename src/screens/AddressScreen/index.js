import React, {useState} from "react";
import { 
    Text,
    View ,
    TextInput,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import {Picker} from "@react-native-picker/picker";
import styles from "./styles";
import  {data} from "./data";
import Button from '../../components/Button'

//TODO Validation 

const AddressScreen = () =>{
    const [country , setCountry] = useState()
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')

    const checkout = ( ) =>{
        if(!fullName){
           Alert.alert('Enter Name')
            return;
        }
        if(!phoneNumber){
           Alert.alert('Enter Phone Number')
        }
    }
      return(
        <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
            // style={{flex: 1}}
        >
            <ScrollView style={styles.root}>
                <View style={styles.row}>
                    {/* <Picker
                        selectedValue={country}
                        onValueChange={(value)=>setCountry(value)}
                    >
                        {data.map((country)=>{
                            return(
                                <Picker.item  label={country.name} value={country.code}/>
                            ) 
                        })}
                    </Picker> */}
                </View>
                
                {/* Name */}
                <View style={styles.row}>
                    <Text style={styles.label}> Full name (First and last name) </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter name "
                        value={fullName}
                        onChangeText={(v)=>{setFullName(v)}}
                    />
                </View>

                {/* Enter Number  */}
                <View style={styles.row}>
                    <Text style={styles.label}> Phone number </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter phone number "
                        value={phoneNumber}
                        onChangeText={(v)=>{setPhoneNumber(v)}}
                        keyboardType= 'number-pad'
                        textContentType="telephoneNumber"
                    />
                </View>

                {/* Address  */}
                <View style={styles.row}>
                    <Text style={styles.label}> Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Address "
                        value={address}
                        onChangeText={(v)=>{setAddress(v)}}
                        
                    />
                </View>

                {/* City */}
                <View style={styles.row}>
                    <Text style={styles.label}> City</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="City"
                        value={city}
                        onChangeText={(v)=>{setCity(v)}}
                    
                    />
                </View>    

                {/* Zip Code  */}
                <View style={styles.row}>
                    <Text style={styles.label}> Zip Code</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ZIP-CODE"
                        value={zipCode}
                        onChangeText={(v)=>{setZipCode(v)}}
                        keyboardType= 'number-pad'
                        textContentType='postalCode'
                    />
                </View> 
                <Button text="checkout" onPress={checkout}/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
} 

export default AddressScreen