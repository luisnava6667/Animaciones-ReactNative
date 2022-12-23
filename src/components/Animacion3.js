/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Animated, View} from 'react-native';

const Animacion3 = () => {
  const [animacion] = useState(new Animated.Value(14));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 40, // Valor al que llega
      duration: 1000, // Cantidad de tiempo en llegar
      useNativeDriver: false,
    }).start(); // Iniciar la animacion
  }, []);
  return (
    <View>
      <Animated.Text style={[styles.texto, {fontSize: animacion}]}>
        Animacion 1
      </Animated.Text>
    </View>
  );
};
const styles = StyleSheet.create({
  texto: {
    // fontSize: 30,
    textAlign: 'center',
  },
});
export default Animacion3;
