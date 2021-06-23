import React from 'react';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../pages/Dashboard';
import { Register } from '../pages/Register';

const { Navigator, Screen } = createBottomTabNavigator();


export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.secondary,
        inactiveTintColor: theme.colors.text,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          paddingHorizontal: 5,
          height: 60
        }
      }}
    >
      <Screen
        name="Listagens"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="attach-money"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <Screen
        name="Resumo"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="pie-chart"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Navigator>
  );
}