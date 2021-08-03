import React, {useCallback, useEffect, useState} from "react";
import {
    ActivityIndicator,
    FlatList, RefreshControl,
    StyleSheet, Text, View,
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getOrder} from "../store/actions/getOrder";
import {HistoryOfBasketItem} from "../components/HistoryOfBasketItem";
import {getMenu} from "../store/actions/getMenu";
import {THEME} from "../theme";

export const HistoryScreen = () => {

    const [state, setState] = useState({
        isLoading: false
    })

    const dispatch = useDispatch()

    const asyncGetOrderInfo = async () => {
        setState({
            ...state,
            isLoading: true
        })
        const result = await dispatch(getOrder())
        setState({
            ...state,
            isLoading: false
        })
        return result
    }
    const historyData = useSelector(state => state.user.userHistoryOfOrder)
    // console.log('historyData:', historyData)

    useEffect(() => {
        asyncGetOrderInfo()
    }, [])

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(getOrder()).then(() => setRefreshing(false));
    }, []);


    if(state.isLoading){
        return(
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
    }

    return (
        <FlatList
            data={historyData}
            keyExtractor={(basket) => basket.name}
            refreshing={true}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            renderItem={({item}) => <HistoryOfBasketItem Item={item}/>}
        />
    )
}


const styles = StyleSheet.create({
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
})