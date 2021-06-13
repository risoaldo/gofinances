import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Forms/Input';
import { InputForm } from '../../components/Forms/InputForm';
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
import { useForm } from 'react-hook-form';


interface FormData {
  name: string;
  amount: string;
}

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

  function handleRegister(form: FormData){
    const { name, amount } = form;
    const data = {
      name,
      amount,
      transactionType,
      category: category.name
    }
    console.log(data)
  }

  const {
    control,
    handleSubmit,
  } = useForm();

  return (
    <Container>
      <Header title="Cadastro" />
      <Form>
        <Fields>
          <InputForm
            name="name"
            control={control}
            placeholder="Nome"
          />
          
          <InputForm 
            control={control}
            name="amount"
            placeholder="Preço"
          />

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

        <Button
          tittle="Enviar"
          onPress={handleSubmit(handleRegister)}
        />
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