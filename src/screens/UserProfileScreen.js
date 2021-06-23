import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import firebase from "firebase";
import {THEME} from "../theme";


export const UserProfileScreen = () => {
    const userUid = firebase.auth().currentUser.uid
    const db = firebase.firestore();
    const userInfo = db.collection("users").doc(userUid);

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        isLoading: false
    })

    if(state.isLoading){
        return(
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
    }



    const getUserInfo = () => {
        userInfo.get().then((doc) => {
            setState({
                ...state,
                isLoading: true,
            })
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setState({
                    firstName: doc.data().firstName,
                    lastName: doc.data().lastName,
                    email: doc.data().email,
                    isLoading: false,
                })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }


    useEffect(() => {
      console.log(121212)

    }, [])


    return (
        <View style={styles.center}>
            <Text>{firebase.auth().currentUser.displayName}</Text>
            <Text>{state.firstName}</Text>
            <Text>{state.lastName}</Text>
            <Text>{state.email}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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