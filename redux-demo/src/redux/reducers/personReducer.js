const initState = []
export default function personReducer(prevState = initState, action) {
    const {type, payload} = action
    switch (type) {
        case 'addPerson':
            return [payload, ...prevState]
        default:
            return prevState
    }
}