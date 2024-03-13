import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home.js';
import CreditCardsScreen from  './screens/Cards';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import ChatBot from "./screens/ChatBot";
import React, { useState, useEffect } from 'react';
import {NavigationContainer} from "@react-navigation/native";
import ImageText from "./screens/ImageText";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="CreditCardsScreen" component={CreditCardsScreen} />
              <Stack.Screen name="Chatbot" component={ChatBot} />
              <Stack.Screen name="ImageText" component={ImageText} />
          </Stack.Navigator>
      </NavigationContainer>

  );
}

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import * as Font from 'expo-font';
// import Untitled from './screens/Untitled';
// import ImageText from './screens/ImageText';
// import callGoogleVisionAsync from './components/helperFunctions.js';
// import LoginScreen from "./screens/LogIn.js";
// import RegisterScreen from "./screens/RegisterScreen.js";
// import ChatScreen from "./screens/ChatScreen.js"
//
//
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
//
// function DrawerNavigation() {
//   return (
//     <Drawer.Navigator>
//       <Stack.Screen name="Log In" component={LoginScreen}/>
//       <Drawer.Screen name="Register" component={RegisterScreen} />
//       <Drawer.Screen name="Untitled" component={Untitled} />
//       <Drawer.Screen name="ImageText" component={ImageText} />
//       <Drawer.Screen name="Bot" component={ChatScreen}/>
//     </Drawer.Navigator>
//   );
// }
//
// function App() {
//   // const [isLoadingComplete, setLoadingComplete] = useState(false);
//   //
//   // useEffect(() => {
//   //   async function loadResourcesAsync() {
//   //     await Font.loadAsync({
//   //       "quicksand-500": require("./src/assets/fonts/quicksand-500.ttf"),
//   //       "quicksand-regular": require("./src/assets/fonts/quicksand-regular.ttf"),
//   //       "quicksand-300": require("./src/assets/fonts/quicksand-300.ttf")
//   //     });
//   //     setLoadingComplete(true);
//   //   }
//   //
//   //   loadResourcesAsync();
//   // }, []);
//   //
//   // if (!isLoadingComplete) {
//   //   return null; // Or render a loading indicator
//   // }
//
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
//         <Stack.Screen name="Log In" component={LoginScreen}/>
//         <Drawer.Screen name="Register" component={RegisterScreen} />
//         <Stack.Screen name="Untitled" component={Untitled} />
//         <Stack.Screen name="ImageText" component={ImageText} />
//         <Drawer.Screen name="Bot" component={ChatScreen}/>
//         <Drawer.Screen name="Home" component={Home}/>
//         <Drawer.Screen name="CreditCardsScreen" component={CreditCardsScreen} />
//         <Drawer.Screen name="Chatbot" component={ChatBot} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
//
// export default App;
