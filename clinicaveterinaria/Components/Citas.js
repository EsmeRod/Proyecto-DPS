import React, { Component } from 'react';
import {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, SafeAreaView,ScrollView, Platform,Button} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import DatePicker from 'react-native-modern-datepicker';
import BotonCitas from './BotonCitas';


export default class ExampleFour extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Nombre', 'Nacimiento', 'Accion'],
      tableData: [
        ['Ada Loverace', '1815-10-10', 'Editar'],
        ['Grace Hopper', '1906-10-09', 'Editar'],
        ['Margaret Hamilton', '1936-08-17', 'Editar'],
        ['Joan Clarke', '1917-06-24', 'Editar']
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  

  render() {
    const state = this.state;

      //Obteniendo la fecha actual
      const getCurrentDate=()=>{
 
      var date = new Date().getDate() ;
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
 
      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      return year+ '-' + month + '-' + date ;//format: d-m-y;
  }
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Editar</Text>
        </View>
      </TouchableOpacity>
    );

    return (

      
      
      <SafeAreaView style={styles.droidSafeArea}>
        <ScrollView>
          <DatePicker              
              mode="date"
              selected={getCurrentDate()}
              minimumDate={getCurrentDate()}
              maximumDate="2024-01-01"
            />
          <View style={styles.container}>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
              {
                state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                    {
                      rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                      ))
                    }
                  </TableWrapper>
                ))
              }
            </Table>

          <View style={styles.button}>
          <BotonCitas/>
          </View>

          </View>
       
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#b5b5b5' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#0000' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
  droidSafeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        paddingHorizontal: 10,
    },
     button: {
    alignItems: "center",
    padding: 10,
    marginTop:50,
    borderRadius:20
  },

});