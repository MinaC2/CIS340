import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

const csuLogo = {
  uri: "https://raw.githubusercontent.com/ChaudharyMinahil/CIS340/master/images/logo.png",
}


  return (
    <View style={styles.container}>
      <ImageBackground source = {csuLogo}  style = {styles.image}>

      <Text style = {styles.texr}>CSU Logo</Text>
     
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   flexDirection: 'row',
  },

  Image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"

  },

  text: {
    color:  "red",
    fontSize: 50,
    fontWeight: 'bold',

  }
  
});