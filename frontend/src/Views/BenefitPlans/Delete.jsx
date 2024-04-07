import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const BenefitPlanDelete = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [plan, setPlan] = useState({
        plan_name: '',
        deductable: '',
        percentage: ''
    });

    const fetchPlanData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/benefitplan/${id}`);
            const { plan_name, deductable, percentage } = response.data.data;
            console.log(plan_name, deductable, percentage);
            setPlan({plan_name, deductable, percentage });
        } catch (error) {
            console.log('Error fetching plan data:', error);
        }
    };

    useEffect(() => {
        fetchPlanData();
    }, [id]);

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            await axios.delete(`http://localhost:4000/api/benefitplan/${id}`);
            console.log(`Benefit plan with ID ${id} has been deleted.`);
            navigate('/benefitplan');
        } catch (error) {
            console.log('Error deleting benefit plan:', error);
        }
    };

    return (
        <div>
            <h2>Delete</h2>
            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Benefit Plan</h4>
                <hr />
                <dl className="dl-horizontal">
                    <dt>Plan Name</dt>
                    <dd>{plan.plan_name}</dd>
                    <dt>Deductable</dt>
                    <dd>{plan.deductable}</dd>
                    <dt>Percentage CoPay</dt>
                    <dd>{plan.percentage}</dd>
                </dl>
                <form onSubmit={handleDelete}>
                    <button type="submit" className="btn btn-default">Delete</button>
                    <Link to="/benefitplan" className="btn btn-default">Back to List</Link>
                </form>
            </div>
        </div>
    );
};

export default BenefitPlanDelete;
