import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.yellow} > Just Yellow Text!</Text>
      <Text style = {styles.largeGreen} > This is Big Green!</Text>
      <Text style = {[styles.largeGreen, styles.yellow,]}> Bug Green Text, then Yellow Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 60,
  },
  largeGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,

  },
  yelloe: {
    color: 'yellow',
    fontSize: 20,

  },
});
