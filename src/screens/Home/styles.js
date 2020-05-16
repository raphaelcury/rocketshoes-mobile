import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {darken} from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #141419;
`;

export const ProductList = styled.FlatList``;

export const Product = styled.View`
  justify-content: center;
  align-items: flex-start;
  width: 220px;
  height: 358px;
  border-radius: 5px;
  background: #fff;
  margin: 0px 10px;
  padding: 10px;
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductDescription = styled.Text`
  color: #333;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin-top: auto;
`;

export const AddButton = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #8a2be2;
  width: 200px;
  height: 42px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const CartView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
  background: ${darken(0.1, '#8a2be2')};
`;

export const CartCounter = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
