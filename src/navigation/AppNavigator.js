import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import SelectScreen from '../screens/SelectScreen';
import BoardingPassScreen from '../screens/BoardingPassScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
        <Stack.Screen name="Select" component={SelectScreen} />
        <Stack.Screen name="BoardingPass" component={BoardingPassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
