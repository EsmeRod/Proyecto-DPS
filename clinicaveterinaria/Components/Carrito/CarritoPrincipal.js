import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// or any pure javascript modules available in npm
import { Card, ProgressBar, Button } from 'react-native-paper';

export default function Producto() {
  const [Name, setName] = useState('Collar');
  const [Categoria, setCategoria] = useState('Antipulgas');
  const [Marca, setMarca] = useState('Bayer');
  const [Definicion, setDefinicion] = useState('Para Perro Pequeño');
  const [Precio, setPrecio] = useState(90.99);

  return (
    <>
      <ScrollView>
        <Card style={styles.card}>
          <View style={styles.container}>
            <FontAwesome5
              name="dog"
              style={styles.iconS}
              size={30}
              color="white"
            />
            <Card.Title
              title={Name}
              subtitle={Categoria}
              type="elevated"
              style={styles.icontxt}
            />
          </View>
          <View style={styles.content}>
            <Card.Cover
              source={require('../img/collar.jpg')}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.paragraph}>{Definicion}</Text>
            <Text style={styles.txtPrecio}>{"$"+Precio}</Text>
            <Card.Actions>
              <Button>Agregar al carrito</Button>
            </Card.Actions>
          </View>
        </Card>
        <Card style={styles.card}>
          <View style={styles.container}>
            <FontAwesome5
              name="cat"
              style={styles.iconS}
              size={30}
              color="white"
            />
            <Card.Title
              title="Cat Fresh"
              subtitle="Arena para gato"
              Type="elevated"
              style={styles.icontxt}
            />
          </View>
          <View style={styles.content}>
            <Card.Cover
              source={require('../img/arena.jpg')}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.paragraph}>Super Absorbente - 7 Dias sin olor</Text>
            <Text style={styles.txtPrecio}>$12.95</Text>
            <Card.Actions>
              <Button>Agregar al carrito</Button>
            </Card.Actions>
          </View>
        </Card>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 8,
    Type: 'elevated',
  },
  content: {
    backgroundColor: '#ecf0f1',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  txtPrecio: {
    margin: 4,
    fontSize: 18,
    textAlign: 'left',
    textDecorationStyle: 'solid',
    textDecorationColor: 'red',
    textDecorationLine: 'underline',
    color: 'red',
    borderColor: 'red',
  },
  img: {
    alignItems: 'center',
    height: 100,
    width: '100%',
    backgroundColor: 'white',
  },
  iconS: {
    size: 100,
    margin: 10,
    alignSelf: 'flex-start',
    borderRadius: 60,
    backgroundColor: 'green',
  },
  icontxt: {
    flex: 2,
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragraph: {
    margin: 4,
    fontSize: 18,
    textAlign: 'left',
  },
});
