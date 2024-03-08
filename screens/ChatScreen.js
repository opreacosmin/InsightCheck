import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

    const sendMessage = () => {
        if (inputText.trim() === '') return;
        setMessages(prevMessages => [...prevMessages, { text: inputText, fromUser: true }]);
        setInputText('');
    };

    const sendPicture = () => {
        navigation.navigate('ImageText', { onTextExtracted: handleTextExtracted });
    };

    const handleTextExtracted = (text) => {
        setMessages(prevMessages => [...prevMessages, { text: text, fromUser: true }]);
    };

    const renderMessage = ({ item }) => {
        if (item.fromUser) {
            return (
                <View style={styles.userMessageContainer}>
                    <Text style={styles.userMessage}>{item.text}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.botMessageContainer}>
                    <Text style={styles.botMessage}>{item.text}</Text>
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.messageList}
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.pictureButton} onPress={sendPicture}>
                    <Text style={styles.buttonText}>Send Picture</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    onChangeText={text => setInputText(text)}
                    value={inputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    messageList: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    sendButton: {
        width: 80,
        height: 40,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    pictureButton: {
        width: 120,
        height: 40,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 10,
    },
    userMessageContainer: {
        maxWidth: '80%',
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    botMessageContainer: {
        maxWidth: '80%',
        alignSelf: 'flex-start',
        backgroundColor: '#E5E5EA',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    userMessage: {
        color: '#000000',
    },
    botMessage: {
        color: '#000000',
    },
});

export default ChatScreen;
