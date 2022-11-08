import React from "react";
import { View,Text,SafeAreaView, StyleSheet, TextInput,ScrollView,ImageBackground,Dimensions,TouchableOpacity,Alert} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';




export function Login ({navigation}) {

  
 
  const [Email, onChangeEmail] = React.useState(null);
  const [Contras, onChangeContras] = React.useState(null);

  return (


  <ScrollView
    style={{flex: 1, backgroundColor:'#ffffff'}}
    showsVerticalScrollIndicator={false}>

     <ImageBackground source={require('../Images/Hexagono.jpg')}
  style={{height: Dimensions.get('window').height /2.5,}} 
  >
  <View style={styles.brandView}>
    

    <Text style={styles.brandViewText}></Text>
  </View>

  </ImageBackground>
  
    <SafeAreaView style={styles.bottomView}>


    <View style={{paddingBottom:20, paddingHorizontal:40}}>
         <Text style={{color:'#4632A1',fontSize:34}}>Bienvenido</Text>
        
    <View style={{flexDirection:"row"}}>
         <Text>Tienes una cuenta?</Text>
         <Text style={{color:'red'}}> Registrate ahora</Text>
    </View>
     
     </View>
      
      
      <TextInput 
        style={styles.input}
        onChangeText={onChangeEmail}
        value={Email}
        placeholder="ClinicaVet@gmail.com"
        keyboardType="email-address"/>
 
   
      <TextInput
        style={styles.input}
       onChangeText={onChangeContras}
        value={Contras}
        secureTextEntry
        placeholder="Contraseña"
        keyboardType="password"
        autoCorrect={false}
      />
    <View
    style={{
      height:100,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white'
    
    }}
    >
       <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Navigation')}>
          <Text style={{color:'#ffffff'}}>Inicia Sesión</Text>
      </TouchableOpacity>
      
    </View>

    <View style={{flex:1}}>
      <Text style={{textAlign:'center'}}>o inicia sesión con</Text>

      <View style={{alignItems:'center',marginTop:10,marginHorizontal:130,paddingVertical:10,backgroundColor:'#FF8459',borderRadius:10}}>

   <TouchableOpacity  onPress={() => navigation.navigate('Navigation')} style={{paddingHorizontal:20}}>

    <Icon  name="google" size={20} color="red" />
  
        </TouchableOpacity>
    
      </View>
    </View>

 
    </SafeAreaView>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
  bottomView:{
    flex:1.5,
    backgroundColor:'white',
    bottom:50,
    borderTopStartRadius:60,
    borderTopEndRadius:60,
    paddingTop:40
   },
   brandView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
  button: {
    alignItems: "center",
    backgroundColor: "#4632A1",
    padding: 10,
    paddingHorizontal:50,
    borderRadius:10
  }
});

export default Login;