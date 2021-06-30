import firebase from "firebase";
import {GET_MENU} from "../types";


export const getMenu = (path) => {
    const db = firebase.firestore();
    const menu = db.collection(path);

    const getMenuFirebase = async () => {
        const result = await menu.get().then((querySnapshot) => {
            let arr = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                // arr.push({[doc.id]: doc.data()})
                arr.push(doc.data())
            });
            return arr

        }).catch((error) => {
            console.log("Error getting document:", error);
        })
        return result
    }





    return async dispatch => {
        const menuInfo = await getMenuFirebase()
        dispatch({
            type: GET_MENU,
            payload: menuInfo
        })
    }

}
