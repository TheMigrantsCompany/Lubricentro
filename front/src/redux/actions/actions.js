import axios from "axios";
import { 
    GET_ALL_PRODUCTS,
    GET_PRODUCTS_ERROR,
    SEARCH_PRODUCTS,
    GET_CATEGORY_BY_ID,
    GET_PRODUCTS_BY_CATEGORY,
    GET_ALL_CATEGORIES,
    GET_ALL_USERS,
    GET_USERS_ERROR,
    
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

// Acción para obtener la categoría por ID
export const getCategoryById = (categoryId) => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:3001/categories/id/${categoryId}`);
        dispatch({
            type: GET_CATEGORY_BY_ID,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: error.message,
        });
        throw error;
    }
};

// Acción para obtener productos por categoría
export const getProductsByCategory = (categoryId) => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:3001/products/category/${categoryId}`);
        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: error.message,
        });
    }
};

// Acción para obtener todas las categorías
export const getAllCategories = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:3001/categories');
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: error.message,
        });
    }
};

//Accion para obtener todos los usuarios
export const getAllUsers = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:3001/users/');
        dispatch({
            type: GET_ALL_USERS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_USERS_ERROR,
            payload: error.message,
        });
    }
};