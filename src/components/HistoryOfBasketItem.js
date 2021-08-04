import React, {useState} from "react";
import {Text, TouchableOpacity, View, StyleSheet, Dimensions} from "react-native";
import {THEME} from "../theme";


export const HistoryOfBasketItem = ({Item}) => {

    const [state, setState] = useState({
        full: false
    })

    const showFullInfo = () => {
        setState({
            full: !state.full
        })
    }


    return (
        <View style={styles.mainWrap}>
            <TouchableOpacity style={styles.infoBlock} onPress={() => showFullInfo()}>
                <Text style={styles.mainBold}>{Item.date}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.mainText}>Статус:</Text>
                    {Item.status === 'В обработке' ? <Text style={styles.statusInProcess}>{Item.status}</Text> : <></>}
                    {Item.status === 'Принят' ? <Text style={styles.statusAllow}>{Item.status}</Text> : <></>}
                    {Item.status === 'Отклонен' ? <Text style={styles.statusDeny}>{Item.status}</Text> : <></>}
                    {Item.status === 'Выполнен' ? <Text style={styles.statusComplete}>{Item.status}</Text> : <></>}
                </View>
                <Text style={styles.mainText}>Адрес: {Item.address}</Text>
                <Text style={styles.mainText}>Время доставки: {String(Item.timeToDelivery)}</Text>
                <Text style={state.full ? styles.mainText : styles.isNotShow}>Комментарий: {Item.comment}</Text>
                <Text style={state.full ? styles.mainText : styles.isNotShow}>Количество персон: {Item.countOfPerson}</Text>

                    <View style={state.full ? styles.itemsOfOrder : styles.isNotShow}>
                        {Item.order.map((el) =>
                            <Text style={styles.mainText}>{el.name} x {el.count} = {el.count * el.price} руб. </Text>
                        )}
                    </View>

                <Text style={state.full ? styles.mainText : styles.isNotShow}>Стоимость блюд: {Item.totalPrice} руб.</Text>
                <Text style={state.full ? styles.mainText : styles.isNotShow}>Стоимость доставки: {Item.deliveryPrice} руб.</Text>
                <Text style={{...styles.mainText, fontFamily: THEME.FONT_BOLD}}>Итого: {Item.totalResult} руб.</Text>
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
    },
    mainText: {
        fontFamily: THEME.FONT_MAIN,
        color: THEME.COLOR_MAIN_DARK
    },
    mainBold: {
        fontFamily: THEME.FONT_BOLD,
        color: THEME.COLOR_MAIN_LIGHT
    },
    statusInProcess: {
        fontFamily: THEME.FONT_BOLD,
        color: THEME.COLOR_STATUS_IN_PROCESS,
        marginLeft: 5,
    },
    statusAllow: {
        fontFamily: THEME.FONT_BOLD,
        color: THEME.COLOR_STATUS_ALLOW,
        marginLeft: 5,
    },
    statusDeny: {
        fontFamily: THEME.FONT_BOLD,
        color: THEME.COLOR_STATUS_DENY,
        marginLeft: 5,
    },
    statusComplete: {
        fontFamily: THEME.FONT_BOLD,
        color: THEME.COLOR_STATUS_COMPLETE,
        marginLeft: 5,
    },
})