import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from 'react-native';
import {THEME} from "./src/theme";

import {bootstrap} from "./src/bootstrap";

export default function App() {
    const [isReady, setIsReady] = useState(false)

    if(!isReady){
        return (
            <AppLoading
            startAsync={bootstrap}
            onFinish={() => setIsReady(true)}
            onError={(e) => console.log(e)}
            />
        )
    }





  return (
    <View style={styles.center}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-bold',
        color: THEME.COLOR_MAIN
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

