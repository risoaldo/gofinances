import React from 'react';

import {
  Container,
  Header,
  Tittle,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';

export function TransactionCard() {
  return (
    <Container>
      <Header>
        <Tittle>Entradas</Tittle>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 15.567,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  )
}