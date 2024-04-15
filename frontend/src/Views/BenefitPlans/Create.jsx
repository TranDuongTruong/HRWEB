import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function BenefitCreate() {
    
    const [formData, setFormData] = useState({
        Benefit_Plan_ID: '',
        Plan_Name: '',
        Deductable: '',
        Percentage_CoPay: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra xác minh trường không được null
        const requiredFields = ['Plan_Name', 'Deductable', 'Percentage_CoPay'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                setError(`The field ${field} is required.`);
                setTimeout(() => {
                    setError('');
                }, 15000); // Xóa thông báo sau 15 giây
                return;
            }
        }
        // Kiểm tra xác minh các trường số
        const numericFields = ['Deductable', 'Percentage_CoPay'];
        for (const field of numericFields) {
            if (isNaN(formData[field])) {
                setError(`The field ${field} must be a number.`);
                return;
            }
        }

        try {
            console.log(formData);
            const response = await axios.post('http://localhost:4000/api/benefitplan', formData);
            console.log('New benefitplan data created:', response);
            navigate('/benefitplan');

        } catch (error) {
            console.log('Error creating new benefitplan data:', error);
        }
    };

    return (
        <div>
            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="benefitPlanId" className="control-label col-md-2">Benefit Plan ID</label>
                    <div className="col-md-10">
                        <input 
                            type="number" 
                            id="benefitPlanId" 
                            className="form-control" 
                            value={formData.Benefit_Plan_ID} 
                            onChange={handleChange} 
                            name="Benefit_Plan_ID" 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="planName" className="control-label col-md-2">Plan Name</label>
                    <div className="col-md-10">
                        <input 
                            type="text" 
                            id="planName" 
                            className="form-control" 
                            value={formData.Plan_Name} 
                            onChange={handleChange} 
                            name="Plan_Name" 
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
                            value={formData.Deductable} 
                            onChange={handleChange} 
                            name="Deductable" 
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
                            value={formData.Percentage_CoPay} 
                            onChange={handleChange} 
                            name="Percentage_CoPay" 
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
                <Link to="/benefitplan">Back to List</Link>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default BenefitCreate;
