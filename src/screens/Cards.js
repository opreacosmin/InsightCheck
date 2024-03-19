import React, {useLayoutEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import visa from './../assets/visa.png'
import mastercard from './../assets/mastercard.png'
import bcr from './../assets/bcr.png'
import revolut from './../assets/revolut.png'
import bcrbg from './../assets/bcr-bck.jpeg'
import revolutbg from './../assets/revolut-bck.jpg'
import HomeBar from "../components/HomeBar";

const CreditCardsScreen = ({navigation}) => {

    const nav= useNavigation();

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        });
    }, []);

    // Sample data for virtual credit cards
    const virtualCardsData = [
        { id: '1', cardNumber: '**** 3456', type: "Visa", bank: "BCR" },
        { id: '2', cardNumber: '*** 7654', type: "Mastercard", bank: "Revolut" },
        // Add more virtual cards as needed
    ];

    // Render item for virtual credit cards
    const renderVirtualCard = ({ item }) => (
        <View style={styles.cardContainer}>
            <Text style={styles.cardNumber}>{item.cardNumber}</Text>
            {item.type === 'Visa' && <Image source={visa} style={styles.typeImage} />}
            {item.type === 'Mastercard' && <Image source={mastercard} style={styles.typeImage} />}
            {item.bank === 'BCR' && <Image source={bcr} style={styles.bankImage} />}
            {item.bank === 'BCR' && <Image source={bcrbg} style={styles.bgImage} />}
            {item.bank === 'Revolut' && <Image source={revolut} style={styles.bankImage} />}
            {item.bank === 'Revolut' && <Image source={revolutbg} style={styles.bgImage} />}
        </View>
    );

    const transactionsData = [
        { id: '1', type: 'expense', amount: "29", date: "21.03.2024", title: "Food"},
        { id: '2', type: 'expense', amount: "46", date: "20.03.2024", title: "Entertainement"},
        { id: '3', type: 'expense', amount: "210", date: "18.03.2024", title: "Clothing"},
        { id: '4', type: 'income', amount: "2300", date: "12.03.2024", title: "Salary"}
    ];

    const renderTransactions = ({ item }) => (
        <View style={styles.transaction}>
            <View style={styles.transactionLeft}>
                <View style={styles.transactionTextContainer}>
                    <Text style={styles.transactionTitle}>{item.title}</Text>
                    <Text style={styles.transactionDate}>{item.date}</Text>
                </View>
            </View>
            {item.type === 'expense' ?
                <Text style={styles.amountRed}>- {item.amount} RON</Text>
                :
                <Text style={styles.amountGreen}>+ {item.amount} RON</Text>
            }
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={virtualCardsData}
                renderItem={renderVirtualCard}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <View style={styles.transactionsContainer}>
                <Text style={styles.transactionsTitle}>Transactions history</Text>
                <FlatList data={transactionsData} renderItem={renderTransactions}/>
            </View>
            <HomeBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: "relative",
        paddingTop: 50,
        height: "100%"
    },
    cardContainer: {
        backgroundColor: 'blue',
        borderRadius: 10,
        margin: 10,
        width: 300,
        height: 200,
        alignItems: 'center',
    },
    cardNumber: {
        position: "absolute",
        color: 'white',
        bottom: 25,
        left: 30,
        fontSize: 15,
    },
    typeImage: {
        width: 80,
        height: 50,
        marginBottom: 10,
        position: "absolute",
        objectFit: "contain",
        right: 10,
        bottom: 10,
    },
    bankImage: {
        width: "auto",
        minWidth: 120,
        height: "auto",
        minHeight: 50,
        marginBottom: 10,
        position: "absolute",
        left: 15,
        top: 15,
    },
    bgImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: -1,
        borderRadius: 10,
    },
    transactionsContainer: {
        width: "100%",
        height: "70%"
    },
    transactionsTitle:{
        fontSize: 19,
        marginLeft: 15,
    },
    transaction: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        height: 80,
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center"
    },
    transactionTitle:{
      fontSize: 16,
    },
    transactionDate: {
        color: "grey",
        fontSize: 13
    },
    amountRed: {
        fontSize: 16,
        color: "red",
    },
    amountGreen: {
        fontSize: 16,
        color: "green"
    }

});

export default CreditCardsScreen;
