import React from "react";
import { Text, SafeAreaView } from "react-native";
import {Auth} from 'aws-amplify'

import Button from "../../components/Button";

const MenuScreen =()=>{
    const onLogOut=()=>{
        Auth.signOut();
    }
    return(
        <SafeAreaView>
            <Button text="Sign Out" onPress={onLogOut}>
                <Text>
                    SignOut
                </Text>
            </Button>
        </SafeAreaView>
    )
}

export default MenuScreen