import React, {useEffect, useState} from "react";
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import {BasketItem} from "../components/BasketItem";
import {THEME} from "../theme";

export const BasketScreen = () => {
    const itemsBasket = useSelector(state => state.menu.basket)

    // Начало Счетчик товаров в Корзине
    const [totalCount, setTotalCount] = useState()

    const basketItems = useSelector(state => state.menu.basket)

    const getBasketItemCount = () => {
        let result = 0
        basketItems.forEach((el) => {
            result += el.count
        })
        setTotalCount(result)
        console.log("totalCount", totalCount)
    }

    // Начало Считаем итоговую стоимость
    const [totalPrice, setTotalPrice] = useState()
    const getBasketTotalPrice = () => {
        let result = 0
        basketItems.forEach((el) => {
            result += el.count * el.price
        })
        setTotalPrice(result)
        console.log("totalPrice", totalPrice)
    }
    // Конец Считаем итоговую стоимость

    useEffect(() => {
        getBasketItemCount()
        getBasketTotalPrice()
    }, [basketItems])
    // Конец Счетчик товаров в Корзине

    const getOrder = () => {

    }


    console.log('Баскет скрин:', itemsBasket)

    return (
        <View style={styles.center}>
            <FlatList
                data={itemsBasket}
                keyExtractor={(basket) => basket.name}
                renderItem={({item}) => <BasketItem Item={item}/>}
            />
            {
                <TouchableOpacity
                    style={totalCount > 0 ? (styles.buttonWrap) : ({display: 'none'})}
                    onPress={() => getOrder()}
                >
                    <View style={styles.textWrap}>
                        <View style={{marginRight: 'auto'}}>
                            <Text style={styles.buttonText}>
                                Заказать
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.buttonText}>
                                {totalPrice} руб
                            </Text>
                        </View>
                    </View>

                </TouchableOpacity>
            }

        </View>
    )
}



const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWrap: {
        width: '70%',
        marginBottom: 40,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
    },
    textWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: THEME.COLOR_MAIN_DARK,
        fontFamily: 'open-bold',
    },
})
