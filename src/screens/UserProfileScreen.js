import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, ActivityIndicator, TextInput, Button} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";


import {THEME} from "../theme";
import {getUserInfo} from "../store/actions/getUserInfo";


export const UserProfileScreen = () => {

    const userUid = firebase.auth().currentUser.uid
    const db = firebase.firestore();
    const userInfo = db.collection("users").doc(userUid);

    const [state, setState] = useState({
        isLoading: false
    })

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

    useEffect(() => {
        asyncGetUserInfo()
    }, [])

    const userData = useSelector(state => state.user.userInfo)
    console.log('Мы получили данные о пользователе', userData)
    console.log('Локальное состояние', state)


    if(state.isLoading){
        return(
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
    }

    const updateInputVal = (val, prop) => {
        setState({
            ...state,
            [prop]: val
        });
    }

    const saveChanges = async (key, data) => {
        await userInfo.set({
            [key]: data
        }, { merge: true });
        asyncGetUserInfo()
    }

    return (
        <View style={styles.center}>
            <Text>{firebase.auth().currentUser.displayName}</Text>
            <TextInput />


            <Text>Имя</Text>
            <TextInput
                autoCorrect={false}
                value={state.firstName}
                placeholder='Имя'
                style={styles.input}
                maxLength={40}
                defaultValue={userData.firstName}
                onChangeText={(val) => updateInputVal(val, 'firstName')}
            />
            <Button
                color={THEME.COLOR_MAIN_DARK}
                title='Сохранить'
                onPress={() => saveChanges('firstName', state.firstName)}
            />


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
    input: {

    }
})