import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>賴光韜</Text>
      <Text style={styles.num}>110619017</Text>
      <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  font: {
    fontSize: 40,
    color: 'green'
  },
  num:{
    fontSize: 20,
  }
});
