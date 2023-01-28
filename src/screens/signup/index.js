import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const signup = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);

  const handlePhoneNumberChange = value => {
    setPhoneNumber(value);
  };

  const handleSendOTP = () => {
    // Logic to send OTP to the entered phone number
    setIsOTPSent(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter your phone number</Text>
      <View style={styles.phoneInputContainer}>
        <TextInput
          style={styles.phoneInput}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          keyboardType="phone-pad"
          placeholder="Phone number"
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity style={styles.sendOTPButton} onPress={handleSendOTP}>
          <Text style={styles.sendOTPButtonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
      {isOTPSent && (
        <View style={styles.otpContainer}>
          <Text style={styles.otpText}>
            We have sent an OTP to {phoneNumber}. Please enter the OTP below.
          </Text>
          <TextInput
            style={styles.otpInput}
            keyboardType="numeric"
            placeholder="OTP"
            placeholderTextColor="#A9A9A9"
          />
          <TouchableOpacity style={styles.verifyOTPButton}>
            <Text style={styles.verifyOTPButtonText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  phoneInput: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  sendOTPButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#00B0FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendOTPButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default signup

