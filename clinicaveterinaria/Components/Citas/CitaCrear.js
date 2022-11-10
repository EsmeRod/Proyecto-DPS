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
} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import DatePicker from 'react-native-modern-datepicker';
import Modal from 'react-native-modal';
import Axios from 'axios';
import { Picker } from '@react-native-picker/picker';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Appointment() {
  const [listPets, setListPets] = useState([]);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    Axios({
      url: 'https://apimascota.azurewebsites.net/api/Mascotas',
    })
      .then((response) => {
        setListPets(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setListPets]);


  handleClick = () => {
    Axios.post('https://apimascota.azurewebsites.net/api/Citas', {
      Tipo_Cita: service,
      Fecha: selectedDate,
      Hora: time,
      Id_Mascota: pet,
      Veterinaria: clinic,
    })
      .then((response) => {
        Alert.alert('Cita Agendada');
        console.log(response.data);
      })
      .catch((error) => {
        Alert.alert('Error al crear la cita');
        console.log(error);
      });
  };

  //Mascotas
  const [pet, setPet] = useState('');
  //Clinicas
  const [clinic, setClinic] = useState('');
  //Servicios
  const [service, setService] = useState('');

  //Fecha
  const [selectedDate, setSelectedDate] = useState('');

  //Obteniendo la fecha actual
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return year + '-' + month + '-' + date; //format: d-m-y;
  };

  //Hora
  const [time, setTime] = useState('');

  //Modal
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ScrollView>
        {/* Picker de la mascota */}
        <Text style={styles.label}>Mascota:</Text>
        <Picker
          selectedValue={pet}
          onValueChange={(itemValue, itemIndex) => setPet(itemValue)}>
          {listPets.map((item) => (
            <Picker.Item label={item.nombre} value={item.id_Mascota} />
          ))}
        </Picker>

        {/* Picker de las clinicas */}
        <Text style={styles.label}>Clínica:</Text>
        <Picker
          selectedValue={clinic}
          onValueChange={(itemValue, itemIndex) => setClinic(itemValue)}>
          <Picker.Item label="Clínica Los Héroes" value="Heroes" />
          <Picker.Item label="Clínica Centro" value="Centro" />
          <Picker.Item label="Clínica Lourdes" value="Lourdes" />
        </Picker>

        {/* Picker de los servicios */}
        <Text style={styles.label}>Motivo de cita:</Text>
        <Picker
          selectedValue={service}
          onValueChange={(itemValue, itemIndex) => setService(itemValue)}>
          <Picker.Item label="Baño" value="Baño" />
          <Picker.Item label="Pelo" value="Pelo" />
          <Picker.Item label="Vacuna" value="Vacuna" />
          <Picker.Item label="Dientes" value="Dientes" />
        </Picker>

        <View style={styles.containerButtons}>
          <Button
            style={styles.buttons}
            title="Seleccione la fecha"
            onPress={toggleModal}
          />
          <Modal isVisible={isModalVisible}>
            <View style={{ flex: 1 }}>
              <DatePicker
                onSelectedChange={(date) => setSelectedDate(date)}
                mode="date"
                selected={getCurrentDate()}
                minimumDate={getCurrentDate()}
                maximumDate="2024-01-01"
              />
              <Button title="Aceptar" onPress={toggleModal} />
            </View>
          </Modal>

          <Button
            style={styles.buttons}
            title="Seleccione la hora"
            onPress={toggleModal2}
          />
          <Modal isVisible={isModalVisible2}>
            <View style={{ flex: 1 }}>
              <DatePicker
                mode="time"
                onTimeChange={(selectedTime) => setTime(selectedTime)}
                minuteInterval={30}
              />
              <Button
                style={styles.buttons}
                title="Aceptar"
                onPress={toggleModal2}
              />
            </View>
          </Modal>
        </View>
        <View style={styles.container}>
          <Text>Fecha: {selectedDate}</Text>
          <Text>Hora: {time}</Text>
        </View>

        <Button
          style={styles.container}
          title="Agendar"
          onPress={this.handleClick}
        />
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
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  pickerselect: {
    flex: 1,
    fontSize: 50,
    padding: 10,
  },
  containerButtons: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  label: {
    fontFamily: 'Times New Roman',
    color: '#c6c6c6',
    fontSize: 10,
  },
});
