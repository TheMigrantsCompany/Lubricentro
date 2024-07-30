import axios from "axios";
import { GET_ALL_PRODUCTS, GET_PRODUCTS_ERROR, SEARCH_PRODUCTS } from "./types";

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

// Acción para buscar productos por nombre o referencia
export const searchProducts = (query) => async dispatch => {
  try {
      const response = await axios.get(`http://localhost:3001/products/name/${query}`);
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