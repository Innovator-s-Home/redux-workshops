import { ADD_TO_CART } from "./constant"



export const cartData = (data = [], action) => {
    if (action.type === ADD_TO_CART) {
    console.warn("reducer is called ", action)
        return action.data
    } else {
        return "no action called"
    }
}