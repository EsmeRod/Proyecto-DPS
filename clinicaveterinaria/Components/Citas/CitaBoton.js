import React, { useState } from "react";
import { FlatList,View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from "@react-navigation/native";


const DATA = [
  {
    id: "1",
    title: "Crear Citas",
    icon:"plus",
    name:"CitaCrear",
  },
];

// <Icon name='dog' size={20} color="#900" light style={styles.iconos}/>
const Item = ({ item, onPress, backgroundColor, textColor }) => (


  
  <TouchableOpacity onPress = {onPress} style={[styles.item, backgroundColor]}>

   <View style={styles.move}>
   
   <Icon style= {styles.iconos} name={item.icon} size={20}></Icon>
    <Text style={[styles.title,textColor]}>{item.title}</Text>
  </View>
  </TouchableOpacity>
    
);

const BotonCitas = () => {

  const navigation = useNavigation();
  
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "pink" : "pink";
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
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 move:{
  flex:1,
  flexDirection:'row',

  
 },

 iconos:{
  margin:10,
  color:"#900",
   
 },

  item: {
    padding: 20,
    borderRadius:20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default BotonCitas;