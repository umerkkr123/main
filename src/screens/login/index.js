import React, { useEffect, useState } from 'react';
import {Text, TextInput, TouchableOpacity, View, Image, Button, FlatList} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/Firebase';

import styles from './styles';

const Login = ({navigation}) => {
  let logo = require('../../assets/images/Logo1.png');
  
  return (
    <View
      style={{
        backgroundColor: 'lightblue',
        paddingHorizontal: 40,
        paddingTop: 30,
        height: '100%',
        alignContent: 'center',
      }}>
      { <Image source={logo} /> }

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          navigation.navigate('home')
        }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => {
            return (
            <React.Fragment>
              <View style={{marginTop: 20}}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  marginTop: 40,
                  marginBottom: 5,
                  lineHeight: 25,
                  fontFamily: 'regular',
                }}>
                Enter your Username
              </Text>

              <TextInput
                style={styles.emailInput}
                autoCapitalize="none"
                autoCorrect={false}
                name="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
            </View>

            <View style={{marginTop: 20}}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  marginTop: 5,
                  marginBottom: 5,
                  lineHeight: 25,
                  fontFamily: 'regular',
                }}>
                Enter your password
              </Text>
              <TextInput
                style={styles.passwordInput}
                autoCapitalize="none"
                autoCorrect={false}
                name="password"
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.loginButton}>
              <Text style={{fontSize: 15, color: 'white'}}> Login </Text>
            </TouchableOpacity>
          </React.Fragment>
     )}}
      </Formik>
      <View style={{paddingRight: 10, marginLeft: 130}}>
        <Text style={{color: 'white'}}>OR</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('signup')}
        style={styles.signupButton}>
        <Text style={styles.signupText}>
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
