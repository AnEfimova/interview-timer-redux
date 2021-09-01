import {ADD_PLAN, DELETE_PLAN, RESET_CURRENT_PLAN, SET_PLAN, UPDATE_PLAN} from "../types.js";

export const initialState = {
    current : {
        uuid : null,
        name : "",
        time : 0,
        blocks : [{
            name : "",
            time : 0,
            questions : []
        }]
    },
    list : []
}

export function reducer (state = initialState, action) {
    const { payload } = action
    switch (action.type) {
        case SET_PLAN:
            return {
                ...state,
                current: {
                    ...payload
                    }
                }
        case ADD_PLAN:
            return {
                ...state,
                list: state.list.concat(state.current)
        }
        case UPDATE_PLAN:
            const index = state.list.findIndex(item => item.uuid === payload.uuid)
            return (index !== -1) ? {
                ...state,
                list: [
                    ...state.list.slice(0, index)
                    .concat(payload),
                    ...state.list.slice(index + 1)
                ]
            } : state
        case DELETE_PLAN:
            //let delKey = action.payload.uuid
            //const itemIndex = state.list.findIndex(item => item.uuid === delKey)
            // state.list.forEach((e, i, a) => {
            //     if (e.uuid === delKey) {
            //         itemIndex = i
            //     }
            // })
            return {
                ...state,
                list: state.list
                        .filter(item => item.uuid !== payload.uuid)
            }
        case RESET_CURRENT_PLAN:
            return {
                current: initialState.current,
                list: state.list
            }

        default: return state
    }
}