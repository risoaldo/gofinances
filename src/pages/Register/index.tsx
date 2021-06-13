import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { Header } from '../../components/Header';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import { CategorySelect } from '../CategorySelect'

import {
  Container,
  Tittle,
  Form,
  Fields,
  TransactionsType
} from './styles';


export function Register() {

  const [category, setCategory] = useState({
    key: 'category',
    name: 'name'
  })
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);

  function handleCloseSelectCategoryModal() {
    setCategoryModalIsOpen(false);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalIsOpen(true);
  }

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header title="Cadastro" />
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionsType>
            <TransactionTypeButton
              type="up"
              tittle="Income"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />

            <TransactionTypeButton
              type="down"
              tittle="Outcome"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />

          </TransactionsType>

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />

        </Fields>

        <Button tittle="Enviar" />
      </Form>

      <Modal visible={categoryModalIsOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
}