
// react navigation
import 'react-native-gesture-handler';

import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './SRC/screens/Home';
import Details from './SRC/screens/Details';

const Stack = createStackNavigator();

export default class App extends React.Component {
   render() {
      return (
         <NavigationContainer>
            <Stack.Navigator screenOptions={{
               headerShown: false
            }}>
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
         </NavigationContainer>
      )
   }
}