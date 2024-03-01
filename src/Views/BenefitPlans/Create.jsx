
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link từ react-router-dom

function BenefitPlanForm() {
    const [planName, setPlanName] = useState('');
    const [deductable, setDeductable] = useState(0);
    const [percentageCoPay, setPercentageCoPay] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Gửi dữ liệu đến server hoặc xử lý logic tương ứng
        console.log('Submitted:', { planName, deductable, percentageCoPay });
    };

    return (
        <div>
            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="planName" className="control-label col-md-2">Plan Name</label>
                    <div className="col-md-10">
                        <input 
                            type="text" 
                            id="planName" 
                            className="form-control" 
                            value={planName} 
                            onChange={(e) => setPlanName(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="deductable" className="control-label col-md-2">Deductable</label>
                    <div className="col-md-10">
                        <input 
                            type="number" 
                            id="deductable" 
                            className="form-control" 
                            value={deductable} 
                            onChange={(e) => setDeductable(parseFloat(e.target.value))} 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="percentageCoPay" className="control-label col-md-2">Percentage CoPay</label>
                    <div className="col-md-10">
                        <input 
                            type="number" 
                            id="percentageCoPay" 
                            className="form-control" 
                            value={percentageCoPay} 
                            onChange={(e) => setPercentageCoPay(parseFloat(e.target.value))} 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-offset-2 col-md-10">
                        <button type="submit" className="btn btn-default">Create</button>
                    </div>
                </div>
            </form>
            <div>
            <Link to="/benefitplans">Back to List</Link>
            </div>
        </div>
    );
}

export default BenefitPlanForm;
