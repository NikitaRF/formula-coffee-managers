import React from "react";
import {Text, Image, StyleSheet, View} from "react-native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import {MainNavigation} from "./MainNavigation";
import {AboutAppNavigation} from "./AboutAppNavigation";
import {ContactsNavigation} from "./ContactsNavigation";
import {MenuNavigation} from "./MenuNavigation";

function CustomDrawerContent(props) {
    const currentYear = new Date().getFullYear()
    return (
        //<DrawerContentScrollView {...props}>
            <View style={styles.mainWrapper}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo2.png')}
                    />
                    <View style={styles.infoText}>
                        <Text>Часы работы</Text>
                        <Text>8:30 - 23:00</Text>
                    </View>
                </View>
                <View>
                    <DrawerItemList {...props} />
                </View>
                <View style={styles.bottomWrapper}>
                    <View style={styles.socials}>
                        <AntDesign name="facebook-square" size={32} color="black" />
                        <AntDesign name="instagram" size={32} color="black" />
                        <Entypo name="tripadvisor" size={32} color="black" />
                    </View>
                    <Text> © {currentYear} Формула кофе</Text>
                </View>
            </View>

        //</DrawerContentScrollView>
    );
}

export const MenuDrawer = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            drawerType='front'
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerContentOptions={{
                activeTintColor: '#2c2c2c',
            }}
        >

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
                    drawerIcon: () => <AntDesign name='contacts'/>,

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
    mainWrapper:{
        flexDirection: 'column',
        //justifyContent: 'space-around',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: 'red',
        flex: 1,
        paddingTop: 50,
        paddingBottom: 35,
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        // paddingLeft: 10,
        paddingRight: 20,
        paddingBottom: 15,
    },
    infoText:{
        height: 120,
    },
    logo: {
        width: 95,
        height: 120,
    },
    bottomWrapper: {
        alignItems: 'center',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: 'grey',
        marginTop: 'auto',
    },
    socials:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,

    },
})