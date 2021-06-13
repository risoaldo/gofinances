import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
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