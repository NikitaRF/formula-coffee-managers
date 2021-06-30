import React from "react";
import {Text, Image, StyleSheet, View, Linking, Button, TouchableOpacity} from "react-native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {AntDesign, FontAwesome, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";

import { THEME } from "../theme";
import {MainNavigation} from "./MainNavigation";
import {AboutAppNavigation} from "./AboutAppNavigation";
import {ContactsNavigation} from "./ContactsNavigation";
import {MenuNavigation} from "./MenuNavigation";
import {UserProfileNavigation} from "./UserProfileNavigation";
import {userLogout} from "../store/actions/userLogout";
import {BasketNavigation} from "./BasketNavigation";


function CustomDrawerContent(props) {
    const dispatch = useDispatch()
    const userDisplayName = useSelector(state => state.user.userAuth)
    // console.log(firebase.auth().currentUser)

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            dispatch(userLogout())
        })
            .catch(error => console.log(error))
    }

    const currentYear = new Date().getFullYear()
    return (
        //<DrawerContentScrollView {...props}>
            <View style={styles.mainWrapper}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo2.png')}
                    />
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoBlockText}>Привет!</Text>
                        <Text style={styles.infoBlockText}>{userDisplayName}</Text>
                        <TouchableOpacity
                            style={styles.buttonSignOutWrap}
                            onPress={() => signOut()}
                        >
                                <Text style={styles.buttonSignOutText}>Выйти</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <DrawerItemList {...props} />
                </View>
                <View style={styles.bottomWrapper}>
                    <View style={styles.socials}>
                        <AntDesign name="facebook-square" onPress={() => Linking.openURL('https://www.facebook.com/FormulaCoffee.SRG/')} size={32} color={THEME.COLOR_MAIN_DARK} />
                        <AntDesign name="instagram" size={32} onPress={() => Linking.openURL('https://www.instagram.com/formula__coffee/')} color={THEME.COLOR_MAIN_DARK} />
                        <Entypo name="tripadvisor" size={32} onPress={() => Linking.openURL('https://www.tripadvisor.ru/Restaurant_Review-g737146-d19431381-Reviews-Formula_Coffee-Surgut_Surgutsky_District_Khanty_Mansi_Autonomous_Okrug_Yugra_Tyu.html')} color={THEME.COLOR_MAIN_DARK} />
                    </View>
                    <Text style={styles.copyrightText}> © {currentYear} Формула кофе</Text>
                </View>
            </View>

        //</DrawerContentScrollView>
    );
}

export const MenuDrawer = () => {
    const Drawer = createDrawerNavigator();
    const iconSize = 20;

    return (
        <Drawer.Navigator
            drawerType='front'
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerContentOptions={{
                activeTintColor: THEME.COLOR_MAIN_LIGHT,
                inactiveTintColor: THEME.COLOR_MAIN_DARK,
            }}
        >

            <Drawer.Screen
                name="Главная"
                component={MainNavigation}
                options={{
                    drawerIcon: ({focused}) => <AntDesign
                        name='home'
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />
            <Drawer.Screen
                name="Меню"
                component={MenuNavigation}
                options={{
                    drawerIcon: ({focused}) => <MaterialIcons
                        name="menu-book"
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />
            <Drawer.Screen
                name="Корзина"
                component={BasketNavigation}
                options={{
                    drawerIcon: ({focused}) => <SimpleLineIcons
                        name="basket"
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />
            <Drawer.Screen
                name="Контакты"
                component={ContactsNavigation}
                options={{
                    drawerIcon: ({focused}) => <AntDesign
                        name='filetext1'
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />
            <Drawer.Screen
                name="Профиль"
                component={UserProfileNavigation}
                options={{
                    drawerIcon: ({focused}) => <FontAwesome
                        name="user-circle-o"
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />
            <Drawer.Screen
                name="О приложении"
                component={AboutAppNavigation}
                options={{
                    drawerIcon: ({focused}) => <AntDesign
                        name='info'
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />

        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    mainWrapper:{
        flexDirection: 'column',
        flex: 1,
        paddingTop: 50,
        paddingBottom: 35,
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 15,

    },
    infoBlock:{
        height: 120,
        maxWidth: '50%',
    },
    infoBlockText:{
        color: THEME.COLOR_MAIN_DARK
    },
    logo: {
        width: 95,
        maxWidth: '50%',
        height: 120,
    },
    bottomWrapper: {
        alignItems: 'center',
        marginTop: 'auto',
    },
    socials:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,

    },
    copyrightText:{
        color: THEME.COLOR_MAIN_DARK
    },
    buttonSignOutWrap:{
        marginTop: 'auto',
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
    },
    buttonSignOutText: {
        fontSize: 14,
        textAlign: 'center',
        color: THEME.COLOR_MAIN_DARK
    }
})