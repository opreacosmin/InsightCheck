import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import background from './../assets/blob-scene-haikei.png'
import LottieView from 'lottie-react-native';

const WelcomeScreen = ({navigation}) =>  {

    const nav = useNavigation();

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        });
    }, []);

    const handleRegisterPress = () => {
        navigation.navigate('Register');
    };

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Image source={background}
                   style={styles.backgroundImage}/>
            <LottieView
                source={require('./../assets/Animation - 1712014501282.json')}
                autoPlay
                loop
                style={styles.gif}
            />
            <View style={styles.container2}>
                <Text style={styles.title}>Insight Check</Text>
                <Text style={styles.subtitle}>Manage your finances</Text>
                <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(113,77,145,1)",
        display: "flex",
        flexDirection: "column"
    },
    backgroundImage:{
        width: '100%',
        height: '100%',
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
    },
    gif:{
      position: "absolute",
      right: 0,
      top: 150,
        width: 240,
        height: 250
    },
    container2:{
      position: "absolute",
      left: 40,
      bottom: 150
    },
    title:{
        textAlign: "left",
        fontSize: 33,
        fontWeight: "bold",
        marginBottom: 5,
        color: 'white'
    },
    subtitle:{
        textAlign: "left",
        marginBottom: 50,
        fontWeight: "100" ,
        fontSize: 19,
        color: 'white'
    },
    registerButton:{
        backgroundColor: "#fff",
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 20,
        fontSize: 20,
    },
    registerText:{
        color: "rgba(113,77,145,1)",
        fontWeight: "bold",
        fontSize: 17
    },
    loginButton: {
        backgroundColor: 'transparent',
        width: 150,
        height: 50,
        position: "relative",
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 30,
        marginTop: 20,
    },
    loginText:{
        color:'#fff',
        fontWeight: "bold",
        fontSize: 17
    }

})

export default WelcomeScreen;