import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';

import { Container } from './styles';

interface InputProps extends TextInputProps {
  control: Control;
  name: string;
}
export function InputForm({
  control,
  name,
  ...rest
}: InputProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            {...rest}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name={name}
        rules={{ required: true }}
        defaultValue=""
      />
    </Container>
  )
}