import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import {MainNavigation} from "./MainNavigation";
import {AboutNavigation} from "./AboutNavigation";


export const MenuDrawer = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Главная" component={MainNavigation} />
            <Drawer.Screen name="О нас" component={AboutNavigation} />

        </Drawer.Navigator>
    );
}