import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contatos from './Pages/Contatos';
import TextToSpeech from './Pages/TextToSpeech';
import Localizacao from './Pages/Localização';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Scree name = "Contatos" component={Contatos}></Tab.Scree>
        <Tab.Scree name = "TextToSpeech" component={TextToSpeech}></Tab.Scree>
        <Tab.Scree name = "Localizacao" component={Localizacao}></Tab.Scree>     
      </Tab.Navigator>
    </NavigationContainer>
  );
}