import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';

function BenefitPlanIndex() {
    const [benefitPlans, setBenefitPlans] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [showCount, setShowCount] = useState(5); // mặc định

    useEffect(() => {
        fetchBenefitPlans();
    }, []);

    const fetchBenefitPlans = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/benefitplan');
            setBenefitPlans(response.data.data); 
        } catch (error) {
            console.log('Error fetching benefit plans:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    const handleShowCountChange = (event) => {
        setShowCount(parseInt(event.target.value));
    };

    return (
        <div className="module">
            <div className="module-head">
                <h3>Benefit Plans - <Link to="/benefitplan/create">Create New</Link></h3>
                <div>
                    <select value={showCount} onChange={handleShowCountChange}>
                        <option value={5}>Show 5</option>
                        <option value={10}>Show 10</option>
                        <option value={15}>Show 15</option>
                        <option value={20}>Show 20</option>
                        <option value={50}>Show 50</option>
                        <option value={70}>Show 70</option>
                        <option value={100}>Show 100</option>
                    </select>
                    <input
                        type="text"
                        value={searchKeyword}
                        onChange={handleSearchChange}
                        placeholder="Search by plan name..."
                    />
                    
                </div>
            </div>
            <div className="module-body table">
                <table className="datatable-1 table table-bordered table-striped display" width="100%">
                    <thead>
                        <tr>
                            <th>Plan Name</th>
                            <th>Deductable</th>
                            <th>Percentage CoPay</th>
                
                        </tr>
                    </thead>
                    <tbody>
                        {benefitPlans.slice(0, showCount).map(plan => (
                            <tr key={plan.benefitplan_id}>
                                <td>{plan.plan_name}</td>
                                <td>{plan.deductable}</td>
                                <td>{plan.percentage}</td>
                                <td>
                                    <Link to={`/benefitplan/edit/${plan._id}`}>Edit</Link> |&nbsp;
                                    <Link to={`/benefitplan/details/${plan._id}`}>Details</Link> |&nbsp;
                                    <Link to={`/benefitplan/delete/${plan._id}`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BenefitPlanIndex;
