/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Animated, Text} from 'react-native';

const Animacion1 = () => {
  const [animacion] = useState(new Animated.Value(0.01));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1, // Valor al que llega
      duration: 1000, // Cantidad de tiempo en llegar
      useNativeDriver: true,
    }).start(); // Iniciar la animacion
  }, []);
  return (
    <Animated.View style={{opacity: animacion}}>
      <Text style={styles.texto}>Animacion 1</Text>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
export default Animacion1;
