import {createStackNavigator} from '@react-navigation/stack';
import React from "react";
import {AboutScreen} from "../screens/AboutScreen";


const Stack = createStackNavigator();

export const AboutNavigation = () =>  {

    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
}