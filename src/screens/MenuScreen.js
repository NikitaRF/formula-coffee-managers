import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";

import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {getMenu} from "../store/actions/getMenu";
import {MenuItem} from "../components/MenuItem";

export const MenuScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMenu('/menu/drinks/coffee'))
    }, [])

    const menuData = useSelector(state => state.menu.menu)

    console.log("это меню", menuData)



    return (
        <View style={styles.center}>
            <FlatList
                data={menuData}
                keyExtractor={(menu) => menu.name}
                renderItem={({item}) => <MenuItem Item={item} /> }
            />
        </View>
    )
}



const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

