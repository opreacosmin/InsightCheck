import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home.js';
import CreditCardsScreen from  './screens/Cards';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import React from "react";
import ChatBot from "./screens/ChatBot";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="CreditCardsScreen" component={CreditCardsScreen} />
              <Stack.Screen name="Chatbot" component={ChatBot} />
          </Stack.Navigator>
      </NavigationContainer>

  );
}
