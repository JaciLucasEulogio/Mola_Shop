import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, SEARCH_PRODUCTS_FAILURE, SEARCH_PRODUCTS_REQUEST, SEARCH_PRODUCTS_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./ActionType"

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    deleteProduct:null,
}

export const customerProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case SEARCH_PRODUCTS_REQUEST:
            return {...state, loading: true, error: null}
            //return {...state, loading: true, error: null}

        case FIND_PRODUCTS_SUCCESS:
            return {...state, loading: false, error: null, products: action.payload}
        case FIND_PRODUCT_BY_ID_SUCCESS:
        case SEARCH_PRODUCTS_SUCCESS:
            return {...state, loading: false, error: null, product: action.payload}

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case SEARCH_PRODUCTS_FAILURE:
            return {...state, loading: false, error: action.payload}
        case CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload],
            };
        case CREATE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.map((product) =>
                product.id === action.payload.id ? action.payload : product
                ),
            };
        case UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
            case DELETE_PRODUCT_SUCCESS:
        console.log("delete ",state.products)
            return {
                ...state,
                loading: false,
                deleteProduct:action.payload
                
                
            };
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}