import React, { createContext, useContext, useReducer, useEffect } from 'react';
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
        case 'DELETE_PAGE_SUCCESS':
            return {
                ...state,
                payrates: state.payrates.filter(payrate => payrate._id !== action.payload),
            };
        case 'UPDATE_PAYRATE_SUCCESS':
            return {
                ...state,
                payrates: state.payrates.map(payrate => payrate._id === action.payload._id ? action.payload : payrate),
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
            const response = await axios.post('http://localhost:5000/api/payrate', payrateData);
            dispatch({ type: 'ADD_PAYRATE_SUCCESS', payload: response.data });
        } catch (error) {
            console.log('Error adding payrate:', error);
        }
    };

    const deletePayrate = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/payrate/${id}`);
            dispatch({ type: 'DELETE_PAGE_SUCCESS', payload: id });
        } catch (error) {
            console.log('Error deleting page:', error);
        }
    };
    const updatePayrate = async (id, payrateData) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/payrate/${id}`, payrateData);
            dispatch({ type: 'UPDATE_PAYRATE_SUCCESS', payload: response.data });
        } catch (error) {
            console.log('Error updating payrate:', error);
        }
    };

    return (
        <PayrateContext.Provider value={{ state, addPayrate, deletePayrate, updatePayrate  }}>
            {children}
        </PayrateContext.Provider>
    );
};
