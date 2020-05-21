import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CartView,
  ProductList,
  Product,
  ProductView,
  ProductImage,
  ProductData,
  ProductDescription,
  ProductPrice,
  DeleteButton,
  ProductSubtotal,
  ProductQtyView,
  QtyButton,
  ProductQty,
  ProductSubtotalAmount,
  Total,
  TotalText,
  TotalAmount,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const Cart = ({navigation, cart}) => {
  return (
    <Container>
      <CartView>
        <ProductList>
          {cart.map((product) => (
            <Product key={product.id}>
              <ProductView>
                <ProductImage
                  source={{
                    uri: product.image,
                  }}
                />
                <ProductData>
                  <ProductDescription>{product.title}</ProductDescription>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductData>
                <DeleteButton>
                  <MaterialIcon
                    name="delete-forever"
                    color="#8a2be2"
                    size={20}
                  />
                </DeleteButton>
              </ProductView>
              <ProductSubtotal>
                <ProductQtyView>
                  <QtyButton>
                    <FeatherIcon name="plus-circle" color="#8a2be2" size={15} />
                  </QtyButton>
                  <ProductQty value={String(product.amount)} />
                  <QtyButton>
                    <FeatherIcon
                      name="minus-circle"
                      color="#8a2be2"
                      size={15}
                    />
                  </QtyButton>
                </ProductQtyView>
                <ProductSubtotalAmount>R$539,70</ProductSubtotalAmount>
              </ProductSubtotal>
            </Product>
          ))}
        </ProductList>
        <Total>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>R$1619,10</TotalAmount>
          <SubmitButton onPress={() => navigation.navigate('Home')}>
            <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
          </SubmitButton>
        </Total>
      </CartView>
    </Container>
  );
};

Cart.propTypes = {
  navigation: PropTypes.shape({navigate: PropTypes.func.isRequired}).isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.CartReducer,
});

export default connect(mapStateToProps)(Cart);
