import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from "../screens/SearchScreen";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";

import sharedRoutes, { sharedOptions } from "./sharedRoutes";


const SearchStack = createStackNavigator();

function HomeRoute() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="Search" 
                component={SearchScreen}
            />
            <SearchStack.Screen
                name="Like"
                component={LikesScreen}
            />
            <SearchStack.Screen
                name="Comment" 
                component={CommentsScreen}
            />
        </SearchStack.Navigator>
    )

};

export default HomeRoute;
