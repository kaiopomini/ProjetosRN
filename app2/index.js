//Import

import { AppRegistry, View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

//formataçã
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'

  }
};

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 11);

  // frases
  var frases = Array();
  frases[0] = 'Enfrente os problemas e leve a melhor!';
  frases[1] = 'Dê mais atenção ao que você tem de bom na sua vida.';
  frases[2] = 'Para chegar ao topo, o que importa é começar!';
  frases[3] = 'De nada adianta ter sonhos, se você não se empenhar em correr atrás.';
  frases[4] = 'Ontem já passou, é hora de planejar o futuro.';
  frases[5] = 'Você pode não ter o melhor do mundo, mas tem muito pelo que agradecer!';
  frases[6] = 'Não deixe sua felicidade nas mãos de ninguém!';
  frases[7] = 'Nunca é tarde para fazer o que você realmente quer fazer.';
  frases[8] = 'Nunca duvide que você é especial!';
  frases[9] = 'Tenha um objetivo na vida e lute sempre para alcançá-lo!';
  frases[10] = 'Não deixe nada nem ninguém estragar o seu bom humor';

  var fraseEscolhida = frases[numeroAleatorio];
  Alert.alert(fraseEscolhida)
};

//criar componente
const App = () => {

  const { principal, botao, textoBotao} = Estilos;

  return (
    <View style={principal}>
        <Image source={require('./imgs/logo.png')}>
        </Image>
        <TouchableOpacity
          onPress={gerarNovaFrase}
          style={botao}
        >
          <Text style={textoBotao}>Nova frase</Text>
        </TouchableOpacity>
    </View>

  );
};

//rederizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
