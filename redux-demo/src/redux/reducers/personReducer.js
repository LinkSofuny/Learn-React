const initState = [{
    name: 'admin',
    age: 18
}]

export default function personReducer(prevState = initState, action) {
    const {type, payload} = action
    switch (type) {
        case 'addPerson':
            return prevState.push(payload)
        default:
            return prevState
    }
}