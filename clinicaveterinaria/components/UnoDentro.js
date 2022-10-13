import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DATA = [
    {
        id: 1,
        title: 'Evee',
        race: 'Pitbull red nose',
        healing: '1',
        vaccines: '5',
        calendar: '2',
        picture: 'https://animalcorner.org/wp-content/uploads/2020/04/Red-Nose-Pitbull-1-1024x682.jpg',
    },

    {
        id: 2,
        title: 'Ranger',
        race: 'Pitbull Blue',
        healing: '1',
        vaccines: '5',
        calendar: '2',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/American_Pit_Bull_Terrier_color_Blue_%28Gris%29.jpg',
    },
    {
        id: 3,
        title: 'Toffy',
        race: 'Bully',
        healing: '1',
        vaccines: '5',
        calendar: '2',
        picture: 'https://demascotas.info/wp-content/uploads/2020/11/American_Bully-scaled.jpg',
    },
];

const UnoDentro = () => {

 const renderItem = ({ item }) => (
        <View style={styles.cardcontent}>
            <Image style={styles.image} source={{uri: item.picture}}/>
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
             <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundButton1}>
                <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundButton2}>
                <Text>X</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    roundButton1: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 60,
        backgroundColor: 'orange',
        fontWeight:'bold',
        fontSize: 120,
    },
    roundButton2: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 60,
        backgroundColor: '#c6c6c6',
        fontWeight:'bold',
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
        marginHorizontal:20,
        backgroundColor:"white",
        flexDirection:'row',
        alignItems: 'center',
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

export default UnoDentro;
