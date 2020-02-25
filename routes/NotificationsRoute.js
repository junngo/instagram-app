import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import NotificationsScreen from "../screens/NotificationsScreen";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";


const NotiStack = createStackNavigator();

function NotificationsRoute() {
    return (
        <NotiStack.Navigator>
            <NotiStack.Screen
                name="Noti"
                component={NotificationsScreen}
            />
            <NotiStack.Screen
                name="Like"
                component={LikesScreen}
            />
            <NotiStack.Screen
                name="Comment" 
                component={CommentsScreen}
            />
        </NotiStack.Navigator>
    )

};

export default NotificationsRoute;
