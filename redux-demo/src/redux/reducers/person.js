import { ADD_PERSON } from "../constant"
const initState = {
    name: 'initHuman',
    age: 0
}

export default function personReducers (preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}