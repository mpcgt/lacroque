import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import BoulangerieScreen from './screens/BoulangerieScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Boulangerie" component={BoulangerieScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}