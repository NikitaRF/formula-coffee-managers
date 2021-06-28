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
import {THEME} from "../theme";

export const PasswordReset = ({navigation}) => {

    const [state, setState] = useState({
        email: '',
        isLoading: false,
    })


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

    const passwordReset = () => {
        if (state.email === '') {
            return Alert.alert('Введите Ваш email')
        }
        firebase.auth().sendPasswordResetEmail(state.email).then( () => {
            Alert.alert('Запрос отправлен. Проверьте ваш почтовый ящик')
            console.log('Запрос отправлен')
            navigation.navigate('SignInScreen')
        }).catch((error) => {
            console.log(error)
            Alert.alert(`${error}`)
        })
    }



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo2.png')}
                />
                <Text style={styles.title}>Сброс пароля</Text>
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

                    <View style={styles.buttonWrap}>
                        <Button
                            color={THEME.COLOR_MAIN_DARK}
                            title='Отправить'
                            onPress={() => passwordReset()}
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
                    <Text
                        onPress={() => navigation.navigate('SignInScreen')}
                        style={styles.textBottom}
                    >
                        На страницу входа
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
        alignItems: 'center',
    },
    textBottom:{
        marginBottom: 20,
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

