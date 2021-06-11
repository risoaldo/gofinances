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
  Icon
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

      <TransactionCard />
    </Container>
  )
}