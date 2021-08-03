import {CLEAR_BASKET} from "../types";

export const clearBasket = () => {
    return {
        type: CLEAR_BASKET,
        payload: [],
    }
}