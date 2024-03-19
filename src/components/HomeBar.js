import {StyleSheet, View} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const HomeBar = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.homeBar}>
            <View style={styles.iconRow}>
                <EntypoIcon name="home" onPress={() =>
                                navigation.navigate('Home')
                            }
                            style={styles.homeIcon}/>
                <MaterialIconsIcon name={"robot"}
                                   onPress={() =>
                                       navigation.navigate('Chatbot')
                                   }
                                   style={styles.chatBotIcon}
                />
                <MaterialIconsIcon name={'plus'} style={styles.addIcon}
                                   onPress={() =>
                                       navigation.navigate('AddTransaction')
                                   }/>
                <Ionicons name={'stats-chart'}
                          style={styles.statsIcon}/>
                <EntypoIcon name="credit-card"
                            onPress={() =>
                                navigation.navigate('CreditCardsScreen')
                            }
                            style={styles.cardIcon}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homeBar: {
        position: "absolute",
        width: "100%",
        height: 55,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "#fff",
        bottom: 0,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity:  0.25,
        shadowRadius: 20.00,
        elevation: 24
    },
    chatBotIcon: {
        position: "relative",
        color: "grey",
        fontSize: 32,
        marginLeft: 10,
        height: 35,
        width: 35
    },
    statsIcon: {
        position: "relative",
        color: "grey",
        fontSize: 29,
        marginLeft: 10,
        top: 2,
        height: 35,
        width: 35
    },
    addIcon: {
        color: "rgba(255,255,255,1)",
        backgroundColor: "rgba(113,77,145,1)",
        borderRadius: 23,
        paddingLeft: 13,
        paddingTop: 11,
        position: "relative",
        top: -22,
        fontSize: 33,
        height: 56,
        width: 58,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    homeIcon: {
        color: "grey",
        fontSize: 29,
        position: "relative",
        height: 30,
        width: 30,
        marginLeft: 10
    },
    cardIcon: {
        color: "grey",
        fontSize: 30,
        position: "relative",
        height: 30,
        width: 32,
        marginLeft: 10,
        top: 3
    },
    iconRow: {
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
    }
});

export default HomeBar;