import {GET_MENU, LOAD_INDICATOR, ADD_TO_BASKET, DELETE_ITEM_FROM_BASKET} from '../types'

const initialState = {
    menu: [],
    basket: [],
    loading: false,
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU: return {
            ...state,
            menu: action.payload
        }
        case LOAD_INDICATOR: return {
            ...state,
            loading: action.payload
        }
        case ADD_TO_BASKET: return {
            ...state,
            basket: [action.payload]
        }
        case DELETE_ITEM_FROM_BASKET: return {
            ...state,
            basket: this.basket.filter((item => item !== action.payload.name))
        }
    }
    return state
}