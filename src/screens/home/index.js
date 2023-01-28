import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { MaterialCommunityIcons } from '@expo/vector-icons';


const home = ({ navigation }) => {

const data = [
  {
    key: '1',
    //image: require('./assets/image1.jpg'),
    text: 'Box 1'
  },
  {
    key: '2',
    //image: require('./assets/image2.jpg'),
    text: 'Box 2'
  },
  {
    key: '3',
    //image: require('./assets/image3.jpg'),
    text: 'Box 3'
  },
  {
    key: '4',
    //image: require('./assets/image4.jpg'),
    text: 'Box 4'
  },
];

const Box = ({ image, text }) => {
  return (
    <View style={styles.boxContainer}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const BoxList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Box image={item.image} text={item.text} />}
      numColumns={2}
    />
  );
}

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={BoxList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={BoxList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={BoxList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={BoxList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
})
}
export default home