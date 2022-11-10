import React from "react";
import { Text, View, StyleSheet,TouchableOpacity,SafeAreaView } from 'react-native';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import{createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from 'react-native-vector-icons/FontAwesome5';
import Carrito from 'react-native-vector-icons/MaterialIcons';
import Calendario from 'react-native-vector-icons/FontAwesome5';
import Comprar from 'react-native-vector-icons/FontAwesome5';
import Huella from 'react-native-vector-icons/MaterialIcons';
import Login from './Perfil/Login';
//Screens

 import CarritoPrincipal from "../Components/Carrito/CarritoPrincipal";
  import InicioMenuPrincipal from "../Components/Inicio/MenuPrincipal";
 import CitasPrincipal from "../Components/Citas/CitasPrincipal";
 import CitaCrear from "../Components/Citas/CitaCrear";
 import StackScreen from "../Components/Total/StackScreen";
 import MascotaPrincipal from "../Components/Mascotas/MascotaPrincipal";
 import Perfil from "../Components/Mascotas/MascotaPerfil";
 import MascotaInfo from "../Components/Mascotas/MascotaInformacion";
 import Pago from './Total/Pago';
 //Agrega el componete Perfil en el Stack


  const PagoStack = createNativeStackNavigator();
 const FuncionPagoStack = () => {
   return(

     <PagoStack.Navigator>

      <PagoStack.Screen
          name="Pago"
          component={Pago}
          options={{headerBackTitleVisible: false,
          headerTitleAlign:'center',
          headerStyle:{backgroundColor:"#29EAAA"}}}
        />

     </PagoStack.Navigator>
   )
 }

 const MascotaStack = createNativeStackNavigator();
 const FunctionMascotaStack = () => {

   return(
<MascotaStack.Navigator initialRouteName="Mascota"> 
        <MascotaStack.Screen
          name="Mascota"
          component={MascotaPrincipal}
          options={{headerBackTitleVisible: false,
          headerTitleAlign:'center',
          headerStyle:{backgroundColor:"#29EAAA"}}}
        />
        <MascotaStack.Screen name="Perfil" component={Perfil}
        options={{headerBackTitleVisible: false,
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:"#FFD959"}}} />

        <MascotaStack.Screen name="Información Mascota" component={MascotaInfo}
        options={{headerBackTitleVisible: false,
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:"#FFD959"}}} />
      </MascotaStack.Navigator>
   );
 };

const CarritoStack = createNativeStackNavigator();
const FunctionCarritoStack = () => {
  return (
    
      <CarritoStack.Navigator initialRouteName="Carrito"> 
        <CarritoStack.Screen
          name="Carrito"
          component={CarritoPrincipal}
          options={{headerBackTitleVisible: false,
          headerTitleAlign:'center',
          headerStyle:{backgroundColor:"#29EAAA"}}}
        />
      </CarritoStack.Navigator>   
  );
};


const CitasStack = createNativeStackNavigator();
const FunctionCitasStack = () => {
  return (
    
      <CitasStack.Navigator initialRouteName="Citas"> 
        <CitasStack.Screen
          name="Citas"
          component={CitasPrincipal}
          options={{headerBackTitleVisible: false,
          headerTitleAlign:'center',
          headerStyle:{backgroundColor:"#29EAAA"}}}
        />
        <CitasStack.Screen name="Crear cita" component={CitaCrear}
        options={{headerBackTitleVisible: false,
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:"#FFD959"}}} />
      </CitasStack.Navigator>

      
    
  );
};

 const InicioStack = createNativeStackNavigator();
 function FunctionInicioStack() {
   return(
     <InicioStack.Navigator
     initialRouteName="Inicio">
     <InicioStack.Screen name="Inicio"
     component={InicioMenuPrincipal}
     options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29E4EA"}}}/>

     <InicioStack.Screen name="Mascota"
     component={MascotaPrincipal}
      options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29EAAA"}}}/>

     <InicioStack.Screen name="Citas"
     component={CitasPrincipal}
     options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29EAAA"}}}/>

      <InicioStack.Screen name="Crear cita" component={CitaCrear}
        options={{headerBackTitleVisible: false,
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:"#FFD959"}}} />

      <InicioStack.Screen name="Carrito"
     component={CarritoPrincipal}
     options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29EAAA"}}}/>

      <InicioStack.Screen name="Información Mascota" component={MascotaInfo}
        options={{headerBackTitleVisible: false,
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:"#FFD959"}}} />

      <InicioStack.Screen name="Perfil" component={Perfil}
        options={{headerBackTitleVisible: false,
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:"#FFD959"}}} />

     </InicioStack.Navigator>

   )
 }

 const Tab = createBottomTabNavigator();

 function MyTabs() {

    return(
      <Tab.Navigator
      initialRouteName="InicioMenuPrincipal" 
      screenOptions={{
        tabBarInactiveBackgroundColor:'white',
        tabBarInactiveTintColor:'#3D975F'
      }}
      >
        <Tab.Screen name="Pago" component={FuncionPagoStack}
       options={{
         tabBarLabel:'Total',
         tabBarIcon:({color,size}) => (
       <Comprar name="credit-card" color={color} size={size}></Comprar>
         ),
         headerShown:false,
         
       }} />
       <Tab.Screen name="MascotaPrincipal" component={FunctionMascotaStack}
       options={{
         tabBarLabel:'Mascotas',
         tabBarIcon:({color,size}) => (
       <Huella name="pets" color={color} size={size}></Huella>
         ),
         headerShown:false,
       }} />

       <Tab.Screen name="InicioMenuPrincipal" component={FunctionInicioStack}
       options={{
         tabBarLabel:'Inicio',
         tabBarIcon:({color,size}) => (
       <Home name="home" color={color} size={size}></Home>
         ),
         headerShown:false,
         
       }} />

       <Tab.Screen name="CitasPrincipal" component={FunctionCitasStack} 
       options={{
         tabBarLabel:'Citas',
         tabBarIcon:({color,size}) => (
       <Calendario name="calendar-plus" color={color} size={size}></Calendario>
         ),
         headerShown:false,
       }}/>
       
        <Tab.Screen name="Carrito" component={FunctionCarritoStack} options={{
         tabBarLabel:"Carrito",
         tabBarIcon:({color,size}) => (
       <Carrito name="add-shopping-cart" color={color} size={size}></Carrito>
         ),
         headerShown:false,
       }} />

      </Tab.Navigator>

    );
 }
 export default function Navigation(){
    return(

       <MyTabs />
       
      
     
    );
 }


