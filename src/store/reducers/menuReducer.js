import {GET_MENU} from '../types'

const initialState = {
    menu: [],
    isLoading: false,
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU: return {
            ...state,
            menu: action.payload
        }

    }

    return state
}