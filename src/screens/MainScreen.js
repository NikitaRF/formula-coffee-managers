import React, {useCallback, useEffect, useState} from "react";
import {FlatList, Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";

import {THEME} from "../theme";
import firebase from "firebase";
import {getMenu} from "../store/actions/getMenu";
import {useDispatch, useSelector} from "react-redux";
import {MenuItem} from "../components/MenuItem";

export const MainScreen = () => {

    // выборка из БД, пример

    const db = firebase.firestore();
    db.collection('users').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let res = doc.data().historyOfOrder.filter(function (el) {
                return el.status === 'В обработке'
            })
            //console.log(res)
        });
    })

    const [state, setState] = useState({
        currentState: '/menu/drinks/coffee',
        new: '',
        transit: '',
        completed: '',
    })

    // Наше меню !

    const [menuSelected, setMenuSelected] = useState({
        currentMenuSelected: 'new',
    })

    const menuToggle = (item) => {
        setState({
            ...state,
            currentState: state[item],
        })
        setMenuSelected({
            currentMenuSelected: item
        })
    }

    console.log(state.currentState)
    console.log(menuSelected.currentMenuSelected)

    const dispatch = useDispatch()

    const [refreshing, setRefreshing] = useState(false);

    // const onRefresh = useCallback(() => {
    //     setRefreshing(true);
    //     dispatch(getMenu(state.currentState)).then(() => setRefreshing(false));
    // }, [state.currentState]);


    return (
        <View style={styles.center}>
            <View style={styles.lineMenu}>
                <TouchableOpacity onPress={() => menuToggle('new')} style={menuSelected.currentMenuSelected == 'new' ? styles.menuItemBlockSelected : styles.menuItemBlock}>
                    <Text style={styles.menuItemText}>Новые</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => menuToggle('transit')}  style={menuSelected.currentMenuSelected == 'transit' ? styles.menuItemBlockSelected : styles.menuItemBlock}>
                    <Text style={styles.menuItemText}>В пути</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => menuToggle('completed')}  style={menuSelected.currentMenuSelected == 'completed' ? styles.menuItemBlockSelected : styles.menuItemBlock}>
                    <Text style={styles.menuItemText}>Завершенные</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.flatList}>
                {/*<FlatList*/}
                {/*    data={menuData}*/}
                {/*    keyExtractor={(menu) => menu.name}*/}
                {/*    refreshing={true}*/}
                {/*    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}*/}
                {/*    renderItem={({item}) => <MenuItem Item={item} /> }*/}
                {/*/>*/}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: "5%",
        width: '100%',
        borderWidth: 1,
        borderColor: THEME.COLOR_MAIN_LIGHT,
    },
    menuItemBlock: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    menuItemBlockSelected: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
    },
    menuItemText: {
        fontFamily: THEME.FONT_MAIN,
        color: THEME.COLOR_MAIN_DARK,
    },
    flatList: {
        height: "95%",
        alignItems: 'center',
        justifyContent: 'center',
    },
})
