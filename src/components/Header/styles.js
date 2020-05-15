import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 60px 20px 20px;
`;

export const Basket = styled.View`
  flex-direction: row;
`;

export const Badge = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: #8a2be2;
  padding: 5px;
  border-radius: 10px;
  margin-left: -10px;
  margin-top: -5px;
`;

export const Counter = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: bold;
`;
