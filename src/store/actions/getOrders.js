import firebase from "firebase";
import {GET_ORDERS} from "../types";


export const getOrders = (status) => {
    const db = firebase.firestore();
    const path = db.collection('orders').where('status', '==', `${status}`)

    const getOrdersFirebase = async () => {
        const result = await path.get().then((querySnapshot) => {
            let sortOrders = []
            let allOrders = []

            querySnapshot.forEach((doc) => {
                allOrders.push(doc.data())
            });
            sortOrders = allOrders.sort(function (el1, el2) {
                return el1.timestamp < el2.timestamp
            })
            return sortOrders
        }).catch((error) => {
            console.log("Error getting document:", error);
        })
        return result
    }

    return async dispatch => {
        const orders = await getOrdersFirebase()
        dispatch({
            type: GET_ORDERS,
            payload: orders
        })
    }
}
