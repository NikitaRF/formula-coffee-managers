import React, {useEffect, useState} from "react";
import {
    ActivityIndicator, Alert,
    FlatList,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {BasketItem} from "../components/BasketItem";
import {THEME} from "../theme";
import {AntDesign} from "@expo/vector-icons";
import {getUserInfo} from "../store/actions/getUserInfo";
import {userAuth} from "../store/actions/userAuth";
import firebase from "firebase";
import {addOrder} from "../store/actions/addOrder";

export const BasketScreen = () => {

    const deliveryPrice = 250
    const itemsBasket = useSelector(state => state.menu.basket)
    const [modal, setModal] = useState(false)

    // Начало Счетчик товаров в Корзине
    const [totalCount, setTotalCount] = useState()

    const getBasketItemCount = () => {
        let result = 0
        itemsBasket.forEach((el) => {
            result += el.count
        })
        setTotalCount(result)
        console.log("totalCount", totalCount)
    }

    // Начало Считаем итоговую стоимость
    const [totalPrice, setTotalPrice] = useState()
    const getBasketTotalPrice = () => {
        let result = 0
        itemsBasket.forEach((el) => {
            result += el.count * el.price
        })
        setTotalPrice(result)
        console.log("totalPrice", totalPrice)
    }
    // Конец Считаем итоговую стоимость

    useEffect(() => {
        getBasketItemCount()
        getBasketTotalPrice()
    }, [itemsBasket])
    // Конец Счетчик товаров в Корзине

    const getOrder = () => {
        setModal(true)
    }

    const checkOrder = () => {
        dispatch(addOrder({
            Date: 22,
            timeToDelivery: 22,
            address: 'dddd',
            firstName: 1,
            lastName: 2,
            phone: 333,
            email: 22,
            order: itemsBasket,
            totalPrice,
            deliveryPrice,
            totalResult: totalPrice + deliveryPrice,
            countOfPerson,
            comment: state.comment,
        }))
    }

    const historyOfOrder = useSelector(state => state.user.userHistoryOfOrder)
    console.log(historyOfOrder)

    //console.log('Баскет скрин:', itemsBasket)

    const [state, setState] = useState({
        isLoading: false,
        comment: '',
    })

    useEffect(() => {
        asyncGetUserInfo()
    }, [])

    const dispatch = useDispatch()
    const asyncGetUserInfo = async () => {
        setState({
            ...state,
            isLoading: true
        })
        const result = await dispatch(getUserInfo())
        setState({
            ...state,
            isLoading: false
        })
        return result
    }

    const userData = useSelector(state => state.user.userInfo)

    const updateInputVal = (val, prop) => {
        setState({
            ...state,
            [prop]: val
        });
    }

    const [countOfPerson, setCountOfPerson] = useState(1)
    const plusPerson = () => {
        setCountOfPerson(countOfPerson + 1)
        if (countOfPerson == 12) {
            setCountOfPerson(12)
        }
    }
    const minusPerson = () => {
        setCountOfPerson(countOfPerson - 1)
        if (countOfPerson == 1) {
            setCountOfPerson(1)
        }
    }

    if(state.isLoading){
        return(
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
    }

    const saveChanges = async (key, data) => {
        if (firebase.auth().currentUser) {
            const db = firebase.firestore();
            const userInfo = db.collection("users").doc(firebase.auth().currentUser.uid);

            setState({
                isLoading: true,
            })

            await userInfo.set({
                [key]: data
            }, {merge: true});

            setState({
                isLoading: false,
            })
            asyncGetUserInfo()
        }
    }

    // Модалка

    if (modal) {
        return (
        <Modal visible={modal} animationType='slide' transparent={false}>
            <ScrollView contentContainerStyle={styles.modalWrap}>
                <View><Text>Адрес</Text></View>
                <TextInput />
                <View>
                    <Text style={styles.itemTitle}>Комментарий</Text>
                    <TextInput
                        color={THEME.COLOR_MAIN_DARK}
                        multiline = {true}
                        autoCorrect={false}
                        placeholder='Ваши пожелания'
                        maxLength={255}
                        numberOfLines = {4}
                        style={styles.modalInputComment}
                        onChangeText={(text) => setState({...state, comment: text})}
                        value={state.comment}
                    />
                </View>
                <View><Text style={styles.itemTitle}>Телефон</Text></View>
                <View style={styles.inputWrap}>
                    <TextInput
                        color={THEME.COLOR_MAIN_DARK}
                        autoCorrect={false}
                        value={state.phone}
                        placeholder='Телефон'
                        style={styles.input}
                        maxLength={11}
                        defaultValue={userData.phone}
                        keyboardType='phone-pad'
                        onChangeText={(val) => updateInputVal(val, 'phone')}
                    />
                    <AntDesign
                        name="checksquare"
                        size={24}
                        style={styles.allowIcon}
                        color={THEME.COLOR_MAIN_DARK}
                        onPress={() => saveChanges('phone', state.phone)}
                    />
                </View>


                <View style={styles.modalPersonWrap}>
                    <Text style={styles.modalPersonTitle}>Количество персон</Text>
                    <View>
                        <View style={styles.buttonCount}>
                            <AntDesign
                                name="minuscircle"
                                size={24}
                                color={THEME.COLOR_MAIN_DARK}
                                onPress={() => minusPerson()}
                            />
                            <View style={styles.wrapCount}>
                                <Text style={styles.textCount}>{countOfPerson}</Text>
                            </View>
                            <AntDesign
                                name="pluscircle"
                                size={24}
                                color={THEME.COLOR_MAIN_DARK}
                                onPress={() => plusPerson()}
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.itemTitle}>Сумма {totalPrice} руб</Text>
                <Text style={styles.itemTitle}>Доставка {deliveryPrice} руб</Text>
                <View style={styles.total}><Text style={{...styles.itemTitle, marginTop: 50, fontSize: 20}}>Итого {totalPrice + deliveryPrice} руб</Text></View>
                <View style={styles.modalButtons}>

                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => setModal(false)}
                    >
                        <View style={styles.textWrap}>
                            <Text style={styles.buttonText}>
                                Отменить
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => checkOrder()}
                    >
                        <View style={styles.textWrap}>
                            <Text style={styles.buttonText}>
                                Заказать
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </Modal>
    )}

    // Скрин

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
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    buttonWrap: {
        width: '70%',
        marginBottom: 40,
        paddingHorizontal: 25,
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
    modalWrap: {
        marginTop: 50,
        marginHorizontal: 25,
    },
    modalPersonWrap: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
    },
    modalPersonTitle: {
        color: THEME.COLOR_MAIN_DARK,
        fontFamily: 'open-regular',
        marginRight: 'auto',
        fontSize: 18,
    },
    modalButtons: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    modalButton: {
        paddingHorizontal: 25,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
    },
    buttonCount: {
        flexDirection: 'row',
    },
    wrapCount: {
        paddingHorizontal: 15,
    },
    textCount: {
        fontFamily: 'open-bold',
        fontSize: 18,
        color: THEME.COLOR_MAIN_DARK,
    },
    inputWrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderStyle: 'solid',
        borderColor: THEME.COLOR_MAIN_DARK,
        borderBottomWidth: 1,
        width: '100%',
        height: 45,
    },
    allowIcon: {
        position: 'absolute',
        right: 5,
        opacity: 0.7,
    },
    itemTitle: {
        color: THEME.COLOR_MAIN_DARK,
        fontFamily: 'open-bold',
        fontSize: 15,
        marginBottom: 10,

    },
    total: {
        alignItems: 'center'
    },
    modalInputComment: {
        borderWidth: 1,
        borderColor: THEME.COLOR_MAIN_DARK,
        marginBottom: 20,
        paddingVertical: 20,
    }
})
