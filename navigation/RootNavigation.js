import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Root"
        headerMode="none"
        mode="modal"
      >
        <Stack.Screen 
          name="Tab"
          component={TabsNavigation} 
        />
        <Stack.Screen 
          name="TakePhoto"
          component={TakePhotoScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
