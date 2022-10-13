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
//Screens

 import Producto from "./Components/Producto";
  import MenuPrincipal from "./Components/MenuPrincipal";
 import Citas from "./Components/Citas";
 import Subcita from "./Components/Subcita"
 import StackScreen from "./Components/StackScreen";
 import UnoDentro from "./Components/UnoDentro"

 const HomeStackNavigator = createNativeStackNavigator();


const StackCitas = createNativeStackNavigator();

const MyStackCitas = () => {
  return (
    
      <StackCitas.Navigator initialRouteName="Citas"> 
        <StackCitas.Screen
          name="Citas"
          component={Citas}
          options={{headerBackTitleVisible: false,
          headerTitleAlign:'center',
          headerStyle:{backgroundColor:"#29EAAA"}}}
        />
        <StackCitas.Screen name="Crear Citas" component={Subcita}
        options={{headerBackTitleVisible: false,
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:"#FFD959"}}} />
      </StackCitas.Navigator>
    
  );
};

 function MyStack() {
   return(
     <HomeStackNavigator.Navigator
     initialRouteName="Menu">
     <HomeStackNavigator.Screen name="Menu"
     component={MenuPrincipal}
     options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29E4EA"}}}/>

     <HomeStackNavigator.Screen name="Mascotas"
     component={UnoDentro}
      options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29EAAA"}}}/>

     <HomeStackNavigator.Screen name="Citas"
     component={Citas}
     options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29EAAA"}}}/>

      <HomeStackNavigator.Screen name="Crear Citas" component={Subcita}
        options={{headerBackTitleVisible: false,
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:"#FFD959"}}} />

      <HomeStackNavigator.Screen name="Carrito"
     component={Producto}
     options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29EAAA"}}}/>


     </HomeStackNavigator.Navigator>

   )
 }

 const Tab = createBottomTabNavigator();

 function MyTabs() {

    return(
      <Tab.Navigator
      initialRouteName="MenuPrincipal"
      
      screenOptions={{
  
        tabBarInactiveBackgroundColor:'white',
        tabBarInactiveTintColor:'#3D975F'
       
      
      }}
      >

        <Tab.Screen name="Pago" component={StackScreen}
       options={{
         tabBarLabel:'Total',
          
         tabBarIcon:({color,size}) => (
       <Comprar name="credit-card" color={color} size={size}></Comprar>
         ),
         headerShown:false,
         
       }} />


       <Tab.Screen name="Mascotas" component={UnoDentro}
       options={{
         tabBarLabel:'Mascotas',
         tabBarIcon:({color,size}) => (
       <Huella name="pets" color={color} size={size}></Huella>
         ),
         headerShown:false,
       }} />

       <Tab.Screen name="MenuPrincipal" component={MyStack}
       options={{
         tabBarLabel:'Inicio',
         tabBarIcon:({color,size}) => (
       <Home name="home" color={color} size={size}></Home>
         ),
         headerShown:false,
       }} />

       <Tab.Screen name="Fecha" component={MyStackCitas} 
       options={{
         tabBarLabel:'Citas',
         tabBarIcon:({color,size}) => (
       <Calendario name="calendar-plus" color={color} size={size}></Calendario>
         ),
         headerShown:false,
       }}/>
       

        <Tab.Screen name="Productos" component={Producto} options={{
         tabBarLabel:'Carrito',
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

      
       <NavigationContainer>
       <MyTabs />
       </NavigationContainer>
      
     
    );
 }


