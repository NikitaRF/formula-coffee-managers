import React from "react";
import {Linking, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";


import {THEME} from "../theme";

export const ContactsScreen = () => {

    const dialCall = () => {
        let phoneNumber = '+79224280035';
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <View style={styles.center}>
            <View style={styles.infoBlock}>
                <Text style={styles.textTitle}>Адрес</Text>
                <Text style={styles.textBody}>628406, Сургут, Югорский тракт, дом 4, офис 5</Text>
            </View>

                <View style={{...styles.infoBlock, flexDirection: 'row', alignItems: 'center',}}>
                    <Text style={styles.textTitle}>Телефон</Text>
                    <TouchableOpacity onPress={dialCall}>
                        <Text style={{...styles.textBody, marginTop: 0,}}>+7 922 428 00 35</Text>
                    </TouchableOpacity>
                </View>

            <View style={styles.infoBlock}>
                <Text style={styles.textTitle}>Часы работы</Text>
                <Text style={styles.textBody}>Будние дни</Text>
            </View>



        </View>
    )
}



const styles = StyleSheet.create({
    center: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    infoBlock: {
        marginBottom: 20,
        width: '85%',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    textTitle: {
        fontFamily: 'open-bold',
        color: THEME.COLOR_MAIN_DARK
    },
    textBody: {
        marginTop: 15,
        fontFamily: 'open-regular',
        color: THEME.COLOR_MAIN_DARK
    },


})

