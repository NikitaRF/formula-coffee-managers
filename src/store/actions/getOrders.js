import firebase from "firebase";
import {GET_ORDERS} from "../types";


export const getOrders = (status) => {
    const db = firebase.firestore();
    const path = db.collection('users')

    const getOrdersFirebase = async () => {
        const result = await path.get().then((querySnapshot) => {
            let sortOrders = []
            let allOrders = []
            querySnapshot.forEach((doc) => {
                let res = doc.data().historyOfOrder.filter(function (el) {
                    return el.status === status
                })

                res.forEach((el) => {
                    allOrders.push(el)
                })
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
