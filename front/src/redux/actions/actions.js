import axios from "axios";

import {  
    
} from "../actions/types";

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