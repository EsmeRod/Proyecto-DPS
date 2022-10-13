import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
// or any pure javascript modules available in npm
import { Card, ProgressBar } from 'react-native-paper';

export default function Mascota() {
  const [Name, setName] = useState("Pamela");
  const [Raza, setRaza] = useState("Bichon Maltes");
  const [Nacimiento, setNacimiento] = useState("05/03/2002");
  const [Edad, setEdad] = useState("2Y 4M 25D");
  const [Progreso, setProgreso] = useState(0.4);
  const [Colorprog, setColorprog] = useState('green');
  if(Progreso>=0.3){
    const [Colorprog, setColorprog] = useState('green');
  }else{
    const [Colorprog, setColorprog] = useState('red');
  }
  return (
    <>
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.img} source={require('./img/mascota.jpeg')} />
      <Text style={styles.box}>
      <Ionicons name= "female" />
      <Text style={styles.paragraph}>{Name}{"\n"}
        {"\n"}</Text>
      <Text>{Raza}{"\n"}
        {"\n"}</Text>
        <Ionicons name= "gift" />
      <Text>{Nacimiento}{"\n"}
        {"\n"} </Text>
      <Ionicons name= "calendar" />
        <Text>{Edad}</Text>
      </Text>
      </View>
      <View style={styles.containerimg}>
      <Text style={styles.box,styles.icontxt}>
      <Ionicons name= "water" style={styles.iconS} size={70}/>
        Baño
      </Text>
            <ProgressBar progress={Progreso} color={Colorprog}/>
      <Text style={styles.box,styles.icontxt}>
        <Ionicons name= "cut" style={styles.iconS} size={70}/>
          Pelo
      </Text>
            <ProgressBar progress={Progreso} color={Colorprog}/>
      <Text style={styles.box,styles.icontxt}>
      <Fontisto name= "injection-syringe" style={styles.iconS} size={70}/>
        Vacuna
      </Text>
            <ProgressBar progress={Progreso} color={Colorprog}/>
      <Text style={styles.box,styles.icontxt}>
      <FontAwesome5 name= "tooth" style={styles.iconS} size={70}/>
        Dientes
      </Text>
            <ProgressBar progress={Progreso} color={Colorprog}/>
      </View>
      </ScrollView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerimg:{
    flex:3,
    backgroundColor:'white',
  },
  img: {
    flex:1,
    alignSelf: 'flex-start',
    alignItems:'middle',
    margin: 5,
    height: 130,
    width: '100%',
  },
  box:{
     flex: 1,
     margin: 10
  },
  iconS:{
    size: 50,
    margin:40,
    alignSelf: 'space-around',
  },
  icontxt:{
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'middle-center',
  },
  paragraph: {
    flex:1,
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
