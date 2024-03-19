import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import {Dialogflow_V2} from "react-native-dialogflow";
import {dialogflowConfig} from "./env";
// import Constants from "expo-constants";
// import * as Permissions from "expo-permissions";
import AuthContextProvider, {AuthContext, useAuth} from "./context/AuthContext.js";
import StackNavigator from "./components/StackNavigator";


const App = () => {

    const [initialRouteName, setInitialRouteName] = useState('Home'); // Default to Login screen
    // const { state } = useAuth();

    useEffect(() => {
        // // Update initial route name based on authentication status
        // if (state.isAuthenticated) {
        //     setInitialRouteName('Home');
        // }

        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id
        );

    }, []);


  return (
          <NavigationContainer>
              <AuthContextProvider>
                  <StackNavigator/>
                  <Toast/>
              </AuthContextProvider>
          </NavigationContainer>
  );
}

export default App;
