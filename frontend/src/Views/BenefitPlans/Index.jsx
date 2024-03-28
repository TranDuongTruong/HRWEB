import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link từ react-router-dom

function BenefitPlanIndex() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/products');
            setProducts(response.data.data); // Lấy dữ liệu từ response.data.data
        } catch (error) {
            console.log('Error fetching products:', error);
        }
    };
    return (
        <div className="module">
            <div className="module-head">
                <h3>Products -   <Link to="/benefitplans/create">Create New</Link></h3>
            </div>
            <div className="module-body table">
                <table className="datatable-1 table table-bordered table-striped display" width="100%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>ImgURL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.imgURL}</td>
                                <td>
                                <Link to={`/benefitplans/edit/${product._id}`}>Edit</Link> |&nbsp;
                                <Link to={`/benefitplans/details/${product._id}}`}>Details</Link> |&nbsp;
                                <Link to={`/benefitplans/delete/${product._id}}`}>Delete</Link>
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
