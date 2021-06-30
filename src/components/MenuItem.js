import React from "react";
import {ImageBackground, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {THEME} from "../theme";
import {LoadIndicator} from "./LoadIndiacator";
import Image from "react-native-image-progress";

export const MenuItem = ({Item}) => {
    return (
        <View style={styles.center}>
            <Text style={styles.text}>{Item.name}</Text>
            <Image
                style={styles.logo}
                // source={{uri: 'https://firebasestorage.googleapis.com/v0/b/formula-coffee-d6f54.appspot.com/o/img%2Flogo.png?alt=media&token=9ee2f3eb-21ff-4f54-a982-b47a5611973d'}}
                // onLoadStart={() => dispatch(setLoadIndicator(true))}
                // onLoadEnd={() => dispatch(setLoadIndicator(false))}
                source={{uri: Item.photo}}
                indicator={LoadIndicator}
            />
            <Text>{Item.description}</Text>
            <Text>{Item.price} руб.</Text>
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
    },
    logo: {
        width: 95,
        maxWidth: '50%',
        height: 120,
    },
})