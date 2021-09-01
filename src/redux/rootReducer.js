import {combineReducers} from "redux";
import {reducer as planReducer} from "./plans/reducer.js";
import {reducer as candidatesReducer} from "./candidates/reducer.js";

export const rootReducer = combineReducers({
    plans: planReducer,
    candidate : candidatesReducer
})