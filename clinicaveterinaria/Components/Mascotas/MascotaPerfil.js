import React, { Component, useState, use } from 'react';
import {View, Modal, Pressable,Text,TextInput, StyleSheet, Image, Alert, Button, TouchableHighlight, ScrollView} from "react-native";
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const MascotaPrincipalPerfil = ({item}) => {
   const [fecha, guardarFecha] = useState('');
   const [fechaEsterilizacion, guardarFechaEsterilizacion] = useState('');
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
   const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
  GetSelectedPickerItem=()=>{
 
    Alert.alert(this.state.PickerValueHolder);
  }
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
  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
    };
   const showDatePicker2 = () => {
 setDatePickerVisibility2(true);
 };
  const confirmarFecha2 = date => {
    const opciones = { year: 'numeric', month: 'long', day: "2-digit" };
    guardarFechaEsterilizacion(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker2();
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
          <Picker>
            <Picker.Item label="Perro" value="Perro" />
            <Picker.Item label="Gato" value="Gato" />
            <Picker.Item label="Conejo" value="Conejo" />
            <Picker.Item label="Perico" value="Perico" />
          </Picker>
          <Text style={styles.label}>Sexo:</Text>
          <Picker>
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
            <Button title="Seleccionar Fecha esterilización" onPress={showDatePicker2} />
            <DateTimePickerModal
            isVisible={isDatePickerVisible2}
            mode="date"
            onConfirm={confirmarFecha2}
            onCancel={hideDatePicker2}
            locale='es_ES'
            headerTextIOS="Elige la fecha esterilizacion"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
            />
            <Text>{fechaEsterilizacion}</Text>
          </View>
          
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Mascota Creada!</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Cerrar</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={styles.btnSubmit}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textoSubmit}>Crear Nueva Mascota</Text>
            </Pressable>
          </View>
      </View>  
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
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

export default MascotaPrincipalPerfil;