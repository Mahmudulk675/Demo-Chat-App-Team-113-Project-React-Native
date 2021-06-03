import React, { useEffect, useState } from 'react'
import { Button, Input, Image } from 'react-native-elements'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase.config'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Home')
      }
    })

    return unsubscribe
  }, [])
  const signIn = () => {}
  return (
    <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
      <StatusBar styles='light' />

      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Enter Email Address'
          autoFocus
          type='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder='Enter Password'
          secureTextEntry
          type='password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} title='Login' onPress={signIn} />
      <Button
        type='outline'
        containerStyle={styles.button}
        title='Register'
        onPress={() => navigation.navigate('Register')}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  inputContainer: { width: 300 },
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'centet',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
})
