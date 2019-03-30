/** @format */
//
//import { AppRegistry } from 'react-native';
//import App from './App';
//import { name as appName } from './app.json';

//AppRegistry.registerComponent(appName, () => App);


import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  var n_aleatorio = Math.random();
  n_aleatorio = Math.floor(n_aleatorio*10);
  alert(n_aleatorio);
}

const App = () => {

  return (
    <View>
      <Text>Gerador de números randomicos</Text>
      <Button
        title="Gerar um número randomico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);
