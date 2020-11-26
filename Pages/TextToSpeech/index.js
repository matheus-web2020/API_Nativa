import React from 'react';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import * as Speech from 'expo-speech';

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

const TextToSpeech = () => {
    const speak = () => {
        Speech.speak('Bom dia! Como vai? Espero que esteja tudo bem')
    }
    return (
        <View style={styles.container}>
          <Button title="Pressione para falar" onPress={()=> speak()} />
        </View>
      );
}

export default TextToSpeech;