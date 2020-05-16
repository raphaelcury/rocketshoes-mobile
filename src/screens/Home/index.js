import React, {Component} from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductDescription,
  ProductPrice,
  AddButton,
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
    console.tron.log(response.data);
    this.setState({productList: [...response.data]});
  }

  render() {
    const {productList} = this.state;
    console.tron.log(productList);
    return (
      <Container>
        <ProductList
          horizontal
          data={productList}
          keyExtrator={(product) => product.id}
          renderItem={(product) => (
            <Product>
              <ProductImage source={product.image} width="60" />
              <ProductDescription>{product.title}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
              <AddButton>
                <ButtonText>Adicionar</ButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}
