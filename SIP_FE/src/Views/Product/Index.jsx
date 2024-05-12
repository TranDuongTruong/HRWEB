import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';

function ProductIndex() {
    const [products, setProducts] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [showCount, setShowCount] = useState(5); // mac dinh

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data.data); 
        } catch (error) {
            console.log('Error fetching products:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    const handleShowCountChange = (event) => {
        setShowCount(parseInt(event.target.value));
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <div className="module">
            <div className="module-head">
                <h3>Products - <Link to="/product/create">Create New</Link></h3>
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
                        placeholder="Search by name..."
                    />
                    
                </div>
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
                        {filteredProducts.slice(0, showCount).map(product => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.imgURL}</td>
                                <td>
                                    <Link to={`/product/edit/${product._id}`}>Edit</Link> |&nbsp;
                                    <Link to={`/product/details/${product._id}`}>Details</Link> |&nbsp;
                                    <Link to={`/product/delete/${product._id}`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductIndex;
