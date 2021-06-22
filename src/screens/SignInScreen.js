import React from "react";
import {Button, Image, StyleSheet, Text, TextInput, View} from "react-native";


import {THEME} from "../theme";

export const SignInScreen = () => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo2.png')}
            />
            <Text style={styles.title}>Вход</Text>
            <View style={styles.inputWrap}>
                <TextInput autoCorrect={false} placeholder='Email' style={styles.input}/>
                <TextInput autoCorrect={false} placeholder='Password' style={styles.input}/>
                <View style={styles.buttonWrap}>
                    <Button color={THEME.COLOR_MAIN_DARK} title='Вход'/>
                </View>
            </View>
            <View style={styles.textBottomWrap}>
                <Text
                    style={styles.textBottom}
                >
                    Нет аккаунта? Зарегистрироваться
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
})

