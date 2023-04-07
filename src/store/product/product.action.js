import { SELECT_A_PRODUCT } from "./product.constant";



export function selectProduct(payload) {
    return {
        type:SELECT_A_PRODUCT,
        payload
    }
}