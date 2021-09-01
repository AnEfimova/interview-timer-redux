import {reducer} from "./reducer.js"
import {setPlan, addPlan, updatePlanInList, resetCurrentPlan, deletePlanInList} from "./actions.js"
import {initialState} from "./reducer.js";

const previousState = {
    current: {
        uuid: '8ce26237-54b6-4c8d-9807-0a8fc68b71fa',
        name: 'third',
        time: 300,
        blocks: [{
            name: 'block1',
            time: 10,
            questions: ['first_q', 'second_q']
        }]
    },
    list: [
        {
            uuid: '096e6ec4-5a65-4949-92ec-77db2be34a6d',
            name: 'first',
            time: 100,
            blocks: [{
                name: 'block1',
                time: 10,
                questions: ['first_q', 'second_q']
            }]
        },
        {
            uuid: 'aeb6ccec-d1f4-4a3d-98c0-9fb34c1093a0',
            name: 'second',
            time: 200,
            blocks: [{
                name: 'block1',
                time: 10,
                questions: ['first_q', 'second_q']
            }]
        },
        {
            uuid: '8ce26237-54b6-4c8d-9807-0a8fc68b71fa',
            name: 'third',
            time: 300,
            blocks: [{
                name: 'block1',
                time: 10,
                questions: ['first_q', 'second_q']
            }]
        }
    ]
}
const firstKey = '096e6ec4-5a65-4949-92ec-77db2be34a6d'
const uuidReg = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
const firstItem = {
    name : 'first',
    time : 100,
    blocks : [{
        name : 'block1',
        time : 10,
        questions : ['first_q', 'second_q']}
    ]}

// test('should return an initial state', () => {
//     expect(rootReducer(undefined, {})).toEqual({
//         plans: {
//             current: {
//                 uuid: null,
//                 name: "",
//                 time: 0,
//                 blocks: [{
//                     name: "",
//                     time: 0,
//                     questions: []
//                 }]
//             },
//             list: []
//         },
//         candidate: {
//             current : {
//                 uuid: null,
//                 name: "",
//                 planUuid: null
//             },
//             list: []
//         }
//     })
// })

test('should return an initial plans state', () => {
    expect(reducer(undefined,
        {}))
        .toEqual({  // not Root
        current: {
            uuid: null,
            name: "",
            time: 0,
            blocks: [{
                name: "",
                time: 0,
                questions: []
            }]
        },
        list: []
    })
})

test('should return a current plan state with uuid, name and empty list', () => {
    expect(reducer({},
        setPlan(firstItem)))
        .toEqual({
        current: {
            uuid: expect.stringMatching(uuidReg),
            ...firstItem
        }
    })
})

test('should return plan list state with added item in list', () => {
    expect(reducer(initialState,
        addPlan()))
        .toEqual({
        ...initialState,
        list: initialState.list.concat(initialState.current)
    })
})

test('should return updated plan by uuid', () => {
    const newUpdState = {
        current: {
            uuid: '8ce26237-54b6-4c8d-9807-0a8fc68b71fa',
            name: 'third',
            time: 300,
            blocks: [{
                name: 'block1',
                time: 10,
                questions: ['first_q', 'second_q']
            }]
        },
        list: [
            {
                uuid: '096e6ec4-5a65-4949-92ec-77db2be34a6d',
                name: 'first',
                time: 1000,
                blocks: [{
                    name: 'block1',
                    time: 1000,
                    questions: ['first_q', 'second_q']
                }]
            },
            {
                uuid: 'aeb6ccec-d1f4-4a3d-98c0-9fb34c1093a0',
                name: 'second',
                time: 200,
                blocks: [{
                    name: 'block1',
                    time: 10,
                    questions: ['first_q', 'second_q']
                }]
            },
            {
                uuid: '8ce26237-54b6-4c8d-9807-0a8fc68b71fa',
                name: 'third',
                time: 300,
                blocks: [{
                    name: 'block1',
                    time: 10,
                    questions: ['first_q', 'second_q']
                }]
            }
        ]
    };
    expect(reducer(previousState,
        updatePlanInList(firstKey,{
        name: 'first',
        time: 1000,
        blocks: [{
            name: 'block1',
            time: 1000,
            questions: ['first_q', 'second_q']
        }]
    })))
        .toEqual(newUpdState)
})

test('should return updated plan by uuid', () => {
    expect(reducer(previousState,
        updatePlanInList('123a',{
        name: 'first',
        time: 1000,
        blocks: [{
            name: 'block1',
            time: 1000,
            questions: ['first_q', 'second_q']
        }]
    })))
        .toEqual(previousState)
})

test('should return plan state with default current plan', () => {
    expect(reducer(previousState,
        resetCurrentPlan()))
        .toEqual({
            current: initialState.current,
            list: previousState.list
        })
})

test('should return plan without deleted item', () => {
    const newDelState = {
        current: {
            uuid: '8ce26237-54b6-4c8d-9807-0a8fc68b71fa',
            name: 'third',
            time: 300,
            blocks: [{
                name: 'block1',
                time: 10,
                questions: ['first_q', 'second_q']
            }]
        },
        list: [
            {
                uuid: 'aeb6ccec-d1f4-4a3d-98c0-9fb34c1093a0',
                name: 'second',
                time: 200,
                blocks: [{
                    name: 'block1',
                    time: 10,
                    questions: ['first_q', 'second_q']
                }]
            },
            {
                uuid: '8ce26237-54b6-4c8d-9807-0a8fc68b71fa',
                name: 'third',
                time: 300,
                blocks: [{
                    name: 'block1',
                    time: 10,
                    questions: ['first_q', 'second_q']
                }]
            }
        ]
    }
    expect(reducer(previousState,
        deletePlanInList(firstKey)))
        .toEqual(newDelState)
})



