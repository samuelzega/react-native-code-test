import { StyleSheet } from "react-native";
import { screenSize } from "../../styles";

export default StyleSheet.create({
    // container: {
    //     flex: 1,
    // },
    image: {
        width: screenSize.width,
        height: screenSize.width,
        position: "absolute",
        zIndex: -10,
    },
    scrollview: {
        paddingTop: screenSize.width * 0.8,
        // backgroundColor: "green",
    },
    contentBox: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontFamily: "Roboto-Bold",
        fontSize: 18,
        color: "#3a3b3c",
    },
    author: {
        fontSize: 13,
        color: "grey",
    },
    date: {
        fontSize: 13,
        color: "grey",
        textAlign: "right",
        marginBottom: 10,
    },
    content: {
        fontSize: 15,
        color: "#3a3b3c",
        letterSpacing: 0.5,
        lineHeight: 20,
        textAlign: "justify",
    },
});
