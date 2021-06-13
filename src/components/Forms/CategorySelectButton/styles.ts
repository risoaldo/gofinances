import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";


export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;


  padding: 18px;

  border-radius: 5px;
  margin-bottom: 15px;
`;

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Icon = styled(Feather)`
color: ${({ theme }) => theme.colors.text};
font-size: ${RFValue(20)}px;
`;
