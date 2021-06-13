import React from 'react';

import {
  Container,
  Tittle
} from './styles';


interface TitleProps {
  title: string;
}
export function Header({ title }: TitleProps) {


  return (
    <Container>
      <Tittle>{title}</Tittle>
    </Container>
  )
}