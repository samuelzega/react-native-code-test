import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { BlogType } from "../../constants";
import styles from "./style";
import moment from "moment";
import { MotiView } from "moti";

type Props = {
    blog: BlogType;
    onPress: () => void;
};

export default function BackButton({ blog, onPress }: Props) {
    return (
        <MotiView
            from={{ translateY: -100 }}
            animate={{ translateY: 0 }}
            transition={{
                type: "timing",
                duration: 1000,
                // delay: 3000,
            }}
            exit={{
                opacity: 0,
                scale: 0.9,
            }}
        >
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Image
                    resizeMode="cover"
                    source={{
                        uri: blog.imageUrl + "?bust=" + moment().valueOf(),
                    }}
                    style={styles.image}
                />
                <Text style={styles.text}>{blog.title}</Text>
            </TouchableOpacity>
        </MotiView>
    );
}
