import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function PayrateDetails() {
    const { id } = useParams();
    const [payrate, setPayrate] = useState(null);

    useEffect(() => {
        // Kiểm tra nếu payrateId không phải là undefined
        if (id) {
            const fetchPayrateById = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/api/payrate/${id}`);
                    setPayrate(response.data.data); // Assume response.data contains the payrate details
                } catch (error) {
                    console.log('Error fetching payrate:', error);
                }
            };

            fetchPayrateById();
        }
    }, [id]); 

    if (!payrate) {
        return <div>Loading...</div>;
    }

    const { name, value, taxPercentage, type, amount } = payrate;

    return (
        <div>
            <h2>Details</h2>
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
            </div>
            <p>
                <Link to={`/payrate/edit/${payrate._id}`}>Edit</Link> |{' '}
                <Link to="/payrate">Back to List</Link>
            </p>
        </div>
    );
}

export default PayrateDetails;
