import React from 'react';
import {View, Text} from 'react-native';
import './config/ReactotronConfig';

const App = () => {
  console.tron.log('TESTE');
  return (
    <View>
      <Text>Olá mundo!</Text>
    </View>
  );
};

export default App;
