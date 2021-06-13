import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Forms/Button';

import { Header } from '../../components/Header';
import { categories } from '../../utils/categories';

import {
  Container,
  Category,
  Icon,
  Name,
  Separator,
  Footer
} from './styles';


interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}


export function CategorySelect({
  category,
  closeSelectCategory,
  setCategory
}: Props) {

  function handleSelectCategory(category: Category) {
    setCategory(category)
  }
  return (
    <Container>
      <Header title="Categorias" />

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={ () => handleSelectCategory(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button
          tittle="Selecionar"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  )
}