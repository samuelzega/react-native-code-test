import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Input, Button, Layout, Text, Icon } from "@ui-kitten/components";
import { useForm, Controller } from "react-hook-form";
import { publiscStyle } from "../../styles";
import styles from "./style";
import { LoginType, YupLogin } from "../../constants";
import LottieView from "lottie-react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginContext } from "../../context";
import { BackButton } from "../../components";
import { auth } from "firebase";

// import {NavigationScree} from '@react-navigation/stack'

type Props = {
    navigation: any;
};

export default function Login({ navigation }: Props) {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginType>({ resolver: yupResolver(YupLogin) });
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const { dispatch, state } = useContext(LoginContext);
    const [isLoginProcess, setIsLoginProcess] = useState<boolean>(true);
    const onSubmit = handleSubmit(({ email, password }) => {
        if (isLoginProcess) {
            auth()
                .signInWithEmailAndPassword(
                    email.trim().toLocaleLowerCase(),
                    password
                )
                .then((result) => {
                    // console.log(result);
                    dispatch({
                        type: "LOGIN",
                        payload: result.user,
                    });
                    navigation.navigate("Home");
                })
                .catch((error) => {
                    if (error.code === "auth/wrong-password") {
                        alert(
                            "The password is invalid or the user does not have a password"
                        );
                    }
                    if (error.code === "auth/invalid-email") {
                        alert("That email address is invalid!");
                    }
                    if (error.code === "auth/user-not-found") {
                        alert(
                            "User corresponding to that email does not exist"
                        );
                    }
                    if (error.code === "auth/weak-password") {
                        alert("Your password is not strong enough");
                    }
                    if (error.code === "auth/network-request-failed") {
                        alert("Network error");
                    }
                });
        } else {
            auth()
                .createUserWithEmailAndPassword(
                    email.trim().toLocaleLowerCase(),
                    password
                )
                .then((result) => {
                    // console.log(result);

                    dispatch({
                        type: "LOGIN",
                        payload: result.user,
                    });
                    navigation.navigate("Home");
                })
                .catch((error) => {
                    if (error.code === "auth/email-already-in-use") {
                        alert("That email address is already in use!");
                    }
                    if (error.code === "auth/invalid-email") {
                        alert("That email address is invalid!");
                    }
                    console.error(error);
                });
        }
    });

    return (
        <Layout style={[publiscStyle.layout]}>
            <BackButton
                name="arrow-ios-back-outline"
                onPress={() => navigation.navigate("Home")}
            />
            <LottieView
                source={require("../../assets/login.json")}
                autoPlay
                loop
                style={styles.lottie}
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Email"
                        onBlur={onBlur}
                        style={!errors.email && styles.input}
                        value={value}
                        onChangeText={(nextValue) => onChange(nextValue)}
                    />
                )}
                name="email"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.email && (
                <Text style={styles.textError}>{errors.email.message}</Text>
            )}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Password"
                        style={!errors.password && styles.input}
                        onBlur={onBlur}
                        value={value}
                        onChangeText={(nextValue) => onChange(nextValue)}
                        secureTextEntry={showPassword}
                        accessoryRight={() => (
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Icon
                                    style={styles.icon}
                                    fill="#8F9BB3"
                                    name={showPassword ? "eye-off" : "eye"}
                                />
                            </TouchableOpacity>
                        )}
                    />
                )}
                name="password"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.password && (
                <Text style={styles.textError}>{errors.password.message}</Text>
            )}
            <Button
                status="info"
                style={styles.button}
                onPress={() => onSubmit()}
            >
                {isLoginProcess ? "LOGIN" : "REGISTER"}
            </Button>
            <Text style={{ marginTop: 20, alignSelf: "center" }}>
                {isLoginProcess ? "Dont have account yet?" : "Have an account?"}
            </Text>
            <TouchableOpacity
                onPress={() => setIsLoginProcess(!isLoginProcess)}
                style={{ alignSelf: "center" }}
            >
                <Text style={{ fontFamily: "Roboto-Bold", margin: 10 }}>
                    {isLoginProcess ? "Register here" : "Login Here"}
                </Text>
            </TouchableOpacity>
        </Layout>
    );
}
