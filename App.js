import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [isCont, setIsCont] = useState(0);

  function subtracao() {
    if (isCont >= 1) {
      setIsCont(isCont - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: '25%', fontSize: 30 }}>
        Contador de Pessoas
      </Text>

      <View style={styles.boxView}>
        <Text style={{ fontSize: 80, color: 'red' }}>{isCont}</Text>
      </View>

      <Pressable
        style={[styles.btnMais, styles.btn]}
        onPress={() => {
          setIsCont(isCont + 1);
        }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          Somar
        </Text>
      </Pressable>
      <Pressable style={[styles.btnMenos, styles.btn]} onPress={subtracao}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          Diminuir
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxView: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  btnMais: {
    backgroundColor: 'green',
  },
  btnMenos: {
    backgroundColor: 'red',
  },
});
