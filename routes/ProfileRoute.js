import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from "../screens/ProfileScreen";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";


const ProfileStack = createStackNavigator();

function ProfileRoute(aa) {

    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
            />
            <ProfileStack.Screen
                name="Like"
                component={LikesScreen}
            />
            <ProfileStack.Screen
                name="Comment" 
                component={CommentsScreen}
            />
        </ProfileStack.Navigator>
    )

};

export default ProfileRoute;
