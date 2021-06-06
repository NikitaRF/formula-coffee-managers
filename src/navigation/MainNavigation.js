import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from "../screens/MainScreen";
import React from "react";
import {AboutScreen} from "../screens/AboutScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";


const Stack = createStackNavigator();

export const MainNavigation = () =>  {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="1" component={AboutScreen} />
        </Stack.Navigator>
    );
}

