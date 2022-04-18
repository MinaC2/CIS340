import React from 'react';
import { Text, Image, View } from 'react-native';

export default function CatApp() {

  let pic = {uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/2dog.png'}
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <Image source = {pic}
      style =  { { 
        width: 200, hight: 200
      }}
      />
      <Text>Hello, This is my Dog </Text>

    </View>
  );
}


