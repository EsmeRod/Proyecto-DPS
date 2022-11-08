import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from "@react-navigation/native";
import BotonMenuPrincipal from './MascotaBotonPerfil'

const DATA = [
    {
        id: 1,
        title: 'Evee',
        race: 'Pitbull red nose',
        healing: '1',
        vaccines: '5',
        calendar: '2',
        picture: 'https://animalcorner.org/wp-content/uploads/2020/04/Red-Nose-Pitbull-1-1024x682.jpg',
        name:"MascotaInfo"
    },

    {
        id: 2,
        title: 'Ranger',
        race: 'Pitbull Blue',
        healing: '1',
        vaccines: '5',
        calendar: '2',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/American_Pit_Bull_Terrier_color_Blue_%28Gris%29.jpg',
        name:"MascotaInfo"
    },
    {
        id: 3,
        title: 'Toffy',
        race: 'Bully',
        healing: '1',
        vaccines: '5',
        calendar: '2',
        picture: 'https://demascotas.info/wp-content/uploads/2020/11/American_Bully-scaled.jpg',
        name:"MascotaInfo"
    },
];

// <Icon name='dog' size={20} color="#900" light style={styles.iconos}/>
const Item = ({ item, onPress }) => (


  <View style={styles.cardcontent}>
        <TouchableOpacity onPress={onPress}>
            <Image style={styles.image} source={{uri: item.picture}}/>
        </TouchableOpacity>
            <View>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.race}>{item.race}</Text>
             
                <View style={styles.cardcontent}>
                    <View>
                        <Icon name="band-aid" size={20} color="#000000"/>
                        <Text style={styles.race}>{item.healing}</Text>
                    </View>
                    <View>
                        <Icon name="syringe" size={20} color="#000000" />
                        <Text style={styles.race}>{item.vaccines}</Text>
                    </View>
                    <View>
                        <Icon name="calendar-alt" size={20} color="#000000" />
                        <Text style={styles.race}>{item.calendar}</Text>
                    </View>              
                </View>   
            </View> 
        </View>   
    
);


const MascotaPrincipal = () => {

  const navigation = useNavigation();
  
  const renderItem = ({ item }) => {


    return (
                 
        <Item
        item={item}
        onPress={()=>navigation.navigate(item.name) }        
      />
      
    );
  };

     const buttonClickedHandler = () => {

    };
    const seperator = () => {
        return (
            <View style={styles.seperator} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(items) => items.id}
                ItemSeparatorComponent={seperator}
            />
            
            <View style={styles.buttoncontent}>
             <BotonMenuPrincipal />
            
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width:90,
        height:90,
        borderRadius:40,
    },
    cardcontent:{
        height: 100,
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

