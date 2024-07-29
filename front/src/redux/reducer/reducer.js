import { GET_ALL_PRODUCTS, GET_PRODUCTS_ERROR, SEARCH_PRODUCTS } from "../actions/types";

const initialState = {
    loading: false,
    products: [],
    error: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
          return {
            ...state,
            loading: false,
            products: action.payload,
            error: null,
          };
          case SEARCH_PRODUCTS:
            return {
              ...state,
              loading: false,
              products: action.payload,
              error: null,
            };
        case GET_PRODUCTS_ERROR:
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

