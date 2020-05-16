import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #141419;
`;

export const ProductList = styled.FlatList``;
export const Product = styled.View`
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 358px;
  background: #fff;
  margin: 0px 10px;
`;
export const ProductImage = styled.Image``;
export const ProductDescription = styled.Text`
  color: #fff;
`;
export const ProductPrice = styled.Text`
  color: #fff;
`;
export const AddButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #8a2be2;
  width: 200px;
  height: 40px;
  border-radius: 5px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;
