import React, {useLayoutEffect, useState} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
    ScrollViewComponent, ScrollView
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import entertainement from './../assets/cinema-icon.png'
import education from './../assets/education-icon.png'
import lifestyle from './../assets/hands-holing-icon.png'
import beauty from './../assets/make-up-icon.png'
import transport from './../assets/transport-icon.png'
import food from './../assets/food-icon.png'
import health from './../assets/health-icon.png'
import gift from './../assets/gift-icon.png'
import other from './../assets/confused-icon.png'
import Icon from "react-native-vector-icons/Ionicons";
import HomeBar from "../components/HomeBar";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import AddExpense from "../components/AddExpense";
import AddIncome from "../components/AddIncome";


const AddTransaction = ({navigation}) => {

    const nav= useNavigation();

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        });
    }, []);

    const [showExpenses, setShowExpenses] = useState(true); // State to toggle between Expenses and Income


    return (
        <View style={styles.container}>
            <Icon name={'close'} style={styles.closeIcon}
                  onPress={() =>
                      navigation.navigate('Home')
                  }/>
            <Text style={styles.mainTitle}>Add Transaction</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={showExpenses ? styles.buttonFocused : styles.button}
                    onPress={() => setShowExpenses(true)}
                >
                    <Text style={showExpenses ? styles.buttonTextFocused : styles.buttonText}>Expenses</Text>
                </TouchableOpacity>
                {/* Button to show Income component */}
                <TouchableOpacity
                    style={!showExpenses ? styles.buttonFocused : styles.button}
                    onPress={() => setShowExpenses(false)}
                >
                    <Text style={!showExpenses ? styles.buttonTextFocused : styles.buttonText}>Income</Text>
                </TouchableOpacity>
            </View>
            {showExpenses ? <AddExpense /> : <AddIncome />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        width: '100%',
        backgroundColor: '#fff',
        alignItems: "center",
        paddingTop: 35
    },
    closeIcon:{
      left: 20,
        fontSize: 28,
        position: "absolute",
        top: 44,
        zIndex: 2
    },
   mainTitle:{
        fontWeight: "bold",
       fontSize: 20,
       marginTop: 10,
       width: '100%',
       textAlign: "center",
       backgroundColor: '#fff',
       zIndex: 1,
   },
    buttonsContainer:{
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        padding: 5,
        borderRadius: 20,
        justifyContent: "center",
        marginTop: 15,
        backgroundColor: '#f0f0f0',
        width: '85%',
        marginRight: 10,
        alignItems: "center"
    },
    button:{
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    buttonFocused:{
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        borderRadius: 15,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    buttonText:{
        color: "darkgray",
        fontSize: 15,
        fontWeight: "bold",
    },
    buttonTextFocused:{
        color: "rgba(113,77,145,1)",
        fontSize: 15,
    }
});

export default AddTransaction;
