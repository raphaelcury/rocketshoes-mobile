import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import * as Actions from '../../store/modules/Cart/actions';

import {formatPrice} from '../../util/format';

import {
  Container,
  EmptyView,
  EmptyText,
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

export default function Cart({navigation}) {
  const cart = useSelector((state) =>
    state.CartReducer.map((product) => ({
      ...product,
      formattedPrice: formatPrice(product.price),
      subTotal: formatPrice(product.amount * product.price),
    }))
  );
  const total = useSelector((state) =>
    formatPrice(
      state.CartReducer.reduce(
        (cartTotal, product) => cartTotal + product.amount * product.price,
        0
      )
    )
  );

  const dispatch = useDispatch();
  return (
    <Container>
      {cart.length > 0 ? (
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
                    <ProductPrice>{product.formattedPrice}</ProductPrice>
                  </ProductData>
                  <DeleteButton
                    onPress={() =>
                      dispatch(Actions.deleteFromCart(product.id))
                    }>
                    <MaterialIcon
                      name="delete-forever"
                      color="#8a2be2"
                      size={20}
                    />
                  </DeleteButton>
                </ProductView>
                <ProductSubtotal>
                  <ProductQtyView>
                    <QtyButton
                      onPress={() =>
                        dispatch(
                          Actions.updateAmountRequest(
                            product.id,
                            product.amount - 1
                          )
                        )
                      }>
                      <FeatherIcon
                        name="minus-circle"
                        color="#8a2be2"
                        size={15}
                      />
                    </QtyButton>
                    <ProductQty value={String(product.amount)} />
                    <QtyButton
                      onPress={() =>
                        dispatch(
                          Actions.updateAmountRequest(
                            product.id,
                            product.amount + 1
                          )
                        )
                      }>
                      <FeatherIcon
                        name="plus-circle"
                        color="#8a2be2"
                        size={15}
                      />
                    </QtyButton>
                  </ProductQtyView>
                  <ProductSubtotalAmount>
                    {product.subTotal}
                  </ProductSubtotalAmount>
                </ProductSubtotal>
              </Product>
            ))}
          </ProductList>
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>{total}</TotalAmount>
            <SubmitButton onPress={() => navigation.navigate('Home')}>
              <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
            </SubmitButton>
          </Total>
        </CartView>
      ) : (
        <EmptyView>
          <MaterialIcon name="remove-shopping-cart" size={40} color="#808080" />
          <EmptyText>Seu carrinho está vazio</EmptyText>
        </EmptyView>
      )}
    </Container>
  );
}

Cart.propTypes = {
  navigation: PropTypes.shape({navigate: PropTypes.func.isRequired}).isRequired,
};
