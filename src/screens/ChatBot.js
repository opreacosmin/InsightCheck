import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {View, Text, TextInput, Keyboard, FlatList, StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import MaterialIconsIcon2 from "react-native-vector-icons/MaterialCommunityIcons";
import {Bubble, Composer, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat'


const ChatBot = ({navigation}) => {

    const nav= useNavigation();

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        });
    }, []);

    const [backgroundVisibility, setBackgroundVisibility] = useState(true);
    const flatListRef = useRef();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);


    // Function to handle sending messages
    const handleSend = (newMessages) => {

        //eliminate greeting background
        setBackgroundVisibility(false);

        // Add the user's message to the chat
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages)
        );

        Keyboard.dismiss();

        // Check if the user's message is not an automated response to avoid infinite loop
        if (newMessages.length && newMessages[0].text !== "Automated Response") {
            // Simulate an automated response with delay
            setTimeout(() => {
                const automatedResponse = {
                    _id: Math.round(Math.random() * 1000000),
                    text: "Automated Response",
                    createdAt: new Date(),
                    user: {
                        _id: 2, // You can use a different user ID for the bot
                        name: 'Bot', // Optionally set the bot's name
                    },
                };

                // Add the automated response to the chat
                setMessages((previousMessages) =>
                    GiftedChat.append(previousMessages, [automatedResponse])
                );
            }, 2000);
        }
    };

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

    // Custom action button component
    const renderCustomActions = (props) => (
        <TouchableOpacity onPress={openCamera}>
                <EvilIcon name={"camera"} style={styles.cameraIcon}/>
        </TouchableOpacity>
    );

    // Function to handle the custom action
    const openCamera = () => {
        // Implement custom action logic here
        console.log("Custom action pressed");
    };

    // Custom text input composer component
    const renderCustomComposer = (props) => (
        <Composer
            {...props}
            placeholder="Type a message..."
            textInputStyle={{
                paddingLeft: 15,
                borderRadius: 20,
                top: -13,
                left: -10,
                color: "grey",
                backgroundColor: "white" }}
        />
    );


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
                onSend={handleSend}
                user={{
                    _id: 1,
                }}

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
                                      height: 65,
                                      backgroundColor: "rgba(113,77,145,1)",
                                      borderTopRightRadius: 30,
                                      borderTopLeftRadius: 30,
                                      padding: 15,
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
        marginBottom: 22,
        color: "rgba(113,77,145,1)",
        marginHorizontal: -10
    },
    right: {
        backgroundColor: "rgba(113,77,145,1)",
        borderRadius: 20,
        padding: 5,
        marginTop: -10,
        marginBottom: 15,
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
        top: -15,
        left: -5
    },
    sendIcon: {
        top: -5,
        right: 5
    }
});

export default ChatBot;
