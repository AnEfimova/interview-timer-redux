import {ADD_PLAN, DELETE_PLAN, RESET_CURRENT_PLAN, SET_PLAN, UPDATE_PLAN} from "../types.js";
import {v4} from "uuid";

export function setPlan (params) {
    const uuid = v4()
    return {
        type: SET_PLAN,
        payload: {
            uuid,
            ...params
        }
    }
}

export function addPlan () {
    return {
        type: ADD_PLAN,
    }
}

export function updatePlanInList (uuid, params) {
    return {
        type: UPDATE_PLAN,
        payload : {
            uuid,
            ...params
        }
    }
}

export function resetCurrentPlan () {
    return {
        type: RESET_CURRENT_PLAN
    }
}

export function deletePlanInList (uuid) {
    return {
        type: DELETE_PLAN,
        payload : {
            uuid
        }
    }
}