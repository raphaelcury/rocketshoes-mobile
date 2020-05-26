import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
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

export default function Home() {
  const [productList, setProductList] = useState([]);

  const cartAmount = useSelector((state) =>
    state.CartReducer.reduce((cartAmountAcc, product) => {
      cartAmountAcc[product.id] = product.amount;
      return cartAmountAcc;
    }, {})
  );

  const dispatch = useDispatch();

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
    dispatch(Actions.addToCartRequest(product));
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
