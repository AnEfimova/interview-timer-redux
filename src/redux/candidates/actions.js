import {MAKE_CANDIDATE, UPDATE_CANDIDATE} from "../types.js";

export function makeCandidate () {
    return {
        type: MAKE_CANDIDATE
    }
}

export function updateCandidateInList (uuid, attrs) {
    return {
        type: UPDATE_CANDIDATE,
        payload : {
            uuid, attrs
        }
    }
}