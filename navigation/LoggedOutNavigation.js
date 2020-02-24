import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from "../screens/LogInScreen";

const Stack = createStackNavigator();

function LoggedOutNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={LogInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoggedOutNavigation;
