import React from "react";
import {Text, Image, StyleSheet, View} from "react-native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import { AntDesign } from '@expo/vector-icons';

import {MainNavigation} from "./MainNavigation";
import {AboutAppNavigation} from "./AboutAppNavigation";
import {ContactsNavigation} from "./ContactsNavigation";
import {MenuNavigation} from "./MenuNavigation";

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>

            <View style={styles.imgContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo2.png')}
                />
                <View>
                    <Text>Часы работы</Text>
                    <Text>Позвонить</Text>
                </View>
            </View>

            <DrawerItemList {...props} />
            <View style={styles.textContainer}>
                <Text> Formula-coffee 2021</Text>
            </View>

        </DrawerContentScrollView>
    );
}

export const MenuDrawer = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerType='front' drawerContent={props => <CustomDrawerContent {...props} />} >

            <Drawer.Screen
                name="Главная"
                component={MainNavigation}
                options={{
                    drawerIcon: () => <AntDesign name='home'/>
                }}
            />
            <Drawer.Screen
                name="Меню"
                component={MenuNavigation}
                options={{
                    drawerIcon: () => <AntDesign name='menu-fold'/>
                }}
            />
            <Drawer.Screen
                name="Контакты"
                component={ContactsNavigation}
                options={{
                    drawerIcon: () => <AntDesign name='contacts'/>
                }}
            />
            <Drawer.Screen
                name="О приложении"
                component={AboutAppNavigation}
                options={{
                    drawerIcon: () => <AntDesign name='info'/>
                }}
            />

        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    imgContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 15,
    },
    logo: {
        width: 100,
        height: 150,
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',

        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey',

    }
})