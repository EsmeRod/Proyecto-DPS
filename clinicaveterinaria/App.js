import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
<<<<<<< HEAD
//import Navigation from './Components/Navigation';
import Mascotita from './Components/Mascotas/MascotaPrincipal';
import Login from './Components/Perfil/Login';
import {NavigationContainer} from "@react-navigation/native";
import {NavigationLoginTabs} from './Components/NaviLoginTabs';
 
=======
import MenuPrincipal from './Components/MenuPrincipal'
import Navigation from './Navigation';
import Citas from './Components/Citas';
import Subcita from './Components/Subcita'
import Mascota from './Components/Mascota';
import Producto from './Components/Producto';
import Login from './Components/Loggin'
>>>>>>> bf44f9825b6fc4244ec3357159a44a3e5326efc1

// You can import from local files

export default function App() {
  return (

<<<<<<< HEAD
 <NavigationContainer>

   <NavigationLoginTabs />

 </NavigationContainer>

   
=======
 
    <Navigation />
    //<Subcita />
>>>>>>> bf44f9825b6fc4244ec3357159a44a3e5326efc1

    //<Mascota />
   
    
  );
}

