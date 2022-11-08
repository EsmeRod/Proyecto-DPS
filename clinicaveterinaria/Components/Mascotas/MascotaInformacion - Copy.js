import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
// or any pure javascript modules available in npm
import { Card, ProgressBar } from 'react-native-paper';
//Rocky
export default function Mascota() {
  const [isLoading, setLoading] = useState(false);
  const [Mascotas, setMascotas] = useState([]);
   const getMascotas = () => {
        fetch('https://my-json-server.typicode.com/EAGPsting/EjemploGit/mascotas')
          .then((response) => response.json())
          .then((json) => {
            setMascotas(json.slice(1,2))
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));

   }
    useEffect(() => {
        setLoading();
        getMascotas();
    }, []);
  return (
    <>
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.img} source={require('../img/animales.jpeg')} />              
      <Text style={styles.box}>
      <Ionicons name= "female" />
      {isLoading ? <Text>Cargando</Text> :(
        <FlatList
                    data={Mascotas}
                    renderItem={({ item }) => 
                    <View>
      <Text style={styles.paragraph}>{item.nombre}{"\n"}
        {"\n"}</Text>
      <Text>{item.raza}{"\n"}
        {"\n"}</Text>
      <Text>{item.fecha_Nac}{"\n"}
        {"\n"} </Text>
          <Ionicons name= "calendar" />
            <Text>{'Sin esterilizar'}</Text>
        </View>
      }
        />
      )}
      </Text>
      </View>
      <View style={styles.containerimg}>
      <Text style={styles.box,styles.icontxt}>
      <Ionicons name= "water" style={styles.iconS} size={70}/>
        Baño
      </Text>
            <ProgressBar progress={0.6} color='green'/>
      <Text style={styles.box,styles.icontxt}>
        <Ionicons name= "cut" style={styles.iconS} size={70}/>
          Pelo
      </Text>
            <ProgressBar progress={0.20} color='green'/>
      <Text style={styles.box,styles.icontxt}>
      <Fontisto name= "injection-syringe" style={styles.iconS} size={70}/>
        Vacuna
      </Text>
            <ProgressBar progress={0.80} color='green'/>
      <Text style={styles.box,styles.icontxt}>
      <FontAwesome5 name= "tooth" style={styles.iconS} size={70}/>
        Dientes
      </Text>
            <ProgressBar progress={0.50} color='green'/>
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
    padding: 5,
  },
  containerimg:{
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
