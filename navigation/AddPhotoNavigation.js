import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import TakePhotoScreen from "../screens/TakePhotoScreen";


const AddPhtoStack = createStackNavigator();

function AddPhotoNavigation() {
    return (
        <AddPhtoStack.Navigator>
            <AddPhtoStack.Screen
                name="TakePhoto"
                component={TakePhotoScreen}
            />
        </AddPhtoStack.Navigator>
    )
};

export default AddPhotoNavigation;
