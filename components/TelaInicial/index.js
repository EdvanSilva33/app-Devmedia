import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import Foto from '../../assets/01.png';
import estilo from './estilo';



export default function TelaInicial(props) {
  return (
    <View style={ estilo.container }>

      <View style={estilo.card}>
             <Text style={{fontSize:20,
               textAlign:"center",
                fontWeight:'bold'
                }}>PARATY</Text>
                
             <Text style={estilo.descricao}>
             Saiba o que visitar em paraty.
             </Text> 

          <Image source={ Foto } style={ estilo.img } />
      
      

          <View style={ estilo.btns }>
          <Button title='RESERVAS' 
          onPress={ () => props.navigation.navigate('Reservas')} 
          color="#372d00" />
          </View>

          <View style= {estilo.btns}>
          < Button title='VER HOSPEDAGEM' 
          onPress={ () => props.navigation.navigate('Hospedagem')}
          color="#372d00"/>
          </View>

          <View style= {estilo.btns}>
          <Button title='VER PASSEIOS' 
          onPress={ () => props.navigation.navigate('Passeios')}
          color="#372d00"/>
          </View>

          <View style={ estilo.btns }>
          <Button title='VER RESTAURANTES' 
          onPress={ () => props.navigation.navigate('Restaurante')}
          color="#372d00"/>
          </View>
          
      </View>
    </View>


  );
}