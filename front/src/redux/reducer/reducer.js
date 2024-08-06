import { 
   GET_ALL_PRODUCTS,
   
  GET_PRODUCTS_ERROR,
   
  SEARCH_PRODUCTS,
   GET_CATEGORY_BY_ID, 
   GET_PRODUCTS_BY_CATEGORY,
   GET_ALL_CATEGORIES,
   GET_ALL_USERS,
   GET_USERS_ERROR,
   SET_CURRENT_USER,
  
  GET_CARS,
  GET_CARS_ERROR,
  GET_CARS_PLATE,
  GET_CARS_PLATE_ERROR,
  CAR_BY_CC_NIT,
  CAR_BY_CC_NIT_ERROR,
   GET_ALL_SERVICES,
 } from "../actions/types";

const initialState = {
    loading: false,
    products: [],
    cars: [],
    selectedCar: {}, // Agrega un campo para el auto seleccionado
    copyCars: [],
    error: null,
    category: null,
    categories: [],
    users: [],
    currentid_User: null,
    user: {
      id_User: null, // Nuevo campo añadido
  },
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
            case GET_ALL_SERVICES:
              return {
                ...state,
                services: action.payload,
              };
            case SET_CURRENT_USER:
              return {
                  ...state,
                  id_User: action.payload.id, // Asegúrate de que `action.payload` tenga la estructura correcta
                  currentid_User: action.payload.id,
              };
          case GET_USERS_ERROR:
            return {
                ...state,
                error: action.payload, // Maneja errores
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