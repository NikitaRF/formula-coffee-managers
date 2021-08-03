import {GET_USERS_INFO, USER_AUTH, USER_LOGOUT, ADD_ORDER, GET_ORDER} from '../types'

const initialState = {
    userAuth: null,
    userInfo: {},
    userHistoryOfOrder: [],
    isLoading: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_INFO: return {
            ...state,
            userInfo: action.payload
        }
        case USER_AUTH: return {
            ...state,
            userAuth: action.payload
        }
        case USER_LOGOUT: return {
            userAuth: null,
            userInfo: {},
            userHistoryOfOrder: [],
            isLoading: false,
        }
        case ADD_ORDER: return {
            ...state,
            userHistoryOfOrder: action.payload
        }
        case GET_ORDER: return {
            ...state,
            userHistoryOfOrder: action.payload
        }
    }

    return state
}