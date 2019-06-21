const shortid = require('shortid');
const initState = {
    "users": [
        { "email": "test1@gmail.com", "name": "test1" },
        { "email": "test2@gmail.com", "name": "test2" },
        { "email": "test3@gmail.com", "name": "test3" }
    ],

    "courses": {
        "core": [
            { "dept": "CPSC", "num": 110, "id": shortid.generate() },
            { "dept": "CPSC", "num": 210, "id": shortid.generate() },
            { "dept": "MATH", "num": 200, "id": shortid.generate() }
        ],
        "bridging": [
            { "dept": "STAT", "num": 302, "id": shortid.generate() },
            { "dept": "STAT", "num": 305, "id": shortid.generate() },
            { "dept": "STAT", "num": 306, "id": shortid.generate() }
        ],
        "exemptions": [
            { "dept": "ENGL", "num": 110, "id": shortid.generate() },
            { "dept": "STAT", "num": 200, "id": shortid.generate() },
            { "dept": "MATH", "num": 108, "id": shortid.generate() }
        ],
        "replacements": [
            { "dept": "MATH", "num": 221, "id": shortid.generate() },
            { "dept": "MATH", "num": 200, "id": shortid.generate() },
            { "dept": "DSCI", "num": 100, "id": shortid.generate() }
        ]
    }
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_CORE') {
        console.log("you deleted course with id: " + action.id)
        let newCore = state.core.filter(currCore => {
            return currCore.id !== action.id
        });
        return {
            ...state,
            core: newCore
        }
    }
    if (action.type === 'DELETE_BRIDGING') {
        console.log("you deleted course with id: " + action.id)
        let newBridging = state.bridging.filter(currBridging => {
            return currBridging.id !== action.id
        });
        return {
            ...state,
            bridging: newBridging
        }
    }
    if (action.type === 'DELETE_EXEMPTION') {
        console.log("you deleted course with id: " + action.id)
        let newExemptions = state.exemptions.filter(currExemption => {
            return currExemption.id !== action.id
        });
        return {
            ...state,
            exemptions: newExemptions
        }
    }
    if (action.type === 'DELETE_EXEMPTION') {
        console.log("you deleted course with id: " + action.id)
        let newExemptions = state.exemptions.filter(currExemption => {
            return currExemption.id !== action.id
        });
        return {
            ...state,
            exemptions: newExemptions
        }
    }
    if (action.type === 'DELETE_REPLACEMENT') {
        console.log("you deleted course with id: " + action.id)
        let newReplacements = state.replacements.filter(currReplacement => {
            return currReplacement.id !== action.id
        });
        return {
            ...state,
            replacements: newReplacements
        }
    }
    return state;
}

export default rootReducer