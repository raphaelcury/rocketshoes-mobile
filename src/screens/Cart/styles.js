import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 0 25px 25px;
  background: #141419;
`;

export const EmptyView = styled.View`
  justify-content: center;
  align-items: center;
  background: lightgray;
  width: 100%;
  height: 150px;
  border-radius: 5px;
`;

export const EmptyText = styled.Text`
  color: #333;
  font-size: 24px;
  margin-top: 10px;
`;

export const CartView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: #fff;
  border-radius: 5px;
  padding: 10px;
`;

export const ProductList = styled.View``;

export const Product = styled.View`
  width: 100%;
  height: 130px;
  margin-bottom: 20px;
`;

export const ProductView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  flex: 3;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductData = styled.View`
  flex: 1;
  height: 100%;
  margin-left: 5px;
`;

export const ProductDescription = styled.Text`
  color: #333;
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: auto;
`;

export const DeleteButton = styled(RectButton)``;

export const ProductSubtotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex: 1;
  border-radius: 5px;
  background: gainsboro;
`;

export const ProductQtyView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const QtyButton = styled(RectButton)``;

export const ProductQty = styled.TextInput`
  width: 50px;
  height: 25px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  padding: 5px 10px;
  background: #fff;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ProductSubtotalAmount = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Total = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #808080;
  margin-bottom: 5px;
`;

export const TotalAmount = styled.Text`
  font-weight: bold;
  font-size: 26px;
  color: #333;
  margin-bottom: 20px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #8a2be2;
  width: 100%;
  height: 40px;
  border-radius: 5px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
