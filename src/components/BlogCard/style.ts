import { StyleSheet } from "react-native";
import { screenSize } from "../../styles";

export default StyleSheet.create({
    container: {
        width: screenSize.width * 0.8,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: "center",
    },
    image: {
        width: "100%",
        height: screenSize.width * 0.4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        marginVertical: 15,
        fontFamily: "Roboto-Bold",
        marginHorizontal: 12,
        color: "grey",
    },
});
