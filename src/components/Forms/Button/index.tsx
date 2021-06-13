import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Tittle
} from './styles';

interface Props extends TouchableOpacityProps {
  tittle: string;
}
export function Button({ tittle, ...rest }: Props) {
  return (
    <Container {...rest} >
      <Tittle>{tittle}</Tittle>
    </Container>
  )
}