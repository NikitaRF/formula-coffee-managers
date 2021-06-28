import * as Font from 'expo-font'
import {useDispatch, useSelector} from "react-redux";
import {userAuth} from "./store/actions/userAuth";

export const bootstrap = async () => {
    try {
        await Font.loadAsync({
            'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
            'open-regular': require('../assets/fonts/OpenSans-Regular.ttf')
        })
    } catch (e) {
        console.log('Error in bootstrap: ', e)
    }
}