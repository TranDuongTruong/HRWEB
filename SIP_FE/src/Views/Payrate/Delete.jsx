import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { usePayrateContext } from './PayrateContext';  


function DeletePayrate() {
    const [payrateData, setPayrateData] = useState(null);
    const { id } = useParams();
    const { deletePayrate } = usePayrateContext(); 
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPayrate = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/payrate/${id}`);
                setPayrateData(response.data.data);
            } catch (error) {
                console.log('Error fetching payrate:', error);
            }
        };

        fetchPayrate();
    }, [id]);

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await deletePayrate(id); 
            navigate('/payrate')
        } catch (error) {
            console.log('Error deleting payrate:', error);
        }
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
                        <Link to="/payrate">Back to List</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeletePayrate;
