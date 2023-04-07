import { createStore } from "redux";

import { productReducer } from "./product/product.reducer";

export const store = createStore(productReducer);