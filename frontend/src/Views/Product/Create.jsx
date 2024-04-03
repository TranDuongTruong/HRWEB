import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

function ProductCreate() {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        imgURL: '',      
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const navigate = useNavigate(); // Sử dụng hook useNavigate

    const handleSubmit = async (e) => {
        // Kiểm tra xác minh trường không được null
    const requiredFields = ['name', 'category', 'price', 'imgURL'];
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
    const numericFields = ['price'];
    for (const field of numericFields) {
      if (isNaN(formData[field])) {
        setError(`The field ${field} must be a number.`);
        return;
      }
    }
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:4000/api/products', formData);
            console.log('New product data created:', response);
            navigate('/benefitplans');

        } catch (error) {

            console.log('Error creating new product data:', error);
        }
    };

    return (
        <div>
            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="control-label col-md-2">Name</label>
                    <div className="col-md-10">
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            name="name"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="category" className="control-label col-md-2">Category</label>
                    <div className="col-md-10">
                        <input
                            type="text"
                            id="category"
                            className="form-control"
                            value={formData.category}
                            onChange={handleChange}
                            name="category"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="control-label col-md-2">Price</label>
                    <div className="col-md-10">
                        <input
                            type="number"
                            id="price"
                            className="form-control"
                            value={formData.price}
                            onChange={handleChange}
                            name="price"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="imgURL" className="control-label col-md-2">ImgURL</label>
                    <div className="col-md-10">
                        <input
                            type="text"
                            id="imgURL"
                            className="form-control"
                            value={formData.imgURL}
                            onChange={handleChange}
                            name="imgURL"
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

export default ProductCreate;
