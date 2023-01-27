import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/Firebase';


function Signup({ navigation }) {
  return (
    <View style={{ backgroundColor:'#071342',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text  style={{
          fontWeight: 'Bold',
          color: 'white',
          fontSize: 35,
          alignItems: 'flex-start',
          backgroundColor: 'red',
          borderRadius: 10,
        }}>Add profession</Text>
    </View>
  );
}

export default Signup