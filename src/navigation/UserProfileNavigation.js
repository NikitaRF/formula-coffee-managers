import {createStackNavigator} from '@react-navigation/stack';
import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {UserProfileScreen} from "../screens/UserProfileScreen";


const Stack = createStackNavigator();

export const UserProfileNavigation = () =>  {

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
            <Stack.Screen name="Профиль" component={UserProfileScreen} />
        </Stack.Navigator>
    );
}