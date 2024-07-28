import { GET_ALL_PRODUCTS, GET_PRODUCTS_ERROR } from "../actions/types";

const initialState = {
    loading: false,
    products: [],
    error: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            console.log('Reducer - GET_ALL_PRODUCTS:', action.payload);
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null,
            };
        case GET_PRODUCTS_ERROR:
            console.log('Reducer - GET_PRODUCTS_ERROR:', action.payload);
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;

