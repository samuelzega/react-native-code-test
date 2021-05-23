import { StyleSheet } from "react-native";
import { screenSize } from "../../styles";

export default StyleSheet.create({
    container: {
        width: screenSize.width * 0.1,
        height: screenSize.width * 0.1,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        marginTop: 5,
    },
    icon: {
        width: screenSize.width * 0.07,
        height: screenSize.width * 0.07,
    },
});
