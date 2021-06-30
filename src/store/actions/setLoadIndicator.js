import {LOAD_INDICATOR} from "../types";

export const setLoadIndicator = (bool) => {
    return {


            type: LOAD_INDICATOR,
            payload: bool,

    }
}