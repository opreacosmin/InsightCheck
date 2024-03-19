import {useNavigation} from "@react-navigation/native";
import React, {useLayoutEffect, useState} from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import education from "../assets/education-icon.png";
import transport from "../assets/transport-icon.png";
import beauty from "../assets/make-up-icon.png";
import lifestyle from "../assets/hands-holing-icon.png";
import health from "../assets/health-icon.png";
import entertainement from "../assets/cinema-icon.png";
import food from "../assets/food-icon.png";
import gift from "../assets/gift-icon.png";
import other from "../assets/confused-icon.png";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddIncome = () => {
    const [date, setDate] = useState(null)
    const [showPicker, setShowPicker] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(false);
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShowPicker(true);
    };


    return (
        <View style={styles.container}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Title :</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Raiffeisen Bank montly salaray'}/>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Category :</Text>
                <View style={styles.categoriesContainer}>
                    <TouchableOpacity style={styles.category}>
                        <Image source={education}
                               style={styles.categoryIcon}/>
                        <Text>Grant</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Image source={transport}
                               style={styles.categoryIcon}/>
                        <Text>Salary</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Image source={health}
                               style={styles.categoryIcon}/>
                        <Text>Pension</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Image source={gift}
                               style={styles.categoryIcon}/>
                        <Text>Transfer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Image source={other}
                               style={styles.categoryIcon}/>
                        <Text>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.sectionHalfContainer}>
                <View style={styles.sectionHalf}>
                    <Text style={styles.sectionTitle}>Amount :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'$0'}/>
                </View>
                <View style={styles.sectionHalf}>
                    <Text style={styles.sectionTitle}>Date :</Text>
                    <TouchableOpacity onPress={showDatepicker}
                                      style={styles.dateButton}>
                        <Text style={styles.dateButtonText}>{date ? date.toLocaleDateString() : "Enter Date"}</Text>
                    </TouchableOpacity>
                    {showPicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date || new Date()}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account :</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'will be a select here'}/>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Note :</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Details'}/>
            </View>
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        paddingBottom: 70,
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        overflow: 'scroll', // or 'auto'
    },
    sectionHalfContainer:{
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    sectionHalf:{
        width: "48.7%",
        display: "flex",
        flexDirection: "column",
        marginTop: 5,
        position: "relative"
    },
    section:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: 5,
        position: "relative"
    },
    sectionTitle:{
        fontSize: 16,
        marginLeft: 5,
        fontWeight: "bold"
    },
    input: {
        position: "relative",
        backgroundColor: '#f8f8f8',
        width: "95%",
        height: 40,
        marginVertical: 8,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#dbdcdc",
        paddingHorizontal: 15,
    },
    categoriesContainer:{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 5
    },
    category:{
        position: "relative",
        margin: 5,
        width: "45%",
        height: 45,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#dbdcdc",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    categoryIcon:{
        width: 35,
        height:33,
        marginHorizontal: 5,
        objectFit: "scale-down"
    },
    dateButton:{
        backgroundColor: '#f8f8f8',
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "95%",
        height: 40,
        marginVertical: 8,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#dbdcdc",
        paddingHorizontal: 10,
    },
    dateButtonText:{
        marginBottom: 5,
        color: "darkgray"
    },
    saveButton:{
        width: "40%",
        backgroundColor: "rgba(113,77,145,1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#dbdcdc",
        paddingHorizontal: 10,
    },
    saveButtonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }
});

export default AddIncome;