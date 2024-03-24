import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PayrateIndex = () => {
    const [payrates, setPayrates] = useState([]);

    useEffect(() => {
        fetchPayrates();
    }, []);

    const fetchPayrates = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/payrate');
            setPayrates(response.data.data); // Lấy dữ liệu từ response.data.data
        } catch (error) {
            console.log('Error fetching payrates:', error);
        }
    };
    return (
        <>
            <div>
                <h2>Payrates</h2>
                <p>
                    <Link to="/payrate/create">Create New</Link>
                </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                            <th>Tax Percentage</th>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {payrates.map(payrate => (
                            <tr key={payrate._id}>
                                <td>{payrate.name}</td>
                                <td>{payrate.value}</td>
                                <td>{payrate.taxPercentage}</td>
                                <td>{payrate.type}</td>
                                <td>{payrate.amount}</td>
                                <td>
                                    <Link to={`/payrate/edit/${payrate._id}`}>Edit</Link> |{' '}
                                    <Link to={`/payrate/details/${payrate._id}`}>Details</Link> |{' '}
                                    <Link to={`/payrate/delete/${payrate._id}`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PayrateIndex;