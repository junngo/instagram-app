import React from "react";
import { Platform } from "react-native";
import { View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";

import NavIcon from "../components/NavIcon";


const Tab = createBottomTabNavigator();

function TabsNavigation() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        backgroundColor: "#FBFBFB",
                        height: 45
                    }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeRoute}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <NavIcon 
                                focused={focused}
                                name={Platform.OS === "ios" ? "ios-home" : "md-home"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchRoute}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ focused }) => (
                            <NavIcon 
                                focused={focused}
                                name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="AddPhoto"
                    component={View}
                    options={{
                        tabBarLabel: 'AddPhoto',
                        tabBarIcon: ({ focused }) => (
                            <NavIcon 
                                focused={focused}
                                name={
                                    Platform.OS === "ios"
                                      ? "ios-add-circle-outline"
                                      : "md-add-circle-outline"
                                }
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Notification"
                    component={NotificationsRoute}
                    options={{
                        tabBarLabel: 'Noti',
                        tabBarIcon: ({ focused }) => (
                            <NavIcon 
                                focused={focused}
                                name={
                                    Platform.OS === "ios"
                                      ? focused
                                        ? "ios-heart"
                                        : "ios-heart-empty"
                                      : focused
                                      ? "md-heart"
                                      : "md-heart-empty"
                                }
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileRoute}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ focused }) => (
                            <NavIcon 
                                focused={focused}
                                name={Platform.OS === "ios" ? "ios-person" : "md-person"}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
} 

export default TabsNavigation;
