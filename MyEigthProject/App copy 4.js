import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker' //import


export default function App () {

  let openImagePickerAsync = async () => {

    let permissionresult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionresult.granted === false){

      alert ("The permission is required");
      return;
    }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
  }

  //end of the code
  
  return(
    <View style={styles.container}>
      <Image source  = {{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/imges/logo.png'}}
      style = {styles.logo} />
      <Text style = {styles.insts}>
      Press the button below to select an image on your phone!
      </Text>


<TouchableOpacity style = {styles.button} onPress ={() => alert ('You have not selected an image yet')}>

  <Text style = {styles.buttonText}>Pick an Image</Text>

</TouchableOpacity>
</View>
      );
      }

      
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
      backgroundColor: "#778899",
      
    },
    
    button: {
      backgroundColor: "#778899",
      padding: 20,
      borderRadius: 5

    },

    insts: {
     fontSize: 18,
     color: "#87CEFA", 
     marginHorizontal: 15,
     marginBottom: 10,

    },

    logo: {
      width: 310,
      height: 300,
      marginBottom: 20,

    },

    buttonText: {
      fontSize: 20,
      color: "#fff"
    }
  });