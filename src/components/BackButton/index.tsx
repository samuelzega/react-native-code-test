import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "@ui-kitten/components";
import styles from "./style";

type Props = {
    onPress: () => void;
    name: string;
};

export default function BackButton({ onPress, name }: Props) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon style={styles.icon} fill="#8F9BB3" name={name} />
        </TouchableOpacity>
    );
}
