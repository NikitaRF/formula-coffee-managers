import {createStackNavigator} from '@react-navigation/stack';
import {MenuScreen} from "../screens/MenuScreen";
import React from "react";
import { SimpleLineIcons } from '@expo/vector-icons';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {THEME} from "../theme";
import {View} from "react-native";


const Stack = createStackNavigator();

export const MenuNavigation = () =>  {

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
                        <SimpleLineIcons name="basket" size={24} color={THEME.COLOR_MAIN_DARK}  />
                    </View>

                )
            })}
        >
            <Stack.Screen name="Меню" component={MenuScreen} />
        </Stack.Navigator>
    );
}

