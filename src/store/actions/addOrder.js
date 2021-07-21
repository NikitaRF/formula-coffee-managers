import {ADD_ORDER} from "../types";

export const addOrder = (data) => {
    return {

        type: ADD_ORDER,
        payload: data

    }
}