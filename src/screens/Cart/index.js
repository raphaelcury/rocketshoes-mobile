import React from 'react';
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

const Cart = () => {
  return (
    <Container>
      <CartView>
        <ProductList>
          <Product>
            <ProductView>
              <ProductImage
                source={{
                  uri:
                    'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                }}
              />
              <ProductData>
                <ProductDescription>
                  Tênis de Caminhada Leve Confortável
                </ProductDescription>
                <ProductPrice>R$179,90</ProductPrice>
              </ProductData>
              <DeleteButton>
                <MaterialIcon name="delete-forever" color="#8a2be2" size={20} />
              </DeleteButton>
            </ProductView>
            <ProductSubtotal>
              <ProductQtyView>
                <QtyButton>
                  <FeatherIcon name="plus-circle" color="#8a2be2" size={15} />
                </QtyButton>
                <ProductQty value="3" />
                <QtyButton>
                  <FeatherIcon name="minus-circle" color="#8a2be2" size={15} />
                </QtyButton>
              </ProductQtyView>
              <ProductSubtotalAmount>R$539,70</ProductSubtotalAmount>
            </ProductSubtotal>
          </Product>
        </ProductList>
        <Total>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>R$1619,10</TotalAmount>
          <SubmitButton>
            <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
          </SubmitButton>
        </Total>
      </CartView>
    </Container>
  );
};

export default Cart;
