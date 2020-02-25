import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import FeedScreen from "../screens/FeedScreen";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";


const HomeStack = createStackNavigator();

function HomeRoute() {
    return (
        <HomeStack.Navigator
            initialRouteName="HomeRoot"
        >
            <HomeStack.Screen
                name="Feed" 
                component={FeedScreen}
                options={({ navigation, route }) => ({
                    headerTitle: props => (
                        <Image
                            source={require("../assets/images/logo.png")}
                            style={{ height: 35 }}
                            resizeMode={"contain"}
                        />
                    ),
                })}
            />
            <HomeStack.Screen
                name="Like"
                component={LikesScreen}
            />
            <HomeStack.Screen
                name="Comment" 
                component={CommentsScreen}
            />
        </HomeStack.Navigator>
    )

};

export default HomeRoute;
