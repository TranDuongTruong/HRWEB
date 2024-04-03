import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditBenefitPlan = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    imgURL: ''
  });
  const [error, setError] = useState('');

  const { id } = useParams(); // Lấy product ID từ URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/products/${id}`);
        const { name, category, price, imgURL } = response.data.data;
        setFormData({ name, category, price, imgURL });
      } catch (error) {
        console.log('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    try {
      await axios.put(`http://localhost:4000/api/products/${id}`, formData);
      console.log('Product data updated:', formData);
      navigate('/benefitplans');
    } catch (error) {
      console.log('Error updating product data:', error);
    }
  };

  return (
    <div className="content">
      <div className="module">
        <div className="module-head">
          <h3>Edit Product</h3>
        </div>
        <form className="form-horizontal row-fluid" onSubmit={handleSubmit}>
          <div className="module-body">
            <div className="control-group">
              <label className="control-label" htmlFor="Name">Name</label>
              <div className="controls">
                <input type="text" id="Name" name="name" className="span6" value={formData.name} onChange={handleChange} />
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="Category">Category</label>
              <div className="controls">
                <input type="text" id="Category" name="category" className="span6" value={formData.category} onChange={handleChange} />
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="Price">Price</label>
              <div className="controls">
                <input type="text" id="Price" name="price" className="span6" value={formData.price} onChange={handleChange} />
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="ImgURL">ImgURL</label>
              <div className="controls">
                <input type="text" id="ImgURL" name="imgURL" className="span6" value={formData.imgURL} onChange={handleChange} />
              </div>
            </div>

            <div className="control-group">
              <div className="col-md-offset-2 controls">
                <input type="submit" value="Save" className="btn btn-default" />
                <button className="btn btn-default" onClick={() => navigate('/benefitplans')}>Back to List</button>
              </div>
            </div>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          
        </form>
       
      </div>
    </div>
  );
};

export default EditBenefitPlan;
