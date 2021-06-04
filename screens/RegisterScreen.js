
import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Input,Button } from 'react-native-elements';
import {StatusBar} from 'expo-status-bar'
import { auth } from '../firebase.config';



export default function RegisterScreen({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

   useLayoutEffect(() =>{
       navigation.setOptions({
           headerBackTitle: 'Login',
       })
   },[navigation])
    
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName:name,
                photoURL:imageUrl || "https://i.pravatar.cc/100"
            })
            .then((error) => alert(error.message))
        })
    }

    return (
       <KeyboardAvoidingView style={styles.container} behavior="padding">
           <StatusBar style="light" />
           <Text h1 style={{marginBottom: 50}}>
               Register
           </Text>

           <View style={styles.inputContainer}>
                <Input placeholder="Full Name" autoFocus type="text" onChangeText={(text) => setName(text)} value={name}>
                    
                </Input>
                <Input placeholder="Email" autoFocus type="email" onChangeText={(text) => setEmail(text)} value={email}>

                </Input>
                <Input placeholder="Password" autoFocus type="password" secureTextEntry onChangeText={(text) => setPassword(text)} value={password}>

                </Input>
                <Input placeholder="Profile" autoFocus type="text" onChangeText={(text) => setImageUrl(text)} value={imageUrl} onSubmitEditing={register}>

                </Input>
           </View>

            <Button
            containerStyle ={styles.button}
             onPress={register} 
             title="Register"
              raised  />
            <View style={{ height: 100}}/>  

       </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        backgroundColor: '#fff',
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer:{ 
        width:300
    }
})
