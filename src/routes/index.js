import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator();

export default function routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
