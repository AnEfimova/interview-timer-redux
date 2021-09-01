import {MAKE_CANDIDATE, UPDATE_CANDIDATE} from "../types.js";
import {v4} from "uuid";

export const initialState = {
    current : {
        uuid: null,
        name: "",
        planUuid: null
    },
    list: []
}

export function reducer (state = initialState, action) {
    switch (action.type) {
        case MAKE_CANDIDATE:
            return state
        case UPDATE_CANDIDATE:
            return state
        default: return state
    }
}