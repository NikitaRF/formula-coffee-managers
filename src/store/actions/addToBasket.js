import {ADD_TO_BASKET} from "../types";

export const addToBasket = (obj, count) => {
    return {

        type: ADD_TO_BASKET,
        payload: {
            ...obj,
            count: count,
        },

    }
}