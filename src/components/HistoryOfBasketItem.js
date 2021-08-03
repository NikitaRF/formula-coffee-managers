import React, {useEffect, useState} from "react";
import {ImageBackground, Text, TouchableOpacity, View, StyleSheet, Dimensions, Button} from "react-native";


export const HistoryOfBasketItem = ({Item}) => {

    const [state, setState] = useState({
        full: false
    })

    const showFullInfo = () => {
        setState({
            full: !state.full
        })
    }

    //console.log('MAP', Item.order.map(element => element.count))

    return (
        <View style={styles.mainWrap}>
            <TouchableOpacity style={styles.infoBlock} onPress={() => showFullInfo()}>
                <Text>{Item.date}</Text>
                <Text>Адрес: {Item.address}</Text>
                <Text style={state.full ? styles.isShow : styles.isNotShow}>Комментарий: {Item.comment}</Text>
                <Text style={state.full ? styles.isShow : styles.isNotShow}>Количество персон: {Item.countOfPerson}</Text>

                    <View style={state.full ? styles.itemsOfOrder : styles.isNotShow}>
                        {Item.order.map((el) =>
                            <Text>{el.name}  x {el.count} = {el.count * el.price} руб. </Text>
                        )}
                    </View>

                <Text style={state.full ? styles.isShow : styles.isNotShow}>Стоимость блюд: {Item.totalPrice} руб.</Text>
                <Text style={state.full ? styles.isShow : styles.isNotShow}>Стоимость доставки: {Item.deliveryPrice} руб.</Text>
                <Text>Итого: {Item.totalResult} руб.</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrap: {
        width: Dimensions.get('window').width,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    infoBlock: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: '100%',
    },
    isNotShow: {
        display: 'none'
    },
    isShow: {

    },
    itemsOfOrder: {
        marginVertical: 15,
    }
})