/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Animated, View} from 'react-native';

const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, // Valor al que llega
      duration: 500, // Cantidad de tiempo en llegar
      useNativeDriver: true,
    }).start(); // Iniciar la animacion
  }, []);
  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  const estiloAnimacion = {
    transform: [{rotate: interpolacion}],
  };
  return (
    <View>
      <Animated.View style={[styles.caja, estiloAnimacion]}></Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});
export default Animacion4;
