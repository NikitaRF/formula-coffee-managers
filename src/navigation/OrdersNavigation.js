import {createStackNavigator} from '@react-navigation/stack';
import {OrdersScreen} from "../screens/OrdersScreen";
import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";


const Stack = createStackNavigator();

export const OrdersNavigation = () =>  {

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
            <Stack.Screen name="Заказы" component={OrdersScreen} />
        </Stack.Navigator>
    );
}




