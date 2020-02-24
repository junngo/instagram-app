import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import FeedScreen from "../screens/FeedScreen";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";

import sharedRoutes, { sharedOptions } from "./sharedRoutes";


const HomeStack = createStackNavigator();

function HomeRoute() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Feed" 
                component={FeedScreen}
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
