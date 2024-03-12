import {StyleSheet, View} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const HomeBar = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.homeBar}>
            <View style={styles.iconRow}>
                <MaterialIconsIcon name={"robot"}
                                   onPress={() =>
                                       navigation.navigate('Chatbot')
                                   }
                                   style={styles.chatBotIcon}
                />
                <EntypoIcon name="home" onPress={() =>
                            navigation.navigate('Home')
                            }
                            style={styles.homeIcon}/>
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
        fontSize: 30,
        height: 35,
        width: 35
    },
    homeIcon: {
        color: "rgba(255,255,255,1)",
        backgroundColor: "rgba(113,77,145,1)",
        borderRadius: 25,
        paddingLeft: 13,
        paddingTop: 12,
        position: "relative",
        marginLeft: 50,
        top: -15,
        fontSize: 34,
        height: 60,
        width: 59,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    cardIcon: {
        color: "grey",
        fontSize: 28,
        position: "relative",
        height: 30,
        width: 30,
        marginLeft: 50
    },
    iconRow: {
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    }
});

export default HomeBar;