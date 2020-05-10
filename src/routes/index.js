import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Cart from '../screens/Cart';

import Header from '../components/Header';

const Stack = createStackNavigator();

export default function routes() {
  return (
    <Stack.Navigator screenOptions={{headerTitle: <Header />}}>
      <Stack.Screen name="Home" component={Home} title="Home" />
      <Stack.Screen name="Cart" component={Cart} title="Cart" />
    </Stack.Navigator>
  );
}
