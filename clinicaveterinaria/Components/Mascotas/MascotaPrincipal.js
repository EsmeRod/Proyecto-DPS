import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from "@react-navigation/native";
import BotonMenuPrincipal from './MascotaBotonPerfil'

const MascotaPrincipal = () => {

  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

    getUsers = () => {
        fetch('https://my-json-server.typicode.com/EAGPsting/EjemploGit/mascotas')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);

     const buttonClickedHandler = () => {

    };
    const seperator = () => {
        return (
            <View style={styles.seperator} />
        )
    }

    return (
        <SafeAreaView>
            <View >
                {isLoading ? <Text>Loading...</Text> :
                (
                    <FlatList
                        data={users}
                        renderItem={({ item }) => 
                        <View style={styles.cardcontent}>
              <TouchableOpacity onPress={() => navigation.navigate('Información Mascota')}>
                       <Image style={styles.image } source={require("../img/perfil.jpg")}/>
                          </TouchableOpacity>
                          <View >
                              <Text style={styles.name}>{item.nombre}</Text>
                              <Text style={styles.race}>{item.raza}</Text>
                              <Text style={styles.race}>{item.tipo}  </Text>
                              <Text style={styles.race}>{item.sexo}  </Text>
                              <Text style={styles.race}>{item.color}  </Text>
                              <Text style={styles.race}>{item.sexo}  </Text>
                              <Text style={styles.race}>{item.fecha_Nac}  </Text>
                              <View style={styles.cardcontent}>
                                <View>
                                    <Icon name="band-aid" size={20} color="#000000"/>
                                    <Text style={styles.race}>{item.curaciones} </Text>
                                </View>
                                <View>
                                    <Icon name="syringe" size={20} color="#000000" />
                                    <Text style={styles.race}>{item.vacunas}</Text>
                                </View>
                                <View>
                                    <Icon name="calendar-alt" size={20} color="#000000" />
                                    <Text style={styles.race}>{item.citas}</Text>
                                </View>              
                            </View>   
                          </View> 
                        </View>
                        }
                    />
                )}
            </View>
            <View style={styles.buttoncontent}>
             <BotonMenuPrincipal />
            
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    image: {
        width:90,
        height:90,
        borderRadius:40,
    },
    cardcontent:{
        height: 200,
        marginHorizontal:20,
        backgroundColor:"white",
        flexDirection:'row'
    },
    buttoncontent:{
        height: 100,
        
        backgroundColor:"white",
        flexDirection:'row',
        justifyContent: 'center',
    },
    name: {
        fontSize:18,
        color:"#008080",
        fontWeight:'bold'
    },
    race: {
        fontSize:12,
        color:"#000000",
    },
    seperator: {
        width: 400,
        height: 5,
        backgroundColor: '#9b9b9b'
    }
});

export default MascotaPrincipal;

