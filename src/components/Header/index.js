import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <Image
        source={logo}
        style={{width: 185, height: 24}}
        resizeMode="contain"
      />
      <Icon name="shopping-basket" size={24} color="#fff" />
    </Container>
  );
};

export default Header;
