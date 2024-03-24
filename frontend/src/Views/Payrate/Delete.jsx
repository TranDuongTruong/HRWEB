// DeletePayrate.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DeletePayrate() {
    const [payrateData, setPayrateData] = useState(null);
    const { id } = useParams(); // Access the route parameter

    useEffect(() => {
        const fetchPayrate = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/payrate/${id}`);
                setPayrateData(response.data.data); // Set the fetched payrate data
            } catch (error) {
                console.log('Error fetching payrate:', error);
            }
        };

        fetchPayrate(); // Fetch payrate data when the component mounts
    }, [id]);

    const handleDelete = (e) => {
        e.preventDefault();
        // Code to handle deletion goes here
    };

    if (!payrateData) {
        return <div>Loading...</div>;
    }

    const { name, value, taxPercentage, type, amount } = payrateData;

    return (
        <div>
            <h2>Delete</h2>
            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Payrate</h4>
                <hr />
                <dl className="dl-horizontal">
                    <dt>Name</dt>
                    <dd>{name}</dd>

                    <dt>Value</dt>
                    <dd>{value}</dd>

                    <dt>Tax Percentage</dt>
                    <dd>{taxPercentage}</dd>

                    <dt>Type</dt>
                    <dd>{type}</dd>

                    <dt>Amount</dt>
                    <dd>{amount}</dd>
                </dl>

                <form onSubmit={handleDelete}>
                    <div className="form-actions no-color">
                        <input type="submit" value="Delete" className="btn btn-default" /> |
                        <a href="/payrate">Back to List</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeletePayrate;
