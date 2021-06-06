import React from "react";
import {Platform, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

import {THEME} from "../theme";

export const MainScreen = () => {

    return (
        <View style={styles.center}>
            <Text style={styles.text}>Главная</Text>
            <StatusBar style="auto" />
        </View>
    )
}



const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-bold',
        color: THEME.COLOR_MAIN
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

