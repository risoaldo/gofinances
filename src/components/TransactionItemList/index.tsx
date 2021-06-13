import React from "react";

import {
  Container,
  Tittle,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

interface Category {
  name: string;
  icon: string;
}

export interface TransactionItemListProps {
    type: 'up' | 'down';
    tittle: string;
    amount: string;
    category: Category;
    date: string;
}

interface Props {
  data: TransactionItemListProps;
}

export function TransactionItemList({ data }: Props) {
  return (
    <Container>
      <Tittle>{data.tittle}</Tittle>
      <Amount type={data.type}>
        {data.type === 'down' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>

    </Container>
  )
}