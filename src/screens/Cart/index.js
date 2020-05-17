import React from 'react';

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
  ProductSubtotal,
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
            </ProductView>
            <ProductSubtotal>
              <ProductQty value="3" />
              <ProductSubtotalAmount>R$539,70</ProductSubtotalAmount>
            </ProductSubtotal>
          </Product>
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
            </ProductView>
            <ProductSubtotal>
              <ProductQty value="3" />
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
