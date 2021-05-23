import React from "react";
import { View, Text, Image } from "react-native";
import { BackButton } from "../../components";
import { Layout } from "@ui-kitten/components";
import { publiscStyle } from "../../styles";
import styles from "./style";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";

type Props = {
    navigation: any;
    route: {
        params: any;
    };
};

export default function Blog({ navigation, route: { params } }: Props) {
    const { blog } = params;

    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={{ position: "absolute", zIndex: 1000, padding: 20 }}>
                <BackButton
                    name="arrow-ios-back-outline"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Image
                source={{ uri: blog.imageUrl + +"?bust=" + moment().valueOf() }}
                style={styles.image}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollview}
            >
                <View
                    style={{
                        backgroundColor: "white",
                        padding: 20,
                    }}
                >
                    <Text style={styles.title}>
                        {blog.title.trim().toUpperCase()}
                    </Text>
                    <Text style={styles.author}>{blog.author}</Text>
                    <Text style={styles.date}>
                        {moment(blog.datePublished).format("MMMM Do YYYY")}
                    </Text>
                    <Text style={styles.content}>{blog.content}</Text>
                    <View style={{ margin: 150 }} />
                </View>
            </ScrollView>
        </View>
    );
}
