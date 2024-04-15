import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BenefitPlanDetails = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        Plan_Name: '',
        Deductable: '',
        Percentage_CoPay: ''
    });

    const fetchProductData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/benefitplan/${id}`);
            const {  Plan_Name, Deductable, Percentage_CoPay } = response.data.data;
            setFormData({  Plan_Name, Deductable, Percentage_CoPay});
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
                    <dd>{formData.Plan_Name}</dd>

                    <dt>Deductable</dt>
                    <dd>{formData.Deductable}</dd>

                    <dt>Percentage CoPay</dt>
                    <dd>{formData.Percentage_CoPay}</dd>
                </dl>
            </div>
            <p>
                <Link to="/benefitplan" className="btn btn-default">Back to List</Link>
            </p>
        </div>
    );
}

export default BenefitPlanDetails;
