import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BenefitPlanDetails = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        imgURL: ''
    });

    const fetchProductData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/products/${id}`);
            const { name, category, price, imgURL } = response.data.data;
            setFormData({ name, category, price, imgURL });
        } catch (error) {
            console.log('Error fetching product data:', error);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [id]);

    


    return (
        <div>
            <h2>Details product</h2>
            <div>
                <dl className="dl-horizontal">
                    <dt>Name</dt>
                    <dd>{formData.name}</dd>

                    <dt>Category</dt>
                    <dd>{formData.category}</dd>

                    <dt>Price</dt>
                    <dd>{formData.price}</dd>

                    <dt>ImgURL</dt>
                    <dd>{formData.imgURL}</dd>
                </dl>
                <form >
                   
                    <Link to="/benefitplans" className="btn btn-default">Back to List</Link>
                </form>
            </div>
        </div>
    );
}

export default BenefitPlanDetails;
