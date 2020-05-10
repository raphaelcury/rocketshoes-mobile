import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import './config/ReactotronConfig';

import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <Header />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  );
}
