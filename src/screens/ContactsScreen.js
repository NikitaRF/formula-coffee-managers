import React from "react";
import {Linking, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";


import {THEME} from "../theme";

export const ContactsScreen = () => {

    const dialCall = () => {
        const phoneNumber = '+79224280035';
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const sendMail = () => {
        const email = 'info@formula-coffee.ru';
        Linking.openURL(`mailto:${email}`);
    };

    return (
        <View style={styles.center}>
            <View style={styles.infoBlock}>
                <Text style={styles.textTitle}>Адрес</Text>
                <Text style={styles.textBody}>628406, Сургут</Text>
                <Text style={styles.textBody}>Югорский тракт 4, офис 5</Text>
            </View>

            <View style={{...styles.infoBlock, flexDirection: 'row', alignItems: 'center',}}>
                <Text style={styles.textTitle}>Телефон</Text>
                <TouchableOpacity onPress={dialCall}>
                    <Text style={{...styles.textBody, marginTop: 0,}}>+7 922 428 00 35</Text>
                </TouchableOpacity>
            </View>

            <View style={{...styles.infoBlock, flexDirection: 'row', alignItems: 'center',}}>
                <Text style={styles.textTitle}>Email</Text>
                <TouchableOpacity onPress={sendMail}>
                    <Text style={{...styles.textBody, marginTop: 0,}}>info@formula-coffee.ru</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoBlock}>
                <Text style={styles.textTitle}>Часы работы</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <Text style={styles.textBody}>Будние дни</Text>
                    <Text style={styles.textBody}>8:30 - 23:00</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 20}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.textBody}>Завтраки</Text>
                        <Text style={styles.textBody}>9:00 - 16:00</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.textBody}>Бизнес-ланч</Text>
                        <Text style={styles.textBody}>12:00 - 17:00</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <Text style={styles.textBody}>Выходные дни</Text>
                    <Text style={styles.textBody}>7:30 - 23:00</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.textBody}>Завтраки</Text>
                        <Text style={styles.textBody}>7:30 - 16:00</Text>
                    </View>
                </View>
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

