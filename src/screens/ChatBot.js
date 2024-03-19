import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Keyboard,
    FlatList,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
    Button,
    TextComponent
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import {Bubble, Composer, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat'
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import callGoogleVisionAsync from './../components/helperFunctions.js';
import axios from 'axios';
import { dialogflowConfig } from './../env';
import { Dialogflow_V2 } from 'react-native-dialogflow';


const ChatBot = ({navigation}) => {

    const nav= useNavigation();

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        (async () => {
            if (Constants.platform?.ios) {
                const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const [backgroundVisibility, setBackgroundVisibility] = useState(true);
    const [messages, setMessages] = useState([]);
    const [image, setImage] = useState(null);
    const [imageText, setImageText] = useState(null);
    const [inputText, setInputText] = useState(null);
    const [imagePreview, setImagePreview] = useState(false);

    const handleImagePreview = (state) => {
        setImagePreview(state);
        if (state === false) {
            setImage(null);
            setImageText(null);
        }
    }

    // Function to handle sending messages
    const handleSend = () => {
        //eliminate greeting background
        setBackgroundVisibility(false);

        if (image && imageText) {
            const combinedText = inputText + ": " + imageText;
            sendUserMessage(combinedText, image);
            Dialogflow_V2.requestQuery(
                combinedText,
                result => sendBotResponse(result),
                error => {
                    Toast.show({
                        type: 'error',
                        text1: error.message,
                        text2: "Try again",
                    });
                }
            );
        } else {
            sendUserMessage(inputText, null);
            Dialogflow_V2.requestQuery(
                inputText,
                result => sendBotResponse(result),
                error => {
                    Toast.show({
                        type: 'error',
                        text1: error.message,
                        text2: "Try again",
                    });
                }
            );
        }

    };

    const sendUserMessage = (text, image) => {
        const newMessage = {
            _id: Math.round(Math.random() * 100000),
            text: text,
            createdAt: new Date(),
            user: {
                _id: 1,
                name: 'User',
            },
            image: image,
        };
        // Add the user's message to the chat
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessage)
        );

        Keyboard.dismiss();
        handleImagePreview(false);

    }

    const sendBotResponse = (result) => {
        console.log(result);

        if (result && result.queryResult && result.queryResult.fulfillmentMessages && result.queryResult.fulfillmentMessages.length > 0) {
            let text = result.queryResult.fulfillmentMessages[0].text.text[0];
            // console.log(text)
            const botMessage = {
                _id: Math.round(Math.random() * 100000),
                text: text,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Bot',
                },
            };

            // Add the automated response to the chat
            setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, [botMessage])
            );
        } else {
            sendBotResponse("There was an error with processing your message, please try again!")
        }
    }

    // Function to open the camera roll
    const openCamera = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            handleImagePreview(true);
            const responseData = await callGoogleVisionAsync(result.assets[0].base64);
            if (responseData.text) {
                setImageText(responseData.text.replace(/(\r\n|\n|\r)/gm, ' '));
            } else {
                Toast.show({
                    type: 'error',
                    text1: "Text not found in the image.",
                    text2: 'Try again with another image!'
                });
            }
        }
    };

    // Function to handle text input changes
    const handleInputTextChange = (text) => {
        // Update the input text state
        setInputText(text);
        console.log(inputText)
    };

    // Handle sending messages after state update
    // useEffect(() => {
    //
    //     if (image && imageText) {
    //         console.log("img text " + imageText);
    //         setFinalText(inputText + imageText);
    //         console.log("1st final text: " + finalText);
    //
    //         // // setFinalText(imageText + " :) ")
    //         // let processedMessage = {
    //         //     _id: Math.round(Math.random() * 100000),
    //         //     text: finalText, // The text message
    //         //     image: image, // The image URI or base64 data
    //         //     createdAt: new Date(),
    //         //     user: {
    //         //         _id: 1, // Assuming the current user is sending the message
    //         //     },
    //         // };
    //         // handleSend([processedMessage]);
    //     }
    // }, [image, imageText, finalText, handleSend]);


    // Custom function to render the avatar for left messages
    const renderAvatar = (props) => {
        // Check if the message belongs to the current user (left messages)
        if (props.currentMessage.user._id !== props.user._id) {
            // Return a custom avatar component for left messages
            return (
                <Image
                    source={require("../assets/botIcon.png")} // Provide the source for the custom avatar
                    style={{ width: 50, height: 50, borderRadius: 20, top: -25, left: -4 }} // Customize the style of the avatar
                />
            );
        }

        // Return null for right messages (default avatar will be used)
        return null;
    };

    // Camera button component
    const renderCustomActions = () => (
        <TouchableOpacity onPress={openCamera}>
            <EvilIcon name={"camera"} style={styles.cameraIcon}/>
        </TouchableOpacity>
    );


    // Custom text input composer component
    const renderCustomComposer = (props) => (
        <Composer
            {...props}
            placeholder="Type a message..."
            textInputStyle={{
                position: "relative",
                paddingLeft: 15,
                borderRadius: 20,
                marginTop: 10,
                left: -10,
                maxHeight: 100,
                color: "grey",
                overflow: "scroll",
                backgroundColor: "white" }}
        />
    );

    const CustomChatFooter = () => {
        return (
            <>
                {imagePreview && (
                    <View style={styles.footerContainer}>
                        <View style={styles.imagePreviewContainer}>
                            <Image source={{ uri: image }} style={styles.imagePreview}/>
                            <EvilIcon name={'close-o'} style={styles.closeImage}
                            onPress={() => handleImagePreview(false)}/>
                        </View>
                    </View>
                )}
            </>
        );
    };


    return (
        <View style={styles.chatContainer}>
            <MaterialIconsIcon name={'arrow-back'}
                               onPress={() =>
                                   navigation.navigate('Home')
                               }
                               style={styles.backIcon}/>

            {
                backgroundVisibility && (
                <View style={styles.chatGreeting}>
                    <Image
                        source={require("../assets/botIcon.png")}
                        resizeMode="contain"
                        style={styles.botIcon}
                    />
                    <Text style={styles.greetingText}>Hello, how may I assist you today?</Text>
                </View>
            )}

            <GiftedChat
                messages={messages}
                onSend={messages => handleSend(messages)}
                user={{
                    _id: 1,
                }}
                renderChatFooter={() => <CustomChatFooter />}

                onInputTextChanged={handleInputTextChange}
                alwaysShowSend={true}
                renderAvatar={renderAvatar}

                renderBubble={(props) => (
                    <Bubble
                        {...props}
                        wrapperStyle={bubbleStyle}
                    />
                )}

                // renderChatFooter={(props) =>
                //     <View {...props} style={styles.chatBottom}/>
                // }
                renderInputToolbar={(props) =>
                    <InputToolbar {...props}
                                  containerStyle={{
                                      minHeight: 40,
                                      maxHeight: 130,
                                      display: "flex",
                                      height: "auto",
                                      borderTopColor: "rgba(113,77,145,1)",
                                      backgroundColor: "rgba(113,77,145,1)",
                                      borderTopRightRadius: 30,
                                      borderTopLeftRadius: 30,
                                      padding: 15,
                                      overflow: "hidden",
                                      paddingTop: 5
                                  }}
                    />
                }

                renderComposer={renderCustomComposer}

                renderActions={renderCustomActions}

                renderSend={(props) =>
                    <Send {...props} >
                            <Icon name={'send'} size={25} color={"#fff"} style={styles.sendIcon} />
                    </Send>
                }
            />
        </View>
    );
};


