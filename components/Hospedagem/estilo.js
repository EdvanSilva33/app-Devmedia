import { StyleSheet } from "react-native";


const estilo = StyleSheet.create({
container:{
 flex: 1,
 justifyContent: 'center',
 alignItems:'center',
 backgroundColor:'#bee0ec',
},
titulo:{
 fontSize:20,
 fontWeight:'bold',
 textAlign:'center',
 

},
paragrafo:{
  width:320,
  textAlign:'center',
  marginVertical:10,
},
card:{
  width:320,
  height:140,
  backgroundColor:'#fff',
  marginTop:10,
  padding:10,
  borderRadius:10,
  borderWidth:1,

},
subTitulo:{
  fontWeight:'bold',
  marginBottom:3,

},
  img:{
  width: 298,
  height:50,
  marginVertical:5,
}

})




export default estilo;