import React, {useContext} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { MainScreen } from "./screens/MainScreen";
import { PastEntriesScreen } from "./screens/PastEntriesScreen";
import {styles} from "../Styles";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="PastEntries" component={PastEntriesScreen} />
        </Stack.Navigator>
    )
}