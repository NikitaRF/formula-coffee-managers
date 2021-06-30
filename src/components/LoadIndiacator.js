import {ActivityIndicator, StyleSheet, View} from "react-native";
import {THEME} from "../theme";
import React from "react";


export const LoadIndicator = () => {

    return (
        <View style={styles.preloader}>
            <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
        </View>
    )
}

const styles = StyleSheet.create({
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

