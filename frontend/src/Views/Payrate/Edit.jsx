import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function EditPayRate() {
    const [payRateData, setPayRateData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/payrate/${id}`);
                setPayRateData(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]); // Fetch data whenever id changes

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Logic to handle form submission
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="content">
            <div className="module">
                <div className="module-head">
                    <h3>Edit PayRate</h3>
                </div>
                <form onSubmit={handleFormSubmit} className="form-horizontal row-fluid">
                    <input type="hidden" name="ID" value={payRateData._id} />
                    <div className="module-body">
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Name">Name</label>
                            <div className="controls">
                                <input type="text" name="Name" className="span6" value={payRateData.name} onChange={(e) => setPayRateData({ ...payRateData, name: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Value">Value</label>
                            <div className="controls">
                                <input type="text" name="Value" className="span6" value={payRateData.value} onChange={(e) => setPayRateData({ ...payRateData, value: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="TaxPercentage">Tax Percentage</label>
                            <div className="controls">
                                <input type="text" name="TaxPercentage" className="span6" value={payRateData.taxPercentage} onChange={(e) => setPayRateData({ ...payRateData, taxPercentage: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Type">Type</label>
                            <div className="controls">
                                <input type="text" name="Type" className="span6" value={payRateData.type} onChange={(e) => setPayRateData({ ...payRateData, type: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Amount">Amount</label>
                            <div className="controls">
                                <input type="text" name="Amount" className="span6" value={payRateData.amount} onChange={(e) => setPayRateData({ ...payRateData, amount: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="col-md-offset-2 controls">
                                <input type="submit" value="Save" className="btn btn-default" />
                                <Link to="/payrate" className="btn btn-default">Back to List</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPayRate;
