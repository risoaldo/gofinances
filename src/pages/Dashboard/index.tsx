import React from 'react';

import { TransactionCard } from '../../components/TransactionCard';
import { TransactionItemList, TransactionItemListProps } from '../../components/TransactionItemList';

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
  TransactionCards,
  Transactions,
  Tittle,
  ListTransactions

} from './styles';

export interface DataListProps extends TransactionItemListProps {
  id: string;
}
export function Dashboard() {

  const data: DataListProps[] = [
    {
      id: '1',
      type: 'up',
      tittle: "Desenvolvimento",
      amount: "R$ 55.698,00",
      category: {
        name: "vendas",
        icon: "dollar-sign"
      },
      date: "13/12/12"
    }, {
      id: '2',
      type: 'down',
      tittle: "Desenvolvimento",
      amount: "R$ 55.698,00",
      category: {
        name: "vendas",
        icon: "dollar-sign"
      },
      date: "13/12/12"
    }, {
      id: '3',
      type: 'down',
      tittle: "Desenvolvimento",
      amount: "R$ 55.698,00",
      category: {
        name: "vendas",
        icon: "dollar-sign"
      },
      date: "13/12/12"
    }
  ]
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

      <Transactions>
        <Tittle>Listagens</Tittle>
        <ListTransactions
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionItemList data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      </Transactions>

    </Container>
  )
}