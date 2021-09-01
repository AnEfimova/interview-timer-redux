import {applyMiddleware, createStore, compose} from 'redux'
import {rootReducer} from "./redux/rootReducer.js"
import {
    addPlan,
    deletePlanInList,
    resetCurrentPlan,
    setPlan,
    updatePlanInList
} from "./redux/plans/actions.js"


const store = createStore(
    rootReducer,
)

const firstItem = {
    name : 'first',
    time : 100,
    blocks : [{
        name : 'block1',
        time : 10,
        questions : ['first_q', 'second_q']}
    ]}
store.dispatch(addPlan())

let first = store.dispatch(setPlan({
    name : 'first',
    time : 100,
    blocks : [{
        name : 'block1',
        time : 10,
        questions : ['first_q', 'second_q']}
    ]}
))

store.dispatch(addPlan())
let second = store.dispatch(setPlan({
    name : 'second',
    time : 200,
    blocks : [{
        name : 'block2',
        time :20,
        questions : ['first_q', 'second_q']}
    ]}
))
store.dispatch(addPlan())
let third = store.dispatch(setPlan({
    name : 'third',
    time : 300,
    blocks : [{
        name : 'block3',
        time : 30,
        questions : ['first_q', 'second_q']}
    ]}))
store.dispatch(addPlan())

let firstKey = first.payload.uuid
let secondKey = second.payload.uuid
let thirdKey = third.payload.uuid

store.dispatch(updatePlanInList(firstKey, {
    name: 'first',
    time: 1000,
    blocks: [{
        name: 'block1',
        time: 1000,
        questions: ['first_q', 'second_q']
    }]
}))
store.dispatch(deletePlanInList(firstKey))

store.dispatch(resetCurrentPlan())

console.log(store.getState().plans)

