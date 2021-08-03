import {GET_ORDER} from "../types";
import firebase from "firebase";


export const getOrder = () => {

    const getOrderInfoOnDB = async () => {
        const userUid = firebase.auth().currentUser.uid
        const db = firebase.firestore();
        const userInfo = db.collection("users").doc(userUid);

        const result = await userInfo.get().then((doc) => {

            if (doc.exists) {
                // console.log("Document data:", doc.data().historyOfOrder);
                return doc.data().historyOfOrder
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
        const dataOrder = await getOrderInfoOnDB()
        dispatch({
            type: GET_ORDER,
            payload: dataOrder
        })
    }
}