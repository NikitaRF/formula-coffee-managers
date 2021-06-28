import React, { useState } from 'react';
import AppLoading from "expo-app-loading";
import {Provider} from "react-redux";

import { bootstrap } from "./src/bootstrap";
import store from './src/store';
import {Root} from "./src/components/Root";


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
            <Provider store={store}>
               <Root/>
            </Provider>
        )
}




