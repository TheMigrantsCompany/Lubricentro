import axios from "axios";
import { GET_ALL_PRODUCTS, 
    GET_PRODUCTS_ERROR, 
    SEARCH_PRODUCTS,
    GET_CARS,
    GET_CARS_ERROR,
    GET_CARS_PLATE,
    GET_CARS_PLATE_ERROR,
    CAR_BY_CC_NIT,
    CAR_BY_CC_NIT_ERROR,
 } from "./types";

// Acción para obtener todos los productos
export const getAllProducts = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:3001/products/');
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: error.message,
        });
    }
};


// Acción para agregar un coche 
export const postCar = (clientData) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3001/cars/', clientData);
        dispatch({
            type: 'POST_CLIENT_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'POST_CLIENT_FAILURE',
            payload: error.message,
        });
    }
};

export const createServiceOrder = (id_User, orderData) => async dispatch => {
    
    try {
      const response = await axios.post(`http://localhost:3001/orders/service-order/${id_User}`, orderData);
      dispatch({
        type: 'CREATE_SERVICE_ORDER_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'CREATE_SERVICE_ORDER_FAILURE',
        payload: error.message,
      });
    }
  };

// Acción para buscar productos por nombre o referencia
export const searchProducts = (Name) => async dispatch => {
  try {
      const response = await axios.get(`http://localhost:3001/products/name/${Name}`);
      dispatch({
          type: SEARCH_PRODUCTS,
          payload: response.data,
      });
  } catch (error) {
      dispatch({
          type: GET_PRODUCTS_ERROR,
          payload: error.message,
      });
  }
};

export const getCars = () => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get('http://localhost:3001/cars/');
        return dispatch({
          type: GET_CARS,
          payload: data,
        });
  } catch (error) {
      dispatch({
          type: GET_CARS_ERROR,
          payload: error.message,
      });
  }
}
};

// Acción para obtener autos por placa
export const getCarsPlate = (LicensePlate) => async (dispatch) => {
    console.log("Llamando a getCarsPlate con:", LicensePlate);
    try {
        const { data } = await axios.get(`http://localhost:3001/cars/license-plate/${LicensePlate}`);
        console.log("Datos recibidos de la API:", data); // Verifica qué hay en data
        dispatch({
            type: GET_CARS_PLATE,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_CARS_PLATE_ERROR,
            payload: error.message,
        });
    }
};

// Acción para obtener autos por CC-NIT
export const getCarByCCNIT = (CC_NIT) => async (dispatch) => {
    console.log("Llamando a getCarByCCNIT con:", CC_NIT);
    try {
        const { data } = await axios.get(`http://localhost:3001/cars/cc-nit/${CC_NIT}`);
        console.log("Datos recibidos de la API:", data); // Verifica qué hay en data
        dispatch({
            type: CAR_BY_CC_NIT,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CAR_BY_CC_NIT_ERROR,
            payload: error.message,
        });
    }
};


