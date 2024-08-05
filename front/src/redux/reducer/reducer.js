import { GET_ALL_PRODUCTS, 
  GET_PRODUCTS_ERROR, 
  SEARCH_PRODUCTS,
  GET_CARS,
  GET_CARS_ERROR,
  GET_CARS_PLATE,
  GET_CARS_PLATE_ERROR,
  CAR_BY_CC_NIT,
  CAR_BY_CC_NIT_ERROR,
 } from "../actions/types";

const initialState = {
    loading: false,
    products: [],
    cars: [],
    selectedCar: {}, // Agrega un campo para el auto seleccionado
    copyCars: [],
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
        case GET_CARS:
          return {
            ...state,
            loading: false,
            cars: action.payload,
            copyCars: [...action.payload],
            error: null,
          };
        case GET_CARS_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
          case GET_CARS_PLATE:
            console.log("Reducer GET_CARS_PLATE:", action.payload); // Verifica payload
          return {
            ...state,
            loading: false,
            selectedCar: action.payload, // Actualiza el auto seleccionado
            error: null,
          };
          case GET_CARS_PLATE_ERROR:
            return {
              ...state,
              loading: false,
              error: action.payload,   // Manejar el error en caso de falla
            };
          case CAR_BY_CC_NIT:
            console.log("Reducer CAR_BY_CC_NIT:", action.payload); // Verifica payload
            return {
              ...state,
              loading: false,
              selectedCar: action.payload, // Actualiza el auto seleccionado
              error: null,
            };
          case CAR_BY_CC_NIT_ERROR:
            return {
              ...state,
              loading: false,
              error: action.payload,   // Manejar el error en caso de falla
            };
          
        default:
          return state;
      }
    };

export default rootReducer;

