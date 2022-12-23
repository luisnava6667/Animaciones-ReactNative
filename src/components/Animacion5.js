import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));
  const precionarBoton = () => {
    Animated.spring(animacion, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };
  const soltarBoton = () => {
    Animated.spring(animacion, {
      toValue: 1,
      friction: 4, // Friccion al soltar mas bajo mayor rebote
      tension: 30, // Tension al soltar
      useNativeDriver: true,
    }).start();
  };
  const estiloAnimacion = {
    transform: [{scale: animacion}],
  };
  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={() => precionarBoton()}
        onPressOut={() => soltarBoton()}>
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 28,
  },
});
export default Animacion5;
