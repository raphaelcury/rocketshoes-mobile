import React from 'react';
import {Image, TouchableHighlight} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {navigate} from '../../routes/rootNavigation';

import {Container, Basket, Badge, Counter} from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  const count = useSelector((state) => state.CartReducer.length);

  return (
    <Container>
      <TouchableHighlight onPress={() => navigate('Home')}>
        <Image
          source={logo}
          style={{width: 185, height: 24}}
          resizeMode="contain"
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigate('Cart')}>
        <Basket>
          <Icon name="shopping-basket" size={28} color="#fff" />
          <Badge>
            <Counter>{count}</Counter>
          </Badge>
        </Basket>
      </TouchableHighlight>
    </Container>
  );
}
