import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, Button } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect } from 'react';

const styles = StyleSheet.create({
  container : {
  flex : 1,
  marginTop : StatusBar.currentHeight || 0
  },
  item :{
      backgroundColor : 'red',
      padding : 25,
      marginVertical : 8,
      marginHorizontal : 16
  }
})

const ItemContato = ({nome, id}) => {
    return(
    <View style={styles.item}>
        <Text>{nome}</Text>
        <Button name = "btnId" onPress={()=> alert(id)} title = "Id do item"></Button>
    </View>
    )
} 

const Contatos = () => {
    const [contatos, setContatos] = useState('');

    //Ao carregar a página, ela passa pelo useEffect
    useEffect(() => {
        (async () => {

            //Está requisitando a permissão do usuário para pegar os contatos
          const { status } = await Contacts.requestPermissionsAsync();
          //Permissão foi aceita
          if (status === 'granted') {
              //Pega os Contatos
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
            // Verifica se existe contatos
            if (data.length > 0) {
                console.log(data)
              setContatos(data);
            }
          }
        })();
      }, []);

      const renderItem = ({item}) => {
       return(
        <ItemContato nome={item.name} id={item.id}></ItemContato> 
       )
      }

    return(
        <View style={styles.container} >
            <Text>Contatos</Text>
            <FlatList>
                data={contatos}
                keyExtractor={item => item}
                renderItem={renderItem}
            </FlatList>
        </View>
    )
}

export default Contatos;