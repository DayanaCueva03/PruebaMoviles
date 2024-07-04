import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import WelcomeScreen from "../Screens/WelcomeScreen"
import RegistroScreen from "../Screens/RegistroScreen"
import LoginScreen from "../Screens/LoginScreen"
import ScoreScreen from "../Screens/ScoreScreen"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Tab = createBottomTabNavigator();
function MyTabs(){
    return(
        <Tab.Navigator>
        <Tab.Screen name='Welcome' component={RegistroScreen}/>
        <Tab.Screen name='Score' component={ScoreScreen}/>
        <Tab.Screen name='Login' component={LoginScreen}/>

       
       
        
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator()
function MyStack(){
    return(
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name='Boton' component={MyTabs} options={{headerShown:true}}/>
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:true}}/>

        </Stack.Navigator>
    )
}


export default function Navegador() {
  return (
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})