import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const collectionKey = '@gofinances:transactions';

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  function handleCloseSelectCategoryModal() {
    setCategoryModalIsOpen(false);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalIsOpen(true);
  }

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }



  async function handleRegister(form: FormData) {

    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação👍');
    }

    if (category.name === 'Categoria') {
      return Alert.alert('Selecione a categoria👍');
    }

    const { name, amount } = form;

    const data = {
      name,
      amount,
      transactionType,
      category: category.name
    }

    try {
      if (!data) {
        Alert.alert('não tem nada aqui👍');
        return;
      }
      await AsyncStorage.setItem(collectionKey, JSON.stringify(data));
      Alert.alert('Cadastro feito com sucesso');
    } catch (error) {
      console.log(error)
      Alert.alert('Cadastro não deu certo!👍');
    }

  }

  const {
    control,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(collectionKey);
      console.log('lalala', data)
    }
    loadData();
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title="Cadastro" />
        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
            />

            <InputForm
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
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
    </TouchableWithoutFeedback>
  )
}