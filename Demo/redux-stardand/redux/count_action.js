
/**
 *  Action
*/
import {INCREMENT, DECREMENT} from './constant'

// 同步
export const incrementAction = data => ({type: INCREMENT, data})
export const decrementAction = data => ({type: DECREMENT, data})

// 异步
export const incrementActionAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(incrementAction(data))
        }, time)
    }
}
 