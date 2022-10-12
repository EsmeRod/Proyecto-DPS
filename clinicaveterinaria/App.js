import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, ScrollView, Button, Switch, Alert } from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator} from '@react-navigation/stack';
import RNPickerSelect  from 'react-native-picker-select';
import DatePicker from 'react-native-modern-datepicker';
import { TimePickerModal } from 'react-native-paper-dates'
// You can import from local files
import CreateAppointment from './components/CreateAppointment'
import Appointment from './components/Appointments'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
  
  return (
    
    //Quitar/poner en comentarios para ver las vistas

    //Citas
    <Appointment/>

    //Crear citas
      //<CreateAppointment/>
    
    
  );
}