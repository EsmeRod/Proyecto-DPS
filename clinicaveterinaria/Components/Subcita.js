import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, ScrollView, Button, Switch, Alert, Picker } from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator} from '@react-navigation/stack';
import RNPickerSelect  from 'react-native-picker-select';
import DatePicker from 'react-native-modern-datepicker';
import Modal from "react-native-modal";
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function Appointment() {
  //Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  //Mascotas
  const [pet, setPet] = useState();
  //Clinicas
  const [clinic, setClinic] = useState();

  //Fecha
  const [selectedDate, setSelectedDate] = useState('');

  //Obteniendo la fecha actual
  const getCurrentDate=()=>{
 
      var date = new Date().getDate() ;
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
 
      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      return year+ '-' + month + '-' + date ;//format: d-m-y;
  }

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
          <RNPickerSelect
            style={styles.pickerselect} 
            onValueChange={(value) => setPet(value)}
            placeholder={{
              label: 'Mascotas',
              value: null,
            }}
            items={[
              {label: 'Cookie', value: 'Cookie'},
              {label: 'Jamie', value: 'Jamie'},
              {label: 'Hubertus', value: 'Hubertus'},
            ]}
          />
          {/* Contenedor del switch de la ubicacion */}
          <View style={styles.container}>
            <Text>
              ¿Escoger automáticamente la clínica según disponibilidad y ubicación?
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        </View>

        {/* Picker de las clinicas */}
        <RNPickerSelect
            style={styles.pickerselect} 
            onValueChange={(value) => setClinic(value)}
            placeholder={{
              label: 'Clínicas',
              value: null,
            }}
            items={[
              {label: 'Clínica Los Héroes', value: 'Heroes'},
              {label: 'Clínica Centro', value: 'Centro'},
            ]}
          />

        {/* Picker delos servicios */}
        <RNPickerSelect
            style={styles.pickerselect} 
            onValueChange={(value) => setClinic(value)}
            placeholder={{
              label: 'Motivo de cita',
              value: null,
            }}
            items={[
              {label: 'Consulta General', value: 'General'},
              {label: 'Vacunación', value: 'Vacunacion'},
              {label: 'Baño', value: 'Bano'},
            ]}
          />
          <View style={styles.containerButtons}>
        <Button style={styles.buttons} title="Seleccione la fecha" onPress={toggleModal} />
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <DatePicker
              onSelectedChange={date => setSelectedDate(date)}
              mode="date"
              selected={getCurrentDate()}
              minimumDate={getCurrentDate()}
              maximumDate="2024-01-01"
            />
          <Button title="Aceptar" onPress={toggleModal} />
          </View>
        </Modal>  

        <Button style={styles.buttons} title="Seleccione la hora" onPress={toggleModal2} />
        <Modal isVisible={isModalVisible2}>
          <View style={{ flex: 1 }}>
            <DatePicker
              mode="time"
              onTimeChange={selectedTime => setTime(selectedTime)}
              minuteInterval={30}
            />
            <Button style={styles.buttons} title="Aceptar" onPress={toggleModal2} />
        </View>
      </Modal>

      </View>

        
        <Button style={styles.container} title="Agendar" onPress={() => Alert.alert('Cita Agendada')} />
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
      flexDirection:'row',
      flex: 1,
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal: 40,
      paddingVertical: 20,
    },
    pickerselect:{
      flex: 1,
      fontSize: 50,
      padding: 10,
      
    },
    containerButtons: {
      flexDirection:'row',
      flex: 1,
      alignItems:'center',
      justifyContent:'space-between',
      paddingVertical: 20,
    },
});