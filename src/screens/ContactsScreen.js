import React, {useState} from "react";
import {Linking, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions} from "react-native";
import MapView, {Marker} from 'react-native-maps';

import {THEME} from "../theme";


const { width, height } = Dimensions.get('window');
const heightNormal = 200

const ASPECT_RATIO = width / height;
const LATITUDE = 61.272759;
const LONGITUDE = 73.349626;
const LATITUDE_DELTA = 0.001747;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export const ContactsScreen = () => {

    const dialCall = () => {
        const phoneNumber = '+79224280035';
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const sendMail = () => {
        const email = 'info@formula-coffee.ru';
        Linking.openURL(`mailto:${email}`);
    };

    const [height, setHeight] = useState(heightNormal)

    const enlargeMap = () => {
        if (height === heightNormal) {
            setHeight(Dimensions.get('window').height)
        } else {
            setHeight(heightNormal)
        }
    }


    return (
        <View
            style={styles.center}
        >
            <View style={styles.mapContainer}>
                <MapView
                    onPress={() => enlargeMap()}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                    style={{...styles.map, height: height}}
                >
                    <Marker
                        coordinate={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        }}
                    />
                </ MapView>
            </View>

            <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 100,}}>

                <View style={styles.infoBlock}>
                    <View style={{borderBottomWidth: 1, borderColor: THEME.COLOR_MAIN_DARK, width: '100%', paddingBottom: 10 }}>
                        <Text style={styles.textTitle}>Адрес</Text>
                    </View>

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
                    <View style={{borderBottomWidth: 1, borderColor: THEME.COLOR_MAIN_DARK, width: '100%',  paddingBottom: 10  }}>
                        <Text style={styles.textTitle}>Часы работы</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <Text style={{...styles.textBody, fontFamily: 'open-bold',}}>Будние дни</Text>
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
                        <Text style={{...styles.textBody, fontFamily: 'open-bold',}}>Выходные дни</Text>
                        <Text style={styles.textBody}>7:30 - 23:00</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.textBody}>Завтраки</Text>
                            <Text style={styles.textBody}>7:30 - 16:00</Text>
                        </View>
                    </View>
                </View>



            </ScrollView>

        </View>
    )
}



const styles = StyleSheet.create({
    center: {
        flex: 1,
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
        color: THEME.COLOR_MAIN_DARK,

    },
    textBody: {
        marginTop: 15,
        fontFamily: 'open-regular',
        color: THEME.COLOR_MAIN_DARK
    },
    mapContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    map: {
        width: Dimensions.get('window').width,
        height: 200,
    },


})

