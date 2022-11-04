import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './components/TelaInicial';
import Reservas from './components/Reservas';
import Hospedagem from './components/Hospedagem';
import Passeios from './components/Passeios';
import Restaurante from './components/Restaurante';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = "Home" component = { TelaInicial } />
        <Stack.Screen name = "Reservas" component={ Reservas } />
        <Stack.Screen name= "Hospedagem" component={ Hospedagem }/>
        <Stack.Screen name= "Passeios" component ={ Passeios}/>
        <Stack.Screen name= "Restaurante" component = { Restaurante }/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
