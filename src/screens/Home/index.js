import React from 'react';
import {View, Text, Button} from 'react-native';

// import { Container } from './styles';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Cart" onPress={() => navigation.navigate('cart')} />
    </View>
  );
};

export default Home;
