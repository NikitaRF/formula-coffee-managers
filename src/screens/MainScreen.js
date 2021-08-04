import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

import {THEME} from "../theme";
import firebase from "firebase";

export const MainScreen = () => {

    // выборка из БД, пример

    // const db = firebase.firestore();
    // db.collection('users').get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         let res = doc.data().historyOfOrder.filter(function (el) {
    //             return el.status === 'В обработке'
    //         })
    //         console.log(res)
    //     });
    // })

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo2.png')}
            />
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
})

