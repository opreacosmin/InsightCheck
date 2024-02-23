import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Font from 'expo-font';
import Untitled from './src/screens/Untitled';
import ImageText from './src/screens/ImageText';
import callGoogleVisionAsync from './src/components/helperFunctions.js';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Untitled" component={Untitled} />
      <Drawer.Screen name="ImageText" component={ImageText} />
    </Drawer.Navigator>
  );
}

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAsync() {
      await Font.loadAsync({
        "quicksand-500": require("./src/assets/fonts/quicksand-500.ttf"),
        "quicksand-regular": require("./src/assets/fonts/quicksand-regular.ttf"),
        "quicksand-300": require("./src/assets/fonts/quicksand-300.ttf")
      });
      setLoadingComplete(true);
    }

    loadResourcesAsync();
  }, []);

  if (!isLoadingComplete) {
    return null; // Or render a loading indicator
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="Untitled" component={Untitled} />
        <Stack.Screen name="ImageText" component={ImageText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;