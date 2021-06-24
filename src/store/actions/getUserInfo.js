import {GET_USERS_INFO} from "../types";
import firebase from "firebase";


export const getUserInfo = () => {

    const getUserInfoOnDB = async () => {
        const userUid = firebase.auth().currentUser.uid
        const db = firebase.firestore();
        const userInfo = db.collection("users").doc(userUid);

        const result = await userInfo.get().then((doc) => {

            if (doc.exists) {
                console.log("Document data:", doc.data());
                return doc.data()
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        return result
    }



    return async dispatch => {
        const userInfo = await getUserInfoOnDB()
        dispatch({
            type: GET_USERS_INFO,
            payload: userInfo
        })
    }
}