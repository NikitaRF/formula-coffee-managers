import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

import {THEME} from "../theme";

export const MainScreen = () => {

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

