import { StyleSheet } from "react-native";
import { screenSize } from "../../styles";

export default StyleSheet.create({
    input: {
        marginBottom: 5,
    },
    button: {
        marginTop: 50,
        borderRadius: 10,
    },
    textError: {
        color: "red",
        fontSize: 13,
        marginBottom: 15,
        marginStart: 2,
    },
    icon: {
        width: 25,
        height: 25,
    },
    lottie: {
        width: screenSize.width * 0.9,
        marginStart: screenSize.width * 0.02,
    },
});
