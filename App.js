import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import firstpage from './src/screens/Firstpage'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="firstpage">
        <Stack.Screen name="firstpage" component={firstpage} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
