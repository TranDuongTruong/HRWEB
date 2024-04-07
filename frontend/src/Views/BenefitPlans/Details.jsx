import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BenefitPlanDetails = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        plan_name: '',
        deductable: '',
        percentage: ''
    });

    const fetchProductData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/benefitplan/${id}`);
            const { plan_name, deductable, percentage } = response.data.data;
            setFormData({ plan_name, deductable, percentage});
        } catch (error) {
            console.log('Error fetching benefitplan data:', error);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [id]);

    



    return (
        <div>
            <h2>Details</h2>
            <div>
                
                <hr />
                <dl className="dl-horizontal">
                    <dt>Plan Name</dt>
                    <dd>{formData.plan_name}</dd>

                    <dt>Deductable</dt>
                    <dd>{formData.deductable}</dd>

                    <dt>Percentage CoPay</dt>
                    <dd>{formData.percentage}</dd>
                </dl>
            </div>
            <p>
                <Link to="/benefitplan" className="btn btn-default">Back to List</Link>
            </p>
        </div>
    );
}

export default BenefitPlanDetails;
