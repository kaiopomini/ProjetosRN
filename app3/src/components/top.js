import { View, Image } from 'react-native';
import React, { Component } from 'react';

const imagem = require('../../imgs/jokenpo.png');

class Top extends Component {
  render() {
    return (
      <View>
        <Image source={imagem} />
      </View>
    );
  }
}

export default Top;
