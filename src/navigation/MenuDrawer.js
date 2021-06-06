import {createDrawerNavigator} from "@react-navigation/drawer";
import {MainScreen} from "../screens/MainScreen";
import {AboutScreen} from "../screens/AboutScreen";
import React from "react";

export const MenuDrawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Главная" component={MainScreen} />
            <Drawer.Screen name="О нас" component={AboutScreen} />
        </Drawer.Navigator>
    );
}