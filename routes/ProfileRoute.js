import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from "../screens/ProfileScreen";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";


const ProfileStack = createStackNavigator();

function ProfileRoute(aa) {
    console.log(aa);
    console.log('in profile stack');

    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
                // options={({ navigation, route }) => ({
                //     headerTitle: ({screenProps}) => (
                //         screenProps.username
                //     )
                // })}
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
