import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {THEME} from "../theme";

export const MenuScreen = () => {

    return (
        <View style={styles.center}>
            <Text style={styles.text}>Меню</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-bold',
        color: THEME.COLOR_MAIN_DARK
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

