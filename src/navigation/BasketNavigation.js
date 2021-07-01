import {createStackNavigator} from '@react-navigation/stack';
import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {BasketScreen} from "../screens/BasketScreen";
import {View} from "react-native";
import {MaterialIcons, SimpleLineIcons} from "@expo/vector-icons";
import {THEME} from "../theme";


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
                headerRight: () => (
                    <View style={{marginRight: 20}}>
                        <MaterialIcons name="menu-book" size={24} color={THEME.COLOR_MAIN_DARK} onPress={() => navigation.navigate('Меню')}/>
                    </View>

                )
            })}
        >
            <Stack.Screen name="Корзина" component={BasketScreen} />
        </Stack.Navigator>
    );
}

