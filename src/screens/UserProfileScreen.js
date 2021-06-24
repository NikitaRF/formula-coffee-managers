import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";


import {THEME} from "../theme";
import {getUserInfo} from "../store/actions/getUserInfo";


export const UserProfileScreen = () => {

    const [state, setState] = useState({
        isLoading: false
    })

    const dispatch = useDispatch()

    const asyncGetUserInfo = async () => {
        setState({
            isLoading: true
        })
        const result = await dispatch(getUserInfo())
        setState({
            isLoading: false
        })
        return result
    }

    useEffect(() => {
        asyncGetUserInfo()
    }, [])

    const userData = useSelector(state => state.user.userInfo)
    console.log('Мы получили данные о пользователе', userData)





    if(state.isLoading){
        return(
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
    }

    return (
        <View style={styles.center}>
            <Text>{firebase.auth().currentUser.displayName}</Text>
            <Text>{userData.firstName}</Text>
            <Text>{userData.lastName}</Text>
            <Text>{userData.email}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
})