import React, {Component, useLayoutEffect, useState} from "react";
import {StyleSheet, View, Text, Switch, Image, ImageComponent, Pressable, Button, TouchableOpacity} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import HomeBar from "../components/HomeBar";
import img from './../assets/profileImg.jpeg'
import {useAuthContext} from "../context/AuthContext";

const Account = ({navigation}) => {

    const nav = useNavigation();
    const { dispatch } = useAuthContext();


    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        });
    }, []);

    const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

    const [userName, setUserName] = useState('Henry');
    const [email, setEmail] = useState("abc@gmail.com")
    const [profileImg, setProfileImg] = useState(img);

    const toggleNotifications = () => {
        setNotificationsEnabled((prev) => !prev);
    };

    const toggleDarkMode = () => {
        setDarkModeEnabled((prev) => !prev);
    };

    const handleLogout = () => {
        // Dispatch logout action
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <View style={styles.container}>
            <MaterialIconsIcon name={'arrow-back'}
                               onPress={() =>
                                   navigation.navigate('Home')
                               }
                               style={styles.backIcon}/>
            <Image
                source={require("../assets/purpleBck.png")}
                style={styles.backgroundImg}/>

            <View style={styles.containerHeader}>
                <View style={styles.headerInfo}>
                    <Image source={profileImg} style={styles.profileImg}/>
                    <Text style={styles.profileName}>{userName}</Text>
                    <Text style={styles.profileEmail}>{email}</Text>
                </View>
            </View>

            <View style={styles.innerContainer}>
                <Text style={styles.sectionTitle}>General</Text>
                <View style={styles.section}>
                    <View style={styles.setting}>
                        <View style={styles.settingLeft}>
                            <MaterialCommunityIcons name={'account-outline'} style={styles.icon}/>
                            <Text style={styles.settingText}>Edit account</Text>
                        </View>
                        <MaterialCommunityIcons name={'chevron-right'}
                                                style={styles.settingRight}/>
                    </View>

                    <View style={styles.setting}>
                        <View style={styles.settingLeft}>
                            <MaterialIconsIcon name={'password'} style={styles.icon}/>
                            <Text style={styles.settingText}>Change password</Text>
                        </View>
                        <MaterialCommunityIcons name={'chevron-right'}
                                                style={styles.settingRight}/>
                    </View>

                    <View style={styles.setting}>
                        <View style={styles.settingLeft}>
                            <Icon name={'notifications-outline'} style={styles.icon}/>
                            <Text style={styles.settingText}>Notifications</Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#714d9180" }}
                            thumbColor={notificationsEnabled ? "#714d91" : "#f4f3f4"}
                            value={notificationsEnabled}
                            onValueChange={toggleNotifications}
                            style={styles.settingRight}
                        />
                    </View>
                    <TouchableOpacity style={styles.setting} onPress={handleLogout}>
                        <View style={styles.settingLeft}>
                            <MaterialIconsIcon name={'logout'} style={styles.icon}/>
                            <Text style={styles.settingText}>Logout</Text>
                        </View>
                        <MaterialCommunityIcons name={'chevron-right'}
                                                style={styles.settingRight}/>
                    </TouchableOpacity>
                    <View style={styles.setting}>
                        <View style={styles.settingLeft}>
                            <MaterialIconsIcon name={'delete-outline'} style={styles.icon}/>
                            <Text style={styles.settingText}>Delete account</Text>
                        </View>
                        <MaterialCommunityIcons name={'chevron-right'}
                                                style={styles.settingRight}/>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Appearance</Text>
                <View style={styles.section}>
                    <View style={styles.setting}>
                        <View style={styles.settingLeft}>
                            <Icon name={'moon-outline'} style={styles.icon}/>
                            <Text style={styles.settingText}>Dark Mode</Text>
                        </View>
                        <Switch value={darkModeEnabled}
                                trackColor={{ false: "#767577", true: "#714d9180" }}
                                thumbColor={darkModeEnabled ? "#714d91" : "#f4f3f4"}
                                onValueChange={toggleDarkMode}
                                style={styles.settingRight}
                        />
                    </View>
                </View>

                <Text style={styles.sectionTitle}>More</Text>
                <View style={styles.section}>
                    <View style={styles.setting}>
                        <View style={styles.settingLeft}>
                            <MaterialCommunityIcons name={'book-open-page-variant-outline'} style={styles.icon}/>
                            <Text style={styles.settingText}>About us</Text>
                        </View>
                        <MaterialCommunityIcons name={'chevron-right'}
                                                style={styles.settingRight}/>
                    </View>
                </View>

            </View>
            <HomeBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(113,77,145,1)",
        display: "flex",
        flexDirection: "column"
    },
    backIcon: {
        position: "absolute",
        left: 20,
        top: 40,
        fontSize: 29,
        padding:10,
        color: "#fff",
        zIndex: 2,
        borderRadius: 10
    },
    containerHeader: {
      width: "100%",
        height: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    headerInfo:{
        marginTop: 25,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
        alignItems:"center"
    },
    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 50,
        objectFit: "contain"
    },
    profileName: {
      color: "#fff",
      fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    profileEmail: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "200",
        textAlign: "center"
    },
    backgroundImg: {
        position: "absolute",
        top: 0,
        left: 0,
        objectFit: "cover",
        width: "100%",
        height: "40%"
    },
    innerContainer: {
        padding: 30,
        width: "100%",
        height: "80%",
        backgroundColor: "whitesmoke",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50
    },
    section: {
      borderRadius: 20,
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 10
    },
    sectionTitle: {
        fontSize: 17,
        textTransform: "uppercase",
        fontWeight: '600',
        marginLeft: 10,
        color: 'grey'
    },
    setting: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: "#fff",
        justifyContent: 'space-between',
        marginVertical: 5,
        height: 40
    },
    settingLeft: {
      display: "flex",
      flexDirection: "row",
        alignItems: "center"
    },
    settingRight: {
      fontSize: 26,
        color: "rgba(113, 77, 145, 1)",
        alignSelf: "center",
        top: 7
    },
    settingText: {
        color: "rgba(113, 77, 145, 1)",
        fontSize: 17,
        marginLeft: 15,
        top: 2
    },
    icon:{
        left: 5,
        fontSize: 24,
        width: 30,
        color: "rgba(113, 77, 145, 1)"
    }
});

export default Account;
