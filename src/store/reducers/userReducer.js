import {GET_USERS_INFO} from '../types'

const initialState = {
    userInfo: {},
    userHistoryOfOrder: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_INFO: return {
            ...state,
            userInfo: action.payload
        }

    }

    return state
}