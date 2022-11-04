import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#C3e6aa',
    justifyContent:'center',
    alignItems:'center',
  },
  titulo:{
   fontSize:20,
   fontWeight:'bold',
   textAlign:'center',
   marginBottom:15,
  },
  descricao:{
    
    textAlign: 'center',
    paddingHorizontal:30,

  },
  card:{
    width:320,
    height:120,
    marginVertical:10,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:5,
    borderColor:'#000',
    borderWidth:1,
  },
  subTitulo:{
  
    textAlign:'center',
    fontSize:16,
    fontWeight:'700',
  },
  img:{
    marginTop:10,
    width:300,
    height:70,
    
  }
})



export default estilo;