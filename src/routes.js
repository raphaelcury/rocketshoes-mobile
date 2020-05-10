import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Cart from './screens/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {backgroundColor: '2F4F4F'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen name="cart" component={Cart} options={{title: 'Cart'}} />
    </Stack.Navigator>
  );
}
