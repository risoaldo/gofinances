import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: ${RFValue(120)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 15px;
`;

export const Tittle = styled.Text`
  font-family: ${({ theme, }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;

  padding: 17px 24px;
`;

export const Fields = styled.View``;

export const TransactionsType = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 16px;
`;