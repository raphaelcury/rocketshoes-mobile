import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Badge, Counter} from './styles';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <Image
        source={logo}
        style={{width: 185, height: 24}}
        resizeMode="contain"
      />
      <Icon name="shopping-basket" size={26} color="#fff" />
      <Badge>
        <Counter>3</Counter>
      </Badge>
    </Container>
  );
};

export default Header;
