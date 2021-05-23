import React from "react";
import { StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import mapping from "./mapping.json";
import { LoginProvider } from "./src/context";
import Routes from "./src/routes";
import { useFonts } from "expo-font";
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBkEzgdCZawLI5amk8GuDLMXfwthd4pShw",
    authDomain: "find-image-2d551.firebaseapp.com",
    databaseURL: "https://find-image-2d551.firebaseio.com",
    projectId: "find-image-2d551",
    storageBucket: "find-image-2d551.appspot.com",
    messagingSenderId: "658728495166",
    appId: "1:658728495166:web:99d3c23fdbbf82b6ad096f",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
const App = () => {
    const [loaded, error] = useFonts({
        Roboto: require("./assets/fonts/Roboto/Roboto.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    });
    if (!loaded) {
        return null;
    }

    return (
        <LoginProvider>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider
                {...eva}
                theme={eva.light}
                customMapping={{ ...eva.mapping, ...mapping }}
            >
                <Routes />
            </ApplicationProvider>
        </LoginProvider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        textAlign: "center",
    },
});
