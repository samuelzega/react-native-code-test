import React, { useEffect, useContext } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { screenSize } from "../styles";
import { Login, Home, Blog } from "../screens";
import { LoginContext } from "../context";
import { auth } from "firebase";

const Stack = createStackNavigator();

const App = () => {
    const { dispatch } = useContext(LoginContext);
    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(handler);
        return subscribe;
    }, []);

    const handler = (user: any) => {
        if (user) {
            dispatch({
                type: "LOGIN",
                payload: user,
            });
        }
    };
    return (
        <NavigationContainer>
            <SafeAreaView
                style={{
                    paddingTop: screenSize.statusBarHeight,
                }}
            >
                <StatusBar style="dark" />
            </SafeAreaView>
            <Stack.Navigator initialRouteName="Home" mode="modal">
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Blog"
                    component={Blog}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
