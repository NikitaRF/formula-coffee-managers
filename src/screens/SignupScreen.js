import React, {useState} from "react";
import {Alert, Button, Image, StyleSheet, Text, TextInput, View, ActivityIndicator} from "react-native";
import firebase from '../database/firebase';



import {THEME} from "../theme";

export const SignupScreen = ({navigation}) => {

    const db = firebase.firestore();

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isLoading: false
    })

    if(state.isLoading){
        return(
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
    }


    const registerUser = () => {
        if(state.email === '' && state.password === '' && state.firstName === '' && state.lastName === '') {
            Alert.alert('Введите все данные для регистрации')
        } else {
            setState({
                ...state,
                isLoading: true,
            })
            firebase
                .auth()
                .createUserWithEmailAndPassword(state.email, state.password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: `${state.firstName} ${state.lastName}`,
                    })
                    console.log('Пользователь успешно создан');

                    // заносим данные о пользователе в БД
                    db.collection("users").doc(res.user.uid).set({
                        id: res.user.uid,
                        firstName: state.firstName,
                        lastName: state.lastName,
                        email: state.email,
                    }).then(() => {
                        console.log("Document successfully written!2222");
                    })

                    // очищаем состояние
                    setState({
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        isLoading: false
                    })

                    navigation.navigate('SignInScreen')
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('Этот адрес email уже зарегистрирован')
                        console.log('Этот адрес email уже зарегистрирован');
                        setState({
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            isLoading: false
                        })
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('Этот адрес email невалидный');
                    }

                    console.error(error);
                });
        }
    }

    const updateInputVal = (val, prop) => {
        setState({...state, [prop]: val});
    }




    console.log('После', state)

    console.log('111')
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo2.png')}
            />
            <Text style={styles.title}>Регистрация</Text>
            <View style={styles.inputWrap}>
                <TextInput
                    autoCorrect={false}
                    value={state.firstName}
                    placeholder='Имя'
                    style={styles.input}
                    onChangeText={(val) => updateInputVal(val, 'firstName')}
                />
                <TextInput
                    autoCorrect={false}
                    placeholder='Фамилия'
                    style={styles.input}
                    onChangeText={(val) => updateInputVal(val, 'lastName')}
                />
                <TextInput
                    autoCorrect={false}
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={(val) => updateInputVal(val, 'email')}
                />
                <TextInput
                    autoCorrect={false}
                    placeholder='Password'
                    style={styles.input}
                    onChangeText={(val) => updateInputVal(val, 'password')}
                />
                <View style={styles.buttonWrap}>
                    <Button color={THEME.COLOR_MAIN_DARK} title='Зарегистрироваться' onPress={() => registerUser()}/>
                </View>
            </View>
            <View style={styles.textBottomWrap}>
                <Text
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={styles.textBottom}
                >
                    Есть аккаунт? Вход
                </Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        marginTop: '35%',
    },
    logo: {
        width: 95,
        height: 120,
    },
    title: {
        marginTop: 10,
        fontFamily: 'open-bold',
        color: THEME.COLOR_MAIN_DARK
    },
    inputWrap:{
        width: '75%',
        alignItems: 'center',
    },
    input:{
        borderStyle: 'solid',
        borderColor: THEME.COLOR_MAIN_DARK,
        borderBottomWidth: 1,
        width: '100%',
        height: 45,
        marginTop: 20,
    },
    buttonWrap:{
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
    },
    textBottomWrap:{
        marginTop: 20,
    },
    textBottom:{
        fontFamily: 'open-bold',
        color: THEME.COLOR_MAIN_DARK
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

