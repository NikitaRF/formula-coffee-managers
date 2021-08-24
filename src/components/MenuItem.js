import React, {useEffect, useState} from "react";
import {RefreshControl, Text, TouchableOpacity, View, StyleSheet, Dimensions} from "react-native";
import {THEME} from "../theme";
import {LoadIndicator} from "./LoadIndiacator";
import Image from "react-native-image-progress";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";


export const MenuItem = ({Item, path}) => {

    const dispatch = useDispatch()

    const setAvaibleToggle = async () => {
        const db = firebase.firestore();
        const item = db.collection(path).doc('Steyk iz govyadiny');
        await item.set({
            avaible: !Item.avaible
        }, {merge: true});
    }


    return (
        <View style={styles.mainWrap }>

            <View style={styles.imgBlock}>
                <Image
                    style={styles.logo}
                    // source={{uri: 'https://firebasestorage.googleapis.com/v0/b/formula-coffee-d6f54.appspot.com/o/img%2Flogo.png?alt=media&token=9ee2f3eb-21ff-4f54-a982-b47a5611973d'}}
                    // onLoadStart={() => dispatch(setLoadIndicator(true))}
                    // onLoadEnd={() => dispatch(setLoadIndicator(false))}
                    source={{uri: Item.photo}}
                    indicator={LoadIndicator}
                    resizeMode='cover'
                />
            </View>

            <View style={styles.textBlock}>
                <Text style={styles.textTitle}>{Item.name}</Text>
                <Text style={styles.textDescription}>{Item.description}</Text>
                <Text style={styles.textPrice}>{Item.weight} гр / {Item.price} руб</Text>
                <View style={Item.avaible ? styles.buttonWrap : styles.buttonWrapDark}>
                    <View>
                        {Item.avaible ? (
                            <TouchableOpacity onPress={() => setAvaibleToggle()}>
                                <Text style={styles.buttonText}>На стоп</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => setAvaibleToggle()}>
                                <Text style={styles.buttonTextLight}>Появилось</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainWrap: {
        width: Dimensions.get('window').width,
        marginVertical: 10,
        flexDirection: 'row',
        maxHeight: 150,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 10,

    },
    imgBlock: {
        width: '30%'

    },
    logo: {
        minHeight: 70,
        width: "100%",
        height: "100%",
    },
    textBlock: {
        flex: 1,
        marginHorizontal: 20,

        // borderStyle: 'solid',
        // borderWidth: 1,
    },
    textTitle: {
        fontFamily: 'open-bold',
        color: THEME.COLOR_MAIN_DARK,
        marginBottom: 10,
        marginTop: 5,
    },
    textDescription: {
        fontFamily: 'open-regular',
        color: THEME.COLOR_MAIN_DARK,
    },
    textPrice: {
        fontFamily: 'open-bold',
        color: THEME.COLOR_MAIN_DARK,
    },
    buttonWrap: {
        opacity: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        marginTop: 'auto',
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginBottom: 5,

    },
    buttonWrapDark: {
        opacity: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        marginTop: 'auto',
        backgroundColor: THEME.COLOR_MAIN_DARK,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    buttonText: {
        color: THEME.COLOR_MAIN_DARK,
        fontFamily: 'open-regular',
        fontSize: 16,
    },
    buttonTextLight: {
        color: THEME.COLOR_MAIN_LIGHT,
        fontFamily: 'open-regular',
        fontSize: 16,
    },
    buttonCount: {
        flexDirection: 'row',
    },
    wrapCount: {
        paddingHorizontal: 25,

    },
    textCount: {
        fontFamily: 'open-bold',
        fontSize: 18,
        color: THEME.COLOR_MAIN_DARK,
    },
})