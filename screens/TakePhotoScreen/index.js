import React from "react";
import { View, Text } from "react-native";

const TakePhotoScreen = props => (
    <View>
        <Text onPress={() => props.navigation.navigate("Tab")}>Upload Photo</Text>
    </View>
)


export default TakePhotoScreen;
