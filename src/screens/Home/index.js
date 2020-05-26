import React, {useState, useEffect} from 'react';
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

function Home({addToCartRequest, cartAmount}) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function getProductList() {
      const response = await api.get('/products');
      const newProductList = response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));
      setProductList([...newProductList]);
    }
    getProductList();
  }, []);

  const handleAddButton = (product) => {
    addToCartRequest(product);
  };

  return (
    <Container>
      <ProductList
        horizontal
        data={productList}
        keyExtractor={(product) => String(product.id)}
        renderItem={({item}) => (
          <Product>
            <ProductImage source={{uri: item.image}} />
            <ProductDescription>{item.title}</ProductDescription>
            <ProductPrice>{item.formattedPrice}</ProductPrice>
            <AddButton onPress={() => handleAddButton(item)}>
              <CartView>
                <Icon name="add-shopping-cart" color="#fff" size={28} />
                <CartCounter>{cartAmount[item.id] || 0}</CartCounter>
              </CartView>
              <ButtonText>Adicionar</ButtonText>
            </AddButton>
          </Product>
        )}
      />
    </Container>
  );
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  cartAmount: PropTypes.objectOf(PropTypes.number).isRequired,
};

const mapStatetoProps = (state) => ({
  cartAmount: state.CartReducer.reduce((cartAmount, product) => {
    cartAmount[product.id] = product.amount;
    return cartAmount;
  }, {}),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
