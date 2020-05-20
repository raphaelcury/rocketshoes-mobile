import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {formatPrice} from '../../util/format';
import api from '../../services/api';
import * as Actions from '../../store/modules/Cart/actions';

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

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({navigate: PropTypes.func.isRequired})
      .isRequired,
    addToCart: PropTypes.func.isRequired,
  };

  state = {
    productList: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({productList: [...response.data]});
  }

  handleAddButton = (product) => {
    const {addToCart, navigation} = this.props;
    addToCart(product);
    navigation.navigate('Cart');
  };

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
              <AddButton onPress={() => this.handleAddButton(item)}>
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

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
