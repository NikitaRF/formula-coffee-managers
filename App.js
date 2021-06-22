import React, { useState } from 'react';
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { bootstrap } from "./src/bootstrap";
import { MenuDrawer } from "./src/navigation/MenuDrawer";
import { SignInScreen } from "./src/screens/SignInScreen";
import { SignupScreen } from "./src/screens/SignupScreen";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff',
    },

};


export default function App() {
    const [isLogin, setIsLogin] = useState(false)
    const [isReady, setIsReady] = useState(false)

    const Stack = createStackNavigator ( ) ;

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
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                }} initialRouteName="SignInScreen">
                    <Stack.Screen name="SignInScreen" component={SignInScreen} />
                    <Stack.Screen name="SignupScreen" component={SignupScreen} />
                    <Stack.Screen name="MenuDrawer" component={MenuDrawer} />
                </Stack.Navigator>
            </NavigationContainer>
            // <NavigationContainer>
            //     <SignupScreen/>
            // </NavigationContainer>
        )
    }

}




