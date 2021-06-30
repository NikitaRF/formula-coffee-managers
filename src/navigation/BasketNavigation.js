import {createStackNavigator} from '@react-navigation/stack';
import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {BasketScreen} from "../screens/BasketScreen";


const Stack = createStackNavigator();

export const BasketNavigation = () =>  {

    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon} >
                        <Item title='Menu'
                              iconName='ios-menu'
                              onPress={() => navigation.toggleDrawer()}/>
                    </HeaderButtons>
                ),
            })}
        >
            <Stack.Screen name="Корзина" component={BasketScreen} />
        </Stack.Navigator>
    );
}

