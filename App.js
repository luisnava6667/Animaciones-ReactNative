import React from 'react';
import {StyleSheet, View} from 'react-native';
// import Animacion1 from './src/components/Animacion1';
// import Animacion2 from './src/components/Animacion2';
// import Animacion3 from './src/components/Animacion3';
// import Animacion4 from './src/components/Animacion4';
// import Animacion5 from './src/components/Animacion5';
// import Animacion6 from './src/components/Animacion6';
import Animacion7 from './src/components/Animacion7';

const App = () => {
  return (
    <>
      <View style={styles.contenido}>
        <Animacion7 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
  },
});

export default App;
