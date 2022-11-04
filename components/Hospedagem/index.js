import React from 'react';
import {  Text, View, Image } from 'react-native';
import estilo from '../Hospedagem/estilo';

import Missanga from '../../assets/hospedagens/hospedagem01.png';
import Morro from '../../assets/hospedagens/hospedagem02.png';
import Imperial from '../../assets/hospedagens/hospedagem03.png';


export default function Hospedagem() {
  return (
    <View style={estilo.container}>
     
      <Text style={estilo.titulo}>Pousadas e Hotéis em Paraty</Text>
      <Text style={estilo.paragrafo}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>
        <View style={estilo.card}>
          <Image source={ Missanga} style={estilo.img}/>
          <Text style={ estilo.subTitulo }>Pousada Missanga</Text>
          <Text style={ estilo.preco }>Valor médio: R$ 350,00</Text>
          <Text>Localização: Próx. à Av. Roberto Silveira</Text>
        </View>
      
        
        <View style={estilo.card}>
          <Image source={ Morro} style={estilo.img}/>
          <Text style={ estilo.subTitulo }>Pousada Missanga</Text>
          <Text style={ estilo.preco }>Valor médio: R$ 350,00</Text>
          <Text>Localização: Próx. à Av. Roberto Silveira</Text>
        </View>

        
        <View style={estilo.card}>
          <Image source={ Imperial} style={estilo.img}/>
          <Text style={ estilo.subTitulo }>Pousada Missanga</Text>
          <Text style={ estilo.preco }>Valor médio: R$ 350,00</Text>
          <Text>Localização: Próx. à Av. Roberto Silveira</Text>
        </View>
    </View>
  );
}