const bubbleStyle = {
    left: {
        backgroundColor: "#eee",
        borderRadius: 20,
        padding: 5,
        marginBottom: 27,
        color: "rgba(113,77,145,1)",
        marginHorizontal: -10
    },
    right: {
        backgroundColor: "rgba(113,77,145,1)",
        borderRadius: 20,
        padding: 5,
        marginBottom: 25,
        maxWidth: '80%',
        fontSize: 16,
        color: "#fff",
        alignSelf: "flex-end"
    },
};

const styles = StyleSheet.create({
    chatContainer: {
        position: "relative",
        paddingTop: 80,
        height: "100%",
        width: "100%"
    },
    chatGreeting: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    greetingText: {
        fontSize: 22,
        width: "80%",
        textAlign: "center",
        color: "rgba(113,77,145,1)",
    },
    botIcon: {
      width: 150,
      height: 150
    },
    footerContainer: {
        position: "relative",
        paddingBottom: 30,
        paddingTop: 5,
        justifyContent: "left",
        alignItems: "left",
        width: "100%",
        backgroundColor: "rgba(113,77,145,1)",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    imagePreviewContainer:{
        width: 100,
        height: 80,
        left: 70,
        display: "flex",
        flexDirection: "row"
    },
    imagePreview: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    },
    closeImage:{
      position: "relative",
        top:0,
        left: 0,
        fontSize: 34,
        color: "#fff"
    },
    backIcon: {
        position: "absolute",
        left: 20,
        top: 40,
        backgroundColor: "#eee",
        fontSize: 30,
        padding:10,
        color: "rgba(113,77,145,1)",
        borderRadius: 10
    },
    cameraIcon: {
        color: "#fff",
        fontSize: 50,

        left: -5
    },
    sendIcon: {
        top: 5,
        right: 5
    }
});

export default ChatBot;
