import axios from "axios";
import { getCurrentid_User } from "../../utils/getCurrentUserId";
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
    UPDATE_CLIENT_SUCCESS,
    UPDATE_CLIENT_FAILURE,
    SET_SERVICE_ORDERS,
    SET_SERVICE_DETAIL,
    TOGGLE_CAR_ACTIVE_STATE,
    USER_SUSPENDED,
    
    POST_CLIENT_FAILURE,
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
            type: POST_CLIENT_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: POST_CLIENT_FAILURE,
            payload: error.message,
        });
    }
};



export const createServiceOrder = (orderData) => async dispatch => {
    const id_User = getCurrentid_User();
    try {
        const response = await axios.post(`http://localhost:3001/orders/service-order/${id_User}`, orderData);
        dispatch({
            type: CREATE_SERVICE_ORDER_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_SERVICE_ORDER_ERROR,
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

export const getAllUsers = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:3001/users/');
        console.log("Usuarios obtenidos:", response.data); // Log de usuarios
        dispatch({
            type: GET_ALL_USERS,
            payload: response.data,
        });
    } catch (error) {
        console.error("Error al obtener usuarios:", error.message); // Log de error
        dispatch({
            type: GET_USERS_ERROR,
            payload: error.message,
        });
    }
};

export const getUserById = () => async dispatch => {
    const id_User = getCurrentid_User();
    if (!id_User) {
        console.error("No hay usuario autenticado.");
        return;
    }
    try {
        const response = await axios.get(`http://localhost:3001/users/${id_User}`);
        console.log("Usuario obtenido por ID:", response.data); // Log del usuario
        dispatch({
            type: SET_CURRENT_USER,
            payload: response.data,
        });
    } catch (error) {
        console.error("Error al obtener usuario por ID:", error.message); // Log de error
        dispatch({
            type: GET_USERS_ERROR,
            payload: error.message,
        });
    }
};

  export const getCars = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:3001/cars/');
        dispatch({
            type: GET_CARS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_CARS_ERROR,
            payload: error.message,
        });
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

export const updateClient = (id_Car, formData) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:3001/cars/${id_Car}`, formData);
        dispatch({
            type: UPDATE_CLIENT_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        dispatch({
            type: UPDATE_CLIENT_FAILURE,
            payload: error
        });
    }
};

// Accion para obtener todas las órdenes
export const getServiceOrders = () => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/orders');
      const data = await response.json();
      dispatch({ type: SET_SERVICE_ORDERS, payload: data });
    } catch (error) {
      console.error('Error al obtener las órdenes de servicio:', error);
    }
  };
  // Acción para obtener detalles de una orden de servicio
  export const fetchServiceDetails = (idServiceOrder) => async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/orders/${idServiceOrder}`);
      const data = await response.json();
      dispatch({ type: SET_SERVICE_DETAIL, payload: data });
    } catch (error) {
      console.error('Error al obtener los detalles del servicio:', error);
    }
  };

  // Accion para activar o desactivar un usuario 
  export const toggleCarActiveState = (id_Car) => async (dispatch) => {
    try {
        const response = await axios.patch(`http://localhost:3001/cars/${id_Car}/deactivate`);
        dispatch({
            type: TOGGLE_CAR_ACTIVE_STATE,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error toggling car active state:', error);
    }
};

//Accion para Eliminar un Car
export const deleteCar = (CC_NIT, licensePlate) => async (dispatch) => {
    try {
      // Realiza la llamada a la API para eliminar el carro
      await fetch(`http://localhost:3001/cars/cc-nit/${CC_NIT}`, {
        method: 'DELETE',
      });
  
      // Otra llamada para eliminar por LicensePlate si es necesario
      await fetch(`http://localhost:3001/cars/license-plate/${licensePlate}`, {
        method: 'DELETE',
      });
  
      // Vuelve a obtener los carros actualizados
      dispatch(getCars());
    } catch (error) {
      console.error('Error eliminando carro:', error);
    }
  };

  // Acción para suspender un usuario
  export const suspendUser = (id) => async (dispatch) => {
    try {
      const response = await axios.patch(`http://localhost:3001/users/${id}/toggle`);
      dispatch({
        type: USER_SUSPENDED,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error al suspender el usuario:', error);
    }
  };