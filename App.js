import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from './screens/LoginScreen'
const Stack = createStackNavigator()
const globalScreenOptions = {
<<<<<<< HEAD
  headerStyle: { backgroundColor: '#2c6bed' },
  headerTitleStyle: { color: '#fff' },
  headerTintColor: '#fff',
=======
  headerStyle: {backgroundColor: '#2c6bed'},
  headerTitleStyle: {color: '#fff'},
  headerTintColor: "#fff"
>>>>>>> b323702 (Login UI)
}

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator screenOptions={globalScreenOptions}>
=======
<<<<<<< HEAD
      <Stack.Navigator>     
=======
      <Stack.Navigator screenOptions={globalScreenOptions}>
        
>>>>>>> 1072168 (Login UI)
>>>>>>> b323702 (Login UI)
        <Stack.Screen name='Login' component={LoginScreen} />
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
