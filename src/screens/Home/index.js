import React from 'react';
import {Text, Image, Button} from 'react-native';
import PropTypes from 'prop-types';

import {Container} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <Text style={{color: '#fff'}}>Home</Text>
      <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({navigate: PropTypes.func.isRequired}).isRequired,
};

export default Home;
