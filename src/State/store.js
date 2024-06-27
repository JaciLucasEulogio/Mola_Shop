import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { thunk } from "redux-thunk"
import { authReducer } from "./Auth/Reducer"
import { customerProductReducer } from "./Product/Reducer"
import { cartReducer } from "./Cart/Reducer"
import { orderReducer } from "./Order/Reducer"
import adminOrderReducer from "./Admin/Orders/Reducer"

const rootReducer = combineReducers({
    auth:authReducer,
    product:customerProductReducer,
    customersProduct:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    // review:ReviewReducer,

    // admin
    // adminsProduct:productReducer,
    adminsOrder:adminOrderReducer,

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))