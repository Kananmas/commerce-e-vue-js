import { SELECT_A_PRODUCT } from "./product.constant";

const initialState = {
    product:null,
}


export function productReducer(state=initialState,action) {
    switch(action.type) {
        case SELECT_A_PRODUCT:
            return {...state,product:action.payload};
        default:
            return state;
    }
}