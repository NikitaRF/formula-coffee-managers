import React, {useCallback, useEffect, useState} from "react";
import {FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../store/actions/getOrders";
import {OrdersItem} from "../components/OrdersItem";

export const OrdersScreen = () => {
    const dispatch = useDispatch()
    const ordersData = useSelector(state => state.menu.orders)

    const [menuSelected, setMenuSelected] = useState({
        currentMenuSelected: 'В обработке',
    })

    useEffect(() => {
        dispatch(getOrders(menuSelected.currentMenuSelected))
    }, [menuSelected.currentMenuSelected])


    // console.log(state.currentState)
     console.log(menuSelected.currentMenuSelected)
     console.log('ordersData', ordersData)


    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(getOrders(menuSelected.currentMenuSelected)).then(() => setRefreshing(false));
    }, [menuSelected.currentMenuSelected]);

    const menuToggle = (item) => {
        setMenuSelected({
            currentMenuSelected: item
        })
    }

    return (
        <View style={styles.center}>
            <View style={styles.lineMenu}>
                <TouchableOpacity onPress={() => menuToggle('В обработке')} style={menuSelected.currentMenuSelected == 'В обработке' ? styles.menuItemBlockSelected : styles.menuItemBlock}>
                    <Text style={styles.menuItemText}>В обработке</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => menuToggle('Принят')}  style={menuSelected.currentMenuSelected == 'Принят' ? styles.menuItemBlockSelected : styles.menuItemBlock}>
                    <Text style={styles.menuItemText}>Принят</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => menuToggle('Выполнен')}  style={menuSelected.currentMenuSelected == 'Выполнен' ? styles.menuItemBlockSelected : styles.menuItemBlock}>
                    <Text style={styles.menuItemText}>Выполнен</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => menuToggle('Отклонен')}  style={menuSelected.currentMenuSelected == 'Отклонен' ? styles.menuItemBlockSelected : styles.menuItemBlock}>
                    <Text style={styles.menuItemText}>Отклонен</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.flatList}>
                <FlatList
                    data={ordersData}
                    keyExtractor={(menu) => menu.name}
                    refreshing={true}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    renderItem={({item}) => <OrdersItem Item={item} /> }
                />
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




// // выборка из БД, пример
// const db = firebase.firestore();
// db.collection('users').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         let res = doc.data().historyOfOrder.filter(function (el) {
//             return el.status === 'В обработке'
//         })
//         //console.log(res)
//     });
// })