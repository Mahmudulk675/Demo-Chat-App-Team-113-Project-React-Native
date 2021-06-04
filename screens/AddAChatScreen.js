import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome';

export default function AddAChatScreen({navigation}) {
    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: 'Chats',
        });
    },[navigation])

    
    return (
        <View style={styles.container}>
            <Input
                placeholder= "Enter Chat Name" value={input}
                 onChangeText= {(text) => setInput(text)}
                //  leftIcon ={
                //      <Icon name="weChat" size={24} color="black" />
                //  }
            />
            <Text>hoooo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})
