import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

const csuLogo = {
  uri: "https://raw.githubusercontent.com/ChaudharyMinahil/CIS340/master/images/rams.png",
  width: 80,
  height: 80
}


  return (
    <View style={styles.container}>
      
      <Image 
      style = {styles.localCSULogo}
      source = {require('./assets/logo.png')}
      />

      <Image

      style = {styles.urlCSULogo}
      source = {{
        uri: "https://raw.githubusercontent.com/ChaudharyMinahil/CIS340/master/images/logo.png"

      }}
  />
    <Image 
    style ={styles.stretchLogo}
    source = {csuLogo} /> 
     </View>
  );
}

const styles = StyleSheet.create({
  container: {

   paddingtop: 50,
  },
  localCSULogo: {
    width: 55,
    height: 65,

  },

  urlCSULogo: {
    width: 50,
    height: 50

  },
  stretch: {
    height: 80,
    resizeMode:  'center',
  
  }
});