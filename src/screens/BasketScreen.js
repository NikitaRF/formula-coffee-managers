import React, {useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {BasketItem} from "../components/BasketItem";

export const BasketScreen = () => {
    const itemsBasket = useSelector(state => state.menu.basket)


    console.log('Баскет скрин:', itemsBasket)

    return (
        <View style={styles.center}>
            <FlatList
                data={itemsBasket}
                keyExtractor={(basket) => basket.name}
                renderItem={({item}) => <BasketItem Item={item} /> }
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
