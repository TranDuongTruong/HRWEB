import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

const PayrateContext = createContext();

export const usePayrateContext = () => useContext(PayrateContext);

const initialState = {
  payrates: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PAYRATE_SUCCESS':
      return {
        ...state,
        payrates: [...state.payrates, action.payload],
      };
    // Xử lý các action khác nếu cần
    default:
      return state;
  }
};

export const PayrateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const addPayrate = async (payrateData) => {
    try {
      const response = await axios.post('http://localhost:4000/api/payrate', payrateData);
      dispatch({ type: 'ADD_PAYRATE_SUCCESS', payload: response.data });
    } catch (error) {
      console.log('Error adding payrate:', error);
    }
  };

  return (
    <PayrateContext.Provider value={{ state, addPayrate }}>
      {children}
    </PayrateContext.Provider>
  );
};