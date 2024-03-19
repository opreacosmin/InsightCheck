import {createContext, useContext, useEffect, useReducer} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export const initialState = {
    user: null,
    // authIsReady: false,
    isAuthenticated: false
};

export const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "LOGIN":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "LOGOUT":
            return { ...state, user: null, isAuthenticated: false };
        // case "AUTH_IS_READY":
        //     return { ...state, user: action.payload, authIsReady: true, isAuthenticated: !!action.payload };
        default:
            return state;
    }
};


export const AuthContext = createContext(undefined);

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


        useEffect(() => {
            const getUser = async () => {
                try {
                    const storedUser = await AsyncStorage.getItem("user");
                    if (storedUser && state.isAuthenticated) {
                        dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
                    }
                } catch (error) {
                    console.error("Error loading user from AsyncStorage:", error);
                }
            };

            getUser();
        }, [state.isAuthenticated
        ]);


        // Save user to AsyncStorage whenever state changes
        useEffect(() => {
            const saveUser = async () => {
                try {
                    await AsyncStorage.setItem("user", JSON.stringify(state.user));
                } catch (error) {
                    console.error("Error saving user to AsyncStorage:", error);
                }
            };

            saveUser();
        }, [state.user]);


    return (
        <AuthContext.Provider value={{ ...state, dispatch, userData: state.user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined)
        throw new Error('useAuthContext should be used within a AuthContextProvider ');

    return context;
};

{/*
useEffect(() => {
    const token = AsyncStorage.getItem('jwt'); // Get token from AsyncStorage
    // console.log(token);

    axios.get('api/user', {
        params: {
            jwt: token
        }
    }).then(function (response) {
        // Handle the server response here
        if (response.status === 200) {
            // Update the state with the user and mark authentication as ready
            dispatch({ type: 'AUTH_IS_READY', payload: response.data });
        } else {
            // If there is no token, mark authentication as ready without a user
            dispatch({ type: 'AUTH_IS_READY', payload: null });
        }
    }).catch(function (error) {
        // Handle the error here
        console.log(error);
        // You can dispatch an action or handle the error in another way
    });

}, []);
*/}