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
        case 'FETCH_PAYRATES_SUCCESS':
            return {
                ...state,
                payrates: action.payload,
            };
        case 'DELETE_PAGE_SUCCESS':
            return {
                ...state,
                payrates: state.payrates.filter(payrate => payrate._id !== action.payload),
            };
        // Xử lý các action khác nếu cần
        default:
            return state;
    }

};

export const PayrateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchPayrates = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/payrate');
            dispatch({ type: 'FETCH_PAYRATES_SUCCESS', payload: response.data.data });
        } catch (error) {
            console.log('Error fetch payrate:', error);
        }
    };
    const addPayrate = async (payrateData) => {
        try {
            const response = await axios.post('http://localhost:4000/api/payrate', payrateData);
            dispatch({ type: 'ADD_PAYRATE_SUCCESS', payload: response.data });
        } catch (error) {
            console.log('Error adding payrate:', error);
        }
    };
    const deletePayrate = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/payrate/${id}`);
            dispatch({ type: 'DELETE_PAGE_SUCCESS', payload: id });
        } catch (error) {
            console.log('Error deleting page:', error);
        }
    };

    return (
        <PayrateContext.Provider value={{ state, addPayrate, fetchPayrates, deletePayrate }}>
            {children}
        </PayrateContext.Provider>
    );
};