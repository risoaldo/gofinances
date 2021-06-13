import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.View`
flex: 1;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${ ({isActive}) => isActive ? theme.colors.secondary : theme.colors.background };

`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 0.3px;

  background-color: ${({ theme }) => theme.colors.tittle};
`;


export const Footer = styled.View`
width: 100%;
padding: 24px;
`;
