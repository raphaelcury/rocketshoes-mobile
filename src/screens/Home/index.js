import React from 'react';
import {Text, Button} from 'react-native';

import {Container} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <Text>Home</Text>
      <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
    </Container>
  );
};

export default Home;
