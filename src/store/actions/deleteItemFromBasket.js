import {DELETE_ITEM_FROM_BASKET} from "../types";

export const deleteItemFromBasket = (name) => {
    return {

        type: DELETE_ITEM_FROM_BASKET,
        payload: name
    }
}