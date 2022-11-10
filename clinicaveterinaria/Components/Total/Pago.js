import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
export default function Form(props) {
 return (
 <View style={styles.viewForm}>
 <View style={styles.viewInputs}>
 <FontAwesome5 name= "cc-mastercard" style={styles.iconS} size={50}/>
  <FontAwesome5 name= "cc-visa" style={styles.iconS} size={50}/>
 </View>
 <TextInput
 placeholder="Numero de tarjeta"
 keyboardType="numeric"
 style={[styles.input,styles.viewInputs]}
 />
 <View style={styles.viewInputs}>
  <TextInput
 placeholder="Año de Vencimiento"
 keyboardType="numeric"
 style={[styles.input, styles.inputvenc]}
 />
 <TextInput
 placeholder="CVV"
 keyboardType="numeric"
 style={[styles.input, styles.inputcvv]}
 />
 </View>
 <TextInput
 placeholder="Correo electronico"
 keyboardType="string"
 style={[styles.input,styles.viewInputs]}
 />
 <TextInput
 placeholder="Direccion"
 keyboardType="string"
 style={[styles.input,styles.viewInputs]}
 />
 </View>
 );
}
const styles = StyleSheet.create({
 viewForm: {
 //position: 'absolute',
 bottom: 0,
 width: '85%',
 margin: 10,
 backgroundColor: '',
 borderRadius: 30,
 },
 viewInputs: {
 flexDirection: 'row',
 alignSelf: 'center',
 alignItems: 'center',
 //position:'top',
 },
 iconS:{
    margin:10,
    alignSelf: 'center',
  },
 input: {
 height: 50,
 backgroundColor: '#fff',
 borderWidth: 1,
 borderColor: '',
 borderRadius: 5,
 width: '100%',
 marginRight: 5,
 marginLeft: -5,
 marginBottom: 10,
 color: '#000',
 },
 inputvenc: {
 width: '70%',
 },
 inputcvv: {
 width: '30%',
 marginLeft: 5,
 },
});