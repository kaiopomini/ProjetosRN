/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,


} from 'react-native';
import React, { Component } from 'react';

import Top from './src/components/top';
import Icone from './src/components/icone';


class App extends Component {

constructor(props) {
  super(props);

  this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
}

jokenpo(escolhaUsuario) {
let escolhaComputador = '';
let numAleatorio = '';
let resultado = '';

  // gera um numero aleatório (0,1,2)
do {
  numAleatorio = Math.floor(Math.random() * 3);
} while (numAleatorio === 3);

switch (numAleatorio) {
  case 0: escolhaComputador = 'pedra'; break;
  case 1: escolhaComputador = 'tesoura'; break;
  case 2: escolhaComputador = 'papel'; break;
  default: escolhaComputador = '';
}

if (escolhaComputador === 'pedra') {
  if (escolhaUsuario === 'pedra') {
    resultado = 'Empate';
  }
  if (escolhaUsuario === 'papel') {
    resultado = 'Usuário ganhou!';
  }
  if (escolhaUsuario === 'tesoura') {
      resultado = 'Computador Ganhou';
  }
}

if (escolhaComputador === 'tesoura') {
  if (escolhaUsuario === 'tesoura') {
    resultado = 'Empate';
  }
  if (escolhaUsuario === 'pedra') {
    resultado = 'Usuário ganhou!';
  }
  if (escolhaUsuario === 'papel') {
      resultado = 'Computador Ganhou';
  }
}

if (escolhaComputador === 'papel') {
  if (escolhaUsuario === 'papel') {
    resultado = 'Empate';
  }
  if (escolhaUsuario === 'tesoura') {
    resultado = 'Usuário ganhou!';
  }
  if (escolhaUsuario === 'pedra') {
      resultado = 'Computador Ganhou';
  }
}


  this.setState({ escolhaUsuario,
                  escolhaComputador,
                  resultado
                });
}

  render() {
    return (
      <View>

        <Top />


        <View style={styles.painelAcoes}>
          <View style={styles.botao}>
            <Button title='pedra' onPress={() => { this.jokenpo('pedra'); }} />
          </View>
          <View style={styles.botao}>
            <Button title='papel' onPress={() => { this.jokenpo('papel'); }} />
          </View>
          <View style={styles.botao}>
            <Button title='tesoura' onPress={() => { this.jokenpo('tesoura'); }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}> {this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuário' />

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  botao: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'flex-end',

  },
  palco: {

    alignItems: 'center',
    margin: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    margin: 10
  }

});


AppRegistry.registerComponent('app3', () => App);
