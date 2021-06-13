import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Tittle,
  Icon
} from './styles';

interface Props extends TouchableOpacityProps {
  type: 'up' | 'down';
  tittle: string;
  isActive: boolean;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}
export function TransactionTypeButton({ type, tittle, isActive, ...rest }: Props) {
  return (
    <Container
      {...rest}
      isActive={isActive}
      type={type}
    >
      <Icon
        name={icon[type]}
        type={type}
      />
      <Tittle>{tittle}</Tittle>
    </Container>
  )
}