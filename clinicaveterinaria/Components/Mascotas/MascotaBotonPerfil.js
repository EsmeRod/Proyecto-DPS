import React, { useState } from "react";
import { FlatList,View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native";






const DATA = [
  {
    id: "1",
    icon:"plus",
    name:"Perfil",
  },
];

// <Icon name='dog' size={20} color="#900" light style={styles.iconos}/>
const Item = ({ item, onPress, backgroundColor, textColor }) => (


  
  <TouchableOpacity onPress = {onPress} style={[styles.item, backgroundColor]}>

   <View style={styles.move}>
   
   <Icon style= {[styles.iconos]} name={item.icon} size={20}></Icon>
    <Text style={[styles.title,textColor]}>{item.title}</Text>
  </View>
  </TouchableOpacity>
    
);

const BotonMenuPrincipal = () => {

  const navigation = useNavigation();
  
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#FFD959' : '#FFD959';
    const color = item.id === selectedId ? 'white' : 'black';


    return (
            
       
      <Item
        item={item}
        onPress={() => setSelectedId(item.id) & navigation.navigate(item.name) }
     
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      
        
      />
      
    );
  };

  return (
    <SafeAreaView style={{flexDirection:"row"}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    <TouchableOpacity style={styles.eliminar}>
    
    <Icon2 style= {[styles.iconos]} name="trash" size={20}></Icon2>
    </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 move:{
  flex:1,
  flexDirection:'row',
 
 },
 eliminar:{
   width: 60,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  borderRadius: 60,
  backgroundColor: '#FF8459',
  fontWeight:'bold',
  marginLeft:5
 },

 iconos:{
  margin:10,
  color:"#900",
   
 },

  item: {
    width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems:'center',
        padding: 10,
        borderRadius: 60,
        backgroundColor: '#c6c6c6',
        fontWeight:'bold',
  },
  title: {
    fontSize: 20,
  },
});

export default BotonMenuPrincipal;