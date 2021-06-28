import {USER_AUTH} from "../types";
import firebase from "firebase";


export const userAuth = () => {
    return dispatch => {
        const userIsAuth = firebase.auth().currentUser.displayName
        dispatch({
            type: USER_AUTH,
            payload: userIsAuth
        })
    }
}