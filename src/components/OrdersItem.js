import React, {useState} from "react";
import {Text, TouchableOpacity, View, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import {THEME} from "../theme";

export const OrdersItem = ({Item}) => {
    const [state, setState] = useState({
        full: false,
        isLoading: false
    })

    const showFullInfo = () => {
        setState({
            ...state,
            full: !state.full
        })
    }

    const changeStatus = (status) => {

    }

    if(state.isLoading){
        return(
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
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

                <View style={styles.statusButtonsWrap}>
                    {Item.status == 'В обработке' ?  (
                        <>
                            <TouchableOpacity style={styles.statusButton} onPress={() => changeStatus('Принят')}>
                                <Text style={{color: THEME.COLOR_STATUS_COMPLETE}}>Принять</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.statusButton} onPress={() => changeStatus('Отклонен')}>
                                <Text style={{color: THEME.COLOR_STATUS_DENY}}>Отклонить</Text>
                            </TouchableOpacity>
                        </>
                    ) : (<></>) }

                    {Item.status == 'Принят' ?  (
                        <>
                            <TouchableOpacity style={styles.statusButton} onPress={() => changeStatus('Выполнен')}>
                                <Text style={{color: THEME.COLOR_STATUS_COMPLETE}}>Завершить</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.statusButton} onPress={() => changeStatus('Отклонен')}>
                                <Text style={{color: THEME.COLOR_STATUS_DENY}}>Отклонить</Text>
                            </TouchableOpacity>
                        </>
                    ) : (<></>) }

                </View>

            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    statusButtonsWrap: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statusButton: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: THEME.COLOR_MAIN_LIGHT
    },
    preloader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 50,
        bottom: 0,
        backgroundColor: '#fff'
    },
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