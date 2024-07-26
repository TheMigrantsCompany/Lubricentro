import axios from "axios";
import { GET_ALL_PRODUCTS, GET_PRODUCTS_ERROR } from "../actions/types";

export const getAllProducts = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:3001/products/');
        console.log('Action - getAllProducts:', response.data);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data,
        });
    } catch (error) {
        console.log('Action - GET_PRODUCTS_ERROR:', error.message);
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: error.message,
        });
    }
};



export const postCar = (clientData) => {
    return async (dispatch) => {
      try {
        // Suponiendo que usas axios para hacer la solicitud al backend
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
  };