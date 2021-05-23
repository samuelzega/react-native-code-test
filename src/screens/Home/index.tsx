import React, { useEffect, useState, useContext } from "react";
import { FlatList, View } from "react-native";
import { BackButton, BlogCard } from "../../components";
import { Layout } from "@ui-kitten/components";
import { publiscStyle } from "../../styles";
import { BlogType } from "../../constants";
import LottieView from "lottie-react-native";
import styles from "./style";
import * as blogData from "../../data/blogData.json";
import { LoginContext } from "../../context";
import { auth } from "firebase";

type Props = {
    navigation: any;
    route: {
        params: any;
    };
};

export default function Home({ navigation }: Props) {
    const allBlog: BlogType[] = blogData.blogs;
    const [isLoading, setIsLoading] = useState(true);
    const { state, dispatch } = useContext(LoginContext);
    const { isLogin } = state;
    // console.log(isLogin);

    useEffect(() => {
        const subscribe = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => {
            clearTimeout(subscribe);
        };
    }, []);

    const signOut = () => {
        auth()
            .signOut()
            .then(() => dispatch({ type: "LOGOUT" }));
    };

    if (isLoading) {
        return (
            <Layout
                style={[publiscStyle.layout, { backgroundColor: "#131314" }]}
            >
                <LottieView
                    source={require("../../assets/blog.json")}
                    autoPlay
                    loop
                />
            </Layout>
        );
    }
    return (
        <Layout style={publiscStyle.layout}>
            <FlatList
                ListHeaderComponent={
                    <BackButton
                        name={isLogin ? "log-out-outline" : "log-in-outline"}
                        onPress={() =>
                            isLogin ? signOut() : navigation.navigate("Login")
                        }
                    />
                }
                windowSize={11}
                updateCellsBatchingPeriod={10}
                maxToRenderPerBatch={10}
                initialNumToRender={10}
                removeClippedSubviews={true}
                data={allBlog}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={true}
                renderItem={({ item, index }) => {
                    return (
                        <BlogCard
                            blog={item}
                            onPress={() => {
                                isLogin
                                    ? navigation.navigate("Blog", {
                                          blog: item,
                                      })
                                    : navigation.navigate("Login");
                            }}
                        />
                    );
                }}
                ListFooterComponent={<View style={{ margin: 20 }} />}
            />
        </Layout>
    );
}
