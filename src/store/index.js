import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {userReducer} from "./reducers/userReducer";
import {menuReducer} from "./reducers/menuReducer";


const rootReducer = combineReducers({
    user: userReducer,
    menu: menuReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
