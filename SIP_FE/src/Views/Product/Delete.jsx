import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const DeleteProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        imgURL: ''
    });

    const fetchProductData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            const { name, category, price, imgURL } = response.data.data;
            setFormData({ name, category, price, imgURL });
        } catch (error) {
            console.log('Error fetching product data:', error);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [id]);

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            console.log(`Product with ID ${id} has been deleted.`);
            navigate('/product');
        } catch (error) {
            console.log('Error deleting product:', error);
        }
    };

    return (
        <div>
           
            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Delete Product</h4>
                <hr />
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
                <form onSubmit={handleDelete}>
                    <button type="submit" className="btn btn-default">Delete</button>
                    <Link to="/product" className="btn btn-default">Back to List</Link>
                </form>
            </div>
        </div>
    );
};

export default DeleteProduct;
