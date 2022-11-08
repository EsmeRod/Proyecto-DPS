import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Navigation from './Components/Navigation';
import Mascotita from './Components/Mascotas/MascotaPrincipal';
import Login from './Components/Perfil/Login';
import {NavigationContainer} from "@react-navigation/native";
import {NavigationLoginTabs} from './Components/NaviLoginTabs';
 

// You can import from local files

export default function App() {
  return (

 <NavigationContainer>

   <NavigationLoginTabs />

 </NavigationContainer>

   

    //<Mascota />
   
    
  );
}

