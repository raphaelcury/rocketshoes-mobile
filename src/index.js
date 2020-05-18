import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import './config/ReactotronConfig';

import {navigationRef} from './routes/rootNavigation';
import Header from './components/Header';
import Routes from './routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{backgroundColor: '#141419', flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Header />
        <NavigationContainer ref={navigationRef}>
          <Routes />
        </NavigationContainer>
      </View>
    </Provider>
  );
}
