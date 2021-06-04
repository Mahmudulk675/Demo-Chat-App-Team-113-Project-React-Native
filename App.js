import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
const Stack = createStackNavigator()
const globalScreenOptions = {
  headerStyle: {backgroundColor: '#2c6bed'},
  headerTitleStyle: {color: '#fff'},
  headerTintColor: "#fff"
}

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator>     
=======
      <Stack.Navigator screenOptions={globalScreenOptions} 
      initialRouteName="Home"
      >
>>>>>>> 23dc921 (registration and HomeScreen added)
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
