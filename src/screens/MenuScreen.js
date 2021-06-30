import React, {useEffect, useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {storageRef} from '../database/storage'
import firebase from "firebase";

import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {getMenu} from "../store/actions/getMenu";
import {setLoadIndicator} from "../store/actions/setLoadIndicator";
import {LoadIndicator} from "../components/LoadIndiacator";

export const MenuScreen = () => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getMenu())
    // }, [])
    //
    // const menuData = useSelector(state => state.menu.menu)
    //
    // console.log("это меню", menuData)













// Points to 'images'
    var imagesRef = storageRef.child('img');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
    var fileName = 'logo.png';
    var spaceRef = imagesRef.child(fileName);


// File path is 'images/space.jpg'
    var path = spaceRef.fullPath;

// File name is 'space.jpg'
    var name = spaceRef.name;

    const [load, setLoad] = useState(false)


    const loading = useSelector(state => state.menu.loading)
    //console.log("Loading", loading)
    console.log("Loading", load)


    if (load == true) {
        return <LoadIndicator />
    }

    // useEffect(() => {
    //     dispatch(setLoadIndicator(true))
    // })





    return (
        <View style={styles.center}>
            <Text style={styles.text}>Меню</Text>
            <Image
                style={styles.logo}
                source={{uri: 'https://firebasestorage.googleapis.com/v0/b/formula-coffee-d6f54.appspot.com/o/img%2Flogo.png?alt=media&token=9ee2f3eb-21ff-4f54-a982-b47a5611973d'}}
                // onLoadStart={() => dispatch(setLoadIndicator(true))}
                // onLoadEnd={() => dispatch(setLoadIndicator(false))}
                onLoadStart={() => setLoad(true)}
                onLoadEnd={() => setLoad(false)}

            />
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

