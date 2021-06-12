import React from 'react';
import { TransactionCard } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  TransactionCards
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{ uri: "https://avatars.githubusercontent.com/u/21092692?v=4" }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Risoaldo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserContainer>
      </Header>

      <TransactionCards>
        <TransactionCard
          type="up"
          tittle="Entradas"
          amount="R$ 45.787,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />

        <TransactionCard
          type="down"
          tittle="Saidas"
          amount="R$ 45.787,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />

        <TransactionCard
          type="total"
          tittle="Total"
          amount="R$ 45.787,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />

      </TransactionCards>
    </Container>
  )
}