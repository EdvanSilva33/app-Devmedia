import React from "react";
import { View, Text, Image } from "react-native";
import estilo from './estilo';

import Mar from '../../assets/restaurantes/restaurante01.png';
import Bendita from '../../assets/restaurantes/restaurante02.png';
import Sereia from '../../assets/restaurantes/restaurante03.png';


export default function Restaurante(){
  return(
    <View style={ estilo.container }>

        <View style={ estilo.conteudo }>
            <Text style={{
              fontSize:20,
             fontWeight:'bold',
             textAlign:'center',
             marginBottom:10,
          }}>BARES E RESTAURANTES</Text>

            <Text style={estilo.infor}>
              O prazer da boa comida você encontra em Paraty.
              Com inúmeras opções de restaurantes, a cidade
              oferece o melhor da culinária internacional, 
              juntamente à saborosa cozinha caiçara. Confira 
              alguns bares e restaurantes famosos.
            </Text>

            <View style={ estilo.card }>
              <Image source={Mar} style={estilo.img}/>
              <Text style={estilo.titulo}>ARMAZÉN MAR</Text>
              <Text>Localização: Rod Rio-Santos</Text>
            </View>

            <View style={ estilo.card }>
              <Image source={ Bendita } style={estilo.img}/>
              <Text style={estilo.titulo}>BENDITA'S RESTAURANTE</Text>
              <Text>Localização: Centro Histórico</Text>
            </View>

            <View style={ estilo.card }>
              <Image source={ Sereia } style={estilo.img}/>
              <Text style={estilo.titulo}>SEREIA DO MAR PIZZA-BAR</Text>
              <Text>Localização: Praia do Jabaquara</Text>
            </View>
        </View>
          
    </View>
  )
}