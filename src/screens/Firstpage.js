import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to FindMyStaff</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('login')}
      >
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4772ff'
  },
  welcomeText: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: "black",
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}

export default Welcome;
