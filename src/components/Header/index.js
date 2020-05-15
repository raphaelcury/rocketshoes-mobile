import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Basket, Badge, Counter} from './styles';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <Image
        source={logo}
        style={{width: 185, height: 24}}
        resizeMode="contain"
      />
      <Basket>
        <Icon name="shopping-basket" size={28} color="#fff" />
        <Badge>
          <Counter>3</Counter>
        </Badge>
      </Basket>
    </Container>
  );
};

export default Header;
