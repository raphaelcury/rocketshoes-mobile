import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {formatPrice} from '../../util/format';
import api from '../../services/api';

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductDescription,
  ProductPrice,
  AddButton,
  CartView,
  CartCounter,
  ButtonText,
} from './styles';

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({navigate: PropTypes.func.isRequired})
      .isRequired,
  };

  state = {
    productList: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({productList: [...response.data]});
  }

  render() {
    const {productList} = this.state;
    return (
      <Container>
        <ProductList
          horizontal
          data={productList}
          keyExtrator={(product) => String(product.id)}
          renderItem={({item}) => (
            <Product>
              <ProductImage source={{uri: item.image}} />
              <ProductDescription>{item.title}</ProductDescription>
              <ProductPrice>{formatPrice(item.price)}</ProductPrice>
              <AddButton>
                <CartView>
                  <Icon name="add-shopping-cart" color="#fff" size={28} />
                  <CartCounter>3</CartCounter>
                </CartView>
                <ButtonText>Adicionar</ButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}
