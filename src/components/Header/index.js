import React from 'react';
import {Image} from 'react-native';

import {Container} from './styles';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <Image
        source={logo}
        style={{width: 150, height: 100}}
        resizeMode="contain"
      />
    </Container>
  );
};

export default Header;
