import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
  Modal,
  TextInput
} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import DatePicker from 'react-native-modern-datepicker';
import BotonCitas from './CitaBoton';
import Axios from 'axios';
import { DataTable } from 'react-native-paper';

export default function Appointment() {
  const [listPets, setListPets] = useState([]);
  const [list, setList] = useState([]);
  const [advice, setAdvice] = useState('');
  const [post, setPost] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Axios({
      url: 'https://apimascota.azurewebsites.net/api/Citas',
    })
      .then((response) => {
        setListPets(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setListPets]);
  

  deleteRow = (id, e) => {
    //console.log("Me estoy ejecutando");
    Axios.delete(`https://apimascota.azurewebsites.net/api/Citas/${id}`)
      .then((res) => {
        console.log(res.data);
        Alert.alert('Cita eliminada');
      })
      .catch((error) => {
        Alert.alert('Error al eliminar la cita');
        console.log(error);
      });
  };

  getRow = (id, e) => {
    //console.log("Me estoy ejecutando");
    Axios.get(`https://apimascota.azurewebsites.net/api/Mascotas/${id}`)
      .then((res) => {
        console.log(res.data.Nombre);
        <Text>{res.data.Nombre}</Text>
      })
      .catch((error) => {
        Alert.alert('Error de consulta');
        console.log(error);
      });
  };

  

  const handleVisibleModal = () => {
    setVisible(!visible);
  }

  //Obteniendo la fecha actual
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return year + '-' + month + '-' + date; //format: d-m-y;
  };

  //Modal
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ScrollView>
      
        <DatePicker
          mode="date"
          selected={getCurrentDate()}
          minimumDate={getCurrentDate()}
          maximumDate="2024-01-01"
        />
        <View style={styles.container}>
          
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Motivo</DataTable.Title>
                <DataTable.Title>Fecha</DataTable.Title>
                <DataTable.Title>Lugar</DataTable.Title>
                <DataTable.Title>Opción</DataTable.Title>
              </DataTable.Header>

              {listPets.map((item) => (
                <DataTable.Row>
                
                  <DataTable.Cell>{item.tipo_Cita}</DataTable.Cell>
                  <DataTable.Cell>{item.fecha}</DataTable.Cell>
                  <DataTable.Cell>{item.veterinaria}</DataTable.Cell>
                  <DataTable.Cell>
                    <Button
                      title="Eliminar"
                      color="red"
                      onPress={(e) => this.deleteRow(item.id_Cita, e)}
                    />
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          
          <View style={styles.button}>
            <BotonCitas />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 35 : 0,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginTop: 50,
    borderRadius: 20,
  },
});
