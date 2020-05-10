import React from 'react';
import {Image, Text} from 'react-native';

import {Container} from './styles';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Image
      source={logo}
      style={{width: 150, height: 50}}
      resizeMode="contain"
    />
  );
};

export default Header;
