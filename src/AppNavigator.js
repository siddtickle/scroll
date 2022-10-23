import React, {useContext} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { MainScreen } from "./screens/MainScreen";
import { PastEntriesScreen } from "./screens/PastEntriesScreen";
import {styles} from "../Styles";
import { StartScreen } from "./screens/StartScreen";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false}} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false}} />
            <Stack.Screen name="PastEntries" component={PastEntriesScreen} options={{ headerShown: false}} />
        </Stack.Navigator>
    )
}