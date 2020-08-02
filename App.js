import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste de Applicativos</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.textInput}
        placeholder='Entre com seu nome'>
      </TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Clique Aqui !</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    backgroundColor:'#FFF',
    width:'80%',
    marginBottom:20,
    padding:10,
    color:'#222',
    fontSize:17,
    borderRadius:7,

  },
  button: {
    backgroundColor: '#35AAFF',
    width:'80%',
    height:45,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',
  },
  textButton: {
    color:'#ffff'
  }
});
