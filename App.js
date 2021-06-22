import React, { useState } from 'react';
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { bootstrap } from "./src/bootstrap";
import { MenuDrawer } from "./src/navigation/MenuDrawer";
import { SignupScreen } from "./src/screens/SignupScreen";


export default function App() {
    const [isLogin, setIsLogin] = useState(false)
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

    if(isLogin){
        return (
            <NavigationContainer>
                <MenuDrawer />
            </NavigationContainer>
        );
    } else {
        return (
            <NavigationContainer>
                <SignupScreen/>
            </NavigationContainer>
        )
    }

}




