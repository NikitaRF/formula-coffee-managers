import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, ActivityIndicator, TextInput, Button, ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { AntDesign } from '@expo/vector-icons';


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

                <View style={styles.inputContainer}>
                    <View style={styles.inputTitleWrap}>
                        <Text style={styles.inputTitle}>Имя</Text>
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            autoCorrect={false}
                            value={state.firstName}
                            placeholder='Имя'
                            style={styles.input}
                            maxLength={40}
                            defaultValue={userData.firstName}
                            onChangeText={(val) => updateInputVal(val, 'firstName')}
                        />
                        <AntDesign
                            name="checksquare"
                            size={24}
                            style={styles.allowIcon}
                            color={THEME.COLOR_MAIN_DARK}
                            onPress={() => saveChanges('firstName', state.firstName)}
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTitleWrap}>
                        <Text style={styles.inputTitle}>Фамилия</Text>
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            autoCorrect={false}
                            value={state.lastName}
                            placeholder='Фамилия'
                            style={styles.input}
                            maxLength={40}
                            defaultValue={userData.lastName}
                            onChangeText={(val) => updateInputVal(val, 'lastName')}
                        />
                        <AntDesign
                            name="checksquare"
                            size={24}
                            style={styles.allowIcon}
                            color={THEME.COLOR_MAIN_DARK}
                            onPress={() => saveChanges('lastName', state.lastName)}
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTitleWrap}>
                        <Text style={styles.inputTitle}>Email</Text>
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            autoCorrect={false}
                            value={state.email}
                            placeholder='Email'
                            style={styles.input}
                            maxLength={40}
                            defaultValue={userData.email}
                            onChangeText={(val) => updateInputVal(val, 'email')}
                        />
                        <AntDesign
                            name="checksquare"
                            size={24}
                            style={styles.allowIcon}
                            color={THEME.COLOR_MAIN_DARK}
                            onPress={() => saveChanges('email', state.email)}
                        />
                    </View>
                </View>

                <Text>{userData.firstName}</Text>
                <Text>{userData.lastName}</Text>
                <Text>{userData.email}</Text>
            </View>

    )
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
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
    inputContainer: {
        width: '75%',
        alignItems: 'center',
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
        marginTop: 20,
    },
    inputTitleWrap: {
        marginRight: 'auto'
    },
    inputTitle: {
        marginTop: 20,

    },
    allowIcon: {
        position: 'absolute',
        right: 5,
        opacity: 0.7,
    },

})