import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {

  function getFullName (fname, mname, lname) {
  return fname + "" + mname + "" + lname;

  }
  const pet = "cat";
  return (
   
      <Text>
        {"\n\n\n\n\n\n\n"}
        Hello, I am a studebt in CIS340! {"\n"}
        I have a {pet}!
        My full name is {getFullName("Minahil" , "Qamar", "Chaudhary")} {"\n"}
        </Text>
      
   
  );
}


