import React, { useEffect, useState } from 'react';
import {Text, TextInput, TouchableOpacity, View, Image, Button, FlatList,StyleSheet} from 'react-native';
// import {Formik} from 'formik';
// import * as yup from 'yup';
// import {signInWithEmailAndPassword} from 'firebase/auth';
// import {auth} from '../../config/Firebase';

// import styles from './styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Send login information to server and handle response
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FindMyStaff</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('home')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
            
        <View style={{paddingRight: 10, alignItems: "center", marginTop:10}}>
           <Text style={{color: 'black'}}>OR</Text>
        </View>

        <TouchableOpacity 
          style={[styles.button, styles.signupButton]}
          onPress={() => navigation.navigate('signup')}
        >
          <Text style={[styles.buttonText, styles.signupButtonText]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  formContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#2980b9',
  },
  signupButtonText: {
    color: '#fff',
 


  },
})

export default Login
