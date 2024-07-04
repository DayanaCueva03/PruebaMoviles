import { Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeScreen from "Screens/WelcomeScreen"
import RegistroScreen from "Screens/RegistroScreen"
import ScoreScreen from "Screens/ScoreScreen"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()
function MyTabs(){
  return(
    <Tab.Navigator initialRouteName='Welcome'>
      <Tab.Screen name='welcome' component={WelcomeScreen}/>
    </Tab.Navigator>
  )
}
const Stack= createStackNavigator()
function MyStacks(){
  return(
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Registro" component={RegistroScreen}/>
      <Stack.Screen name="Score" component={ScoreScreen}/>

    </Stack.Navigator>
  )
}

export default function BottomNavigator() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
