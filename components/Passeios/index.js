import React from "react";
import { View, Text, Image } from "react-native";
import estilo from './estilo';
import Tirolesa from '../../assets/passeios/passeio01.png';
import Ralf from '../../assets/passeios/passeio02.png';
import Canoa from '../../assets/passeios/passeio03.png';

export default function Passeios(){
  return(
    <View style={estilo.container}>
      <Text style= {estilo.titulo }>PASSEIOS EM PARATY</Text>
      <Text style= { estilo.descricao }>
       O município de Paraty está quase inteiro em área de 
       parques e de preservação ambiental. Muitas são as opções
       de passeios para quem curte a natureza: passeios de jeep, de bike,
       caminhadas por trilhas entre outros. 
       Veja dois exemplos:
      </Text>

      <View style={ estilo.card }>
        <Text style={ estilo.subTitulo }>TIROLESA</Text>
        <Image source={Tirolesa} style={ estilo.img }/>
      </View>

      <View style={ estilo.card }>
        <Text style={ estilo.subTitulo }>RAFTING</Text>
        <Image source={ Ralf } style={ estilo.img }/>
      </View>

      <View style={ estilo.card }>
        <Text style={ estilo.subTitulo }>CANOAGEM NO MANGUE</Text>
        <Image source={Canoa} style={ estilo.img }/>
        
      </View>

    </View>
  );
}