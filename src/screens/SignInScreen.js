import React, {useState} from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    ActivityIndicator,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import firebase from '../database/firebase';
import { Ionicons } from '@expo/vector-icons';

import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {userAuth} from "../store/actions/userAuth";


export const SignInScreen = ({navigation}) => {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        email: '',
        password: '',
        isLoading: false,
    })

    const [secure, setSecure] = useState(true);


    if(state.isLoading){
        return(
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
    }

    const updateInputVal = (val, prop) => {
        setState({...state, [prop]: val});
    }

    const userLogin = () => {
        if(state.email === '' && state.password === '') {
            Alert.alert('Введите логин и пароль')
        } else {
            setState({
                ...state,
                isLoading: true,
            })
            firebase
                .auth()
                .signInWithEmailAndPassword(state.email, state.password)
                .then((res) => {
                    // console.log(res)
                    console.log('Пользователь успешно авторизован')
                    setState({
                        isLoading: false,
                        email: '',
                        password: '',
                    })
                    dispatch(userAuth())
                    navigation.navigate('MenuDrawer')
                })
                .catch(error => {
                    console.log(error)
                    Alert.alert('Такого пользователя не существует')
                    setState({
                        isLoading: false,
                        email: '',
                        password: '',
                    })
                })
        }
    }




    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo2.png')}
                />
                <Text style={styles.title}>Вход</Text>
                <View style={styles.inputWrap}>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        placeholder='Email'
                        textContentType='emailAddress'
                        style={styles.input}
                        maxLength={35}
                        onChangeText={(val) => updateInputVal(val, 'email')}
                    />
                    <View style={styles.passwordView}>
                        <TextInput
                            autoCorrect={false}
                            autoCapitalize='none'
                            secureTextEntry={secure}
                            placeholder='Password'
                            textContentType='password'
                            style={styles.input}
                            maxLength={25}
                            onChangeText={(val) => updateInputVal(val, 'password')}
                        />

                        <Ionicons
                            style={styles.checkbox}
                            name={secure ? 'eye' : 'eye-off'}
                            size={24}
                            color={THEME.COLOR_MAIN_DARK}
                            onPress={() => setSecure(!secure)}
                        />

                    </View>

                    <View style={styles.buttonWrap}>
                        <Button
                            color={THEME.COLOR_MAIN_DARK}
                            title='Вход'
                            onPress={() => userLogin()}
                        />
                    </View>
                </View>
                <View style={styles.textBottomWrap}>
                    <Text
                        onPress={() => navigation.navigate('SignupScreen')}
                        style={styles.textBottom}
                    >
                        Нет аккаунта? Зарегистрироваться
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
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
    passwordView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox:{
        position: 'absolute',
        right: 5,
        opacity: 0.7,
    },
    focus: {
        display: 'none'
    }
})

