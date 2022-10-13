import React, { Component, useState } from 'react';
import {View, Text,TextInput, StyleSheet, Image, Alert, Button, Picker, TouchableHighlight, ScrollView} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Perfil = ({item}) => {
   const [fecha, guardarFecha] = useState('');
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  GetSelectedPickerItem=()=>{
 
    Alert.alert(this.state.PickerValueHolder);
  }
  const crearNuevaCita = () => {}
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };
   const showDatePicker = () => {
 setDatePickerVisibility(true);
 };
  const confirmarFecha = date => {
    const opciones = { year: 'numeric', month: 'long', day: "2-digit" };
    guardarFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
    };
    
  return(
    <ScrollView style={styles.formulario}>
    <View>
      <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://st3.depositphotos.com/1052079/16259/v/450/depositphotos_162594468-stock-illustration-pets-cat-and-dog-vector.jpg'}}/>
          <Text style={styles.name}>.</Text>
          <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
            />
          </View>
          <View>
          <Text style={styles.label}>Tipo:</Text>
          <Picker >
            <Picker.Item label="Perro" value="Perro" />
            <Picker.Item label="Gato" value="Gato" />
            <Picker.Item label="Conejo" value="Conejo" />
            <Picker.Item label="Perico" value="Perico" />
          </Picker>
          <Text style={styles.label}>Sexo:</Text>
          <Picker >
            <Picker.Item label="Macho" value="Macho" />
            <Picker.Item label="Hembra" value="Hembra" />
          </Picker>
          <Text style={styles.name}>Información básica</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>Raza</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
            />
          </View>
          <View>
            <Text style={styles.label}>Fecha Nacimiento:</Text>
            <Button title="Seleccionar Fecha Nacimiento" onPress={showDatePicker} />
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale='es_ES'
            headerTextIOS="Elige la fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
            />
            <Text>{fecha}</Text>
          </View>
          <Text style={styles.name}>.</Text>
          <View style={styles.container}>
            <Text style={styles.label}>Color</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
            />
          </View>
          <View>
            <Text style={styles.label}>Fecha Esterilización:</Text>
            <Button title="Seleccionar Fecha esterilización" onPress={showDatePicker} />
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale='es_ES'
            headerTextIOS="Elige la fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
            />
            <Text>{fecha}</Text>
          </View>
          <TouchableHighlight onPress={ () => crearNuevaCita() }
            style={styles.btnSubmit}>
            <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
          </TouchableHighlight>
      </View>  
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
   btnSubmit: {
        padding: 10,
        backgroundColor:'#0da736',
        marginVertical: 10
        },
  textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
        },
  name: {
        fontSize:18,
        color:"#008080",
        fontWeight:'bold'
    },
  image: {
        width:90,
        height:90,
        borderRadius:0,
        borderWidth: 1,
        borderColor: '#c6c6c6',
        alignItems: 'center',
        justifyContent: 'center',
  },
  container: {
    marginBottom: 20,
    backgroundColor: "white",
    paddingTop: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#c6c6c6',
    borderRadius: 2,
  },
  input: {
    fontFamily: "Times New Roman",
    fontSize: 13,
    height: 20,
    color: '#000000',
  },
  label: {
    fontFamily: "Times New Roman",
    color: '#c6c6c6',
    fontSize: 10,
  },
});

export default Perfil;