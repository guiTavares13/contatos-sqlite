import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import SQLite from 'react-native-sqlite-storage'
import * as SQLite from 'expo-sqlite';

export default function App() {

  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("");
  const [listContatos, setListContatos] = useState([])

  useEffect(
    () => {
      
    }, []
  )

  return (
    <>
      <Text style={styles.title}>Cadastro de contatos</Text>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput style={styles.textInput} placeholder='Código' />
          <TextInput style={styles.textInput} placeholder='Nome' />
          <TextInput style={styles.textInput} placeholder='E-mail' />
          <StatusBar style="auto" />
        </View>
        <View style={styles.containerInputPassword}>
            <TextInput style={styles.textInputPassowrd} secureTextEntry={true} placeholder='Senha' />
            <TextInput style={styles.textInputPassowrd} secureTextEntry={true} placeholder='Confirmar Senha' />
          </View>

        <View style={styles.buttoms}>
          <TouchableHighlight style={[styles.buttom, {backgroundColor: 'green'}]}>
            <Text>Salvar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.buttom, {backgroundColor: 'red'}]}>
            <Text>Excluir</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.buttom, {backgroundColor: 'blue'}]}>
            <Text>Listar</Text>
          </TouchableHighlight>
        </View>

        <ScrollView>
        {listContatos.width > 0 && (
          <View style={styles.listView}>
          <Text>Codigo: </Text>
          <Text>Nome: </Text>
          <Text>E-mail: </Text>
        </View>)
        }  
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listView: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 10,
    width: 320,
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    padding: 30
  },
  textInputPassowrd: {
    width: 155,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 5
  },
  textInput: {
    width: 320,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 5
  },
  containerInputPassword: {
    flexDirection: 'row',
  },
  buttoms: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  buttom: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  }
});
