import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {storageRef} from '../database/storage'
import firebase from "firebase";
import Image from 'react-native-image-progress';


import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {getMenu} from "../store/actions/getMenu";
import {setLoadIndicator} from "../store/actions/setLoadIndicator";
import {LoadIndicator} from "../components/LoadIndiacator";
import {MenuItem} from "../components/MenuItem";

export const MenuScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMenu('/menu/drinks/coffee'))
    }, [])

    const menuData = useSelector(state => state.menu.menu)

    console.log("это меню", menuData)

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

    // <View style={styles.center}>
    //     <Text style={styles.text}>Меню</Text>
    //     <Image
    //         style={styles.logo}
    //         //source={{uri: 'https://firebasestorage.googleapis.com/v0/b/formula-coffee-d6f54.appspot.com/o/img%2Flogo.png?alt=media&token=9ee2f3eb-21ff-4f54-a982-b47a5611973d'}}
    //         // onLoadStart={() => dispatch(setLoadIndicator(true))}
    //         // onLoadEnd={() => dispatch(setLoadIndicator(false))}
    //         indicator={LoadIndicator}
    //     />
    // </View>


    return (
        <View style={styles.center}>
            <FlatList
                data={menuData}
                keyExtractor={(menu) => menu.name}
                renderItem={({item}) => <MenuItem Item={item} /> }
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

