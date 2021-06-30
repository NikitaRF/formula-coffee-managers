import {GET_MENU, LOAD_INDICATOR} from '../types'

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
    }
    return state
}