import { 
   GET_ALL_PRODUCTS,
   GET_PRODUCTS_ERROR,
   SEARCH_PRODUCTS,
   GET_CATEGORY_BY_ID, 
   GET_PRODUCTS_BY_CATEGORY,
   GET_ALL_CATEGORIES,
   GET_ALL_USERS,
   } from "../actions/types";

const initialState = {
    loading: false,
    products: [],
    error: null,
    category: null,
    categories: [],
    users: [],
};



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
        case SEARCH_PRODUCTS:
        case GET_PRODUCTS_BY_CATEGORY:
          return {
            ...state,
            loading: false,
            products: action.payload,
            error: null,
          };
        case GET_CATEGORY_BY_ID:
          return {
            ...state,
            loading: false,
            category: action.payload,
            error: null,
          };
          case GET_ALL_CATEGORIES:
            return {
                ...state,
                loading: false,
                categories: action.payload,
                error: null,
            };
        case GET_PRODUCTS_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
          case GET_ALL_USERS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null,
            };
        default:
          return state;
      }
    };

export default rootReducer;