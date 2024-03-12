import React, {Component, useLayoutEffect, useState} from "react";
import {StyleSheet, View, Text, Image, ImageComponent, Pressable, Button} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import HomeBar from "../components/HomeBar";
import close from "react-native-vector-icons/Feather";


function TouchableOpacity(props) {
    return null;
}

const Home = ({navigation}) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const nav = useNavigation();

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        });
    }, []);


    return (
        <View style={styles.mainContainer}>
            <View style={styles.navBar}>
                <MaterialIconsIcon name={'account'} style={styles.accountIcon}/>
                <Icon name="ios-menu" style={styles.menuIcon}/>
            </View>

            <View style={styles.conturiContainer}>
                <View style={styles.conturiTop}>
                    <View style={styles.totalConturiColumn}>
                        <Text style={styles.totalConturi}>Total conturi</Text>
                        <Text style={styles.amount}>$14,326</Text>
                    </View>
                    <EntypoIcon
                    name="chevron-small-right"
                    style={styles.icon}
                    />
                </View>
                <View style={styles.conturiBottom}>
                    <View style={styles.cheltuieliContainer}>
                        <View style={styles.cheltuieliStack}>
                            <Text style={styles.cheltuieli}>Cheltuieli</Text>
                            <Image
                            source={require("../assets/image-expenses.png")}
                            resizeMode="contain"
                            style={styles.image2}
                            />
                        </View>
                        <Text style={styles.cheltuieliAmount}>$5432</Text>
                    </View>
                    <View style={styles.venituriContainer}>
                        <View style={styles.venituriStack}>
                            <Text style={styles.venituri}>Venituri</Text>
                            <Image
                            source={require("../assets/image-income.png")}
                            resizeMode="contain"
                            style={styles.image3}
                            />
                        </View>
                        <Text style={styles.venituriAmount}>$20745</Text>
                    </View>
                </View>
            </View>

            <View style={styles.seifContainer}>
                <Text style={styles.seif}>Seif</Text>
                <View style={styles.loremIpsum4Row}>
                    <Text style={styles.loremIpsum4}>$51548</Text>
                    <Text style={styles.outOf100000Goal}>out of $100.000 goal</Text>
                </View>
                <Image
                    source={require("../assets/image-progress-bar.png")}
                    resizeMode="contain"
                    style={styles.image4}
                    />
            </View>

            {/*<Pressable onPress={toggleVisibility}*/}
            {/*           style={styles.bubbleContainer}*/}
            {/*>*/}
            {/*    <Image*/}
            {/*        source={require("../assets/bubble2.png")}*/}
            {/*        resizeMode="contain"*/}
            {/*        style={styles.chatBubble}*/}
            {/*    />*/}
            {/*</Pressable>*/}

            {/*{isVisible && (*/}
            {/*    <View style={styles.chatBox}>*/}
            {/*        <Pressable onPress={toggleVisibility}>*/}
            {/*            <MaterialIconsIcon*/}
            {/*                name="close"*/}
            {/*                style={styles.closeChatIcon}*/}
            {/*            />*/}
            {/*            </Pressable>*/}
            {/*        /!* Add your chat UI components here *!/*/}

            {/*    </View>*/}
            {/*)}*/}
            <HomeBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    navBar: {
        width: "100%",
        height: 100,
        position:"relative",
        top: 40,
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    accountIcon: {
        top: 5,
        position: "absolute",
        color: "rgba(113,77,145,1)",
        fontSize: 35,
        left: 40,
    },
    cardIcon: {
        color: "rgba(0,0,0,1)",
        fontSize: 35,
        height: 40,
        width: 40,
        marginLeft: 185,
        marginTop: 10
    },
    menuIcon: {
        position: "absolute",
        right: 40,
        color: "rgba(113,77,145,1)",
        fontSize: 37,
        height: 35,
        width: 35,
        marginLeft: 9,
        top: 7
    },

    conturiContainer: {
        width: "80%",
        minHeight: 175,
        backgroundColor: "rgba(113,77,145,1)",
        borderWidth: 1,
        borderColor: "rgba(255,249,249,1)",
        borderRadius: 15,
        marginTop: 30
    },
    totalConturi: {
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        textAlign: "left"
    },
    amount: {
        color: "rgba(255,255,255,1)",
        fontSize: 22,
        marginTop: 1
    },
    totalConturiColumn: {
        width: "auto",
        marginTop: 2
    },
    icon: {
        color: "rgba(255,255,255,1)",
        fontSize: 35,
        height: 38,
        width: 35,
        position: "absolute",
        right: 5
    },
    conturiTop: {
        height: 62,
        flexDirection: "row",
        marginTop: 24,
        marginLeft: 29,
        marginRight: 15
    },
    cheltuieli: {
        top: 0,
        left: 6,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 16
    },
    image2: {
        top: 15,
        left: 10,
        width: 35,
        height: 40,
        position: "absolute"
    },
    cheltuieliStack: {
        top: 0,
        left: 0,
        width: 73,
        height: 48,
        position: "absolute"
    },
    cheltuieliAmount: {
        top: 29,
        left: 46,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 17
    },
    cheltuieliContainer: {
        width: "auto",
        minWidth: 80,
        height: 50,
        marginTop: 1
    },
    venituri: {
        top: 1,
        left: 13,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 15
    },
    image3: {
        top: 15,
        left: 13,
        width: 35,
        height: 40,
        position: "absolute"
    },
    venituriStack: {
        top: 0,
        left: 0,
        width: 76,
        height: 48,
        position: "absolute"
    },
    venituriAmount: {
        top: 30,
        left: 52,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 17
    },
    venituriContainer: {
        width: 'auto',
        height: 48,
        marginLeft: 62
    },
    conturiBottom: {
        height: 49,
        flexDirection: "row",
        marginTop: 22,
        marginLeft: 22,
        marginRight: 22
    },

    seifContainer: {
        width: "80%",
        height: "auto",
        // minHeight: 120,
        backgroundColor: "rgba(225,228,253,1)",
        borderWidth: 0,
        borderColor: "#000000",
        borderRadius: 15,
        marginTop: 20
    },
    seif: {
        color: "rgba(4,0,0,1)",
        fontSize: 18,
        marginTop: 16,
        marginLeft: 22
    },
    loremIpsum4: {
        color: "#121212",
        fontSize: 19
    },
    outOf100000Goal: {
        color: "#121212",
        fontSize: 19,
        marginLeft: 7
    },
    loremIpsum4Row: {
        height: 26,
        flexDirection: "row",
        marginLeft: 22,
        marginRight: 22
    },
    image4: {
        width: 261,
        height: 39,
        marginLeft: 21
    },
    bubbleContainer: {
      position: "absolute",
      bottom: 70,
      right: 30,
        width: 75,
        height: 75,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    chatBubble: {
        width: 75,
        height: 75,
    },
    chatBox: {
        backgroundColor: 'whitesmoke',
        padding: 10,
        borderRadius: 10,
        position: "absolute",
        bottom: 150,
        height: "60%",
        width: "70%",
        right: 40,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    closeChatIcon: {
        position: "absolute",
        right: 5,
        top: 0,
        fontSize: 25,
        height: 20,
        width: 20

    }
});

export default Home;
