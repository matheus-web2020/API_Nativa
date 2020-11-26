import React from 'react';
import { View, Text } from 'react-native';

const styles = StyleSheet.create({
  container : {
  flex : 1,
  marginTop : Statusbar.currentHeight || 0
  }
})

const Contatos = () => {
    return(
        <View style={styles.container} >
            <Text>Contatos</Text>
        </View>
    )
}

export default Contatos;