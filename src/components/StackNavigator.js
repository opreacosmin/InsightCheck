import Home from "../screens/Home";
import CreditCardsScreen from "../screens/Cards";
import ChatBot from "../screens/ChatBot";
import AccountScreen from "../screens/AccountScreen";
import Login from "../screens/Login";
import React, {useEffect, useState} from "react";
import {useAuthContext} from "../context/AuthContext";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import Register from "../screens/Register";
import AddTransaction from "../screens/AddTransaction";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

    const [initialRouteName, setInitialRouteName] = useState('Login'); // Default to Login screen
    const { isAuthenticated } = useAuthContext();


    // useEffect(() => {
    //     if (isAuthenticated) {
    //         setInitialRouteName('Home');
    //     }
    // }, [isAuthenticated]);


    return (
        <>
            {isAuthenticated ? (
                <Stack.Navigator initialRouteName={'Home'}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="CreditCardsScreen" component={CreditCardsScreen} />
                    <Stack.Screen name="Chatbot" component={ChatBot} />
                    <Stack.Screen name="Account" component={AccountScreen} />
                    <Stack.Screen name="AddTransaction" component={AddTransaction} />

                </Stack.Navigator>
            ) : (
                <Stack.Navigator initialRouteName={"WelcomeScreen"}>
                    <Stack.Screen name="WelcomeSreen" component={WelcomeScreen} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </Stack.Navigator>
            )}
        </>
    )
}