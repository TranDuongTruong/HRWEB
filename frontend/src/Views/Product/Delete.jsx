import React, { useState,useEffect  } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Link } from 'react-router-dom';

const DeleteProduct = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name:'',
    category: '',
    price: '',
    imgURL: ''
  });

  const { id } = useParams(); // Lấy employeeID từ URL
  
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
     
   const response = await axios.get(`http://localhost:4000/api/products/${id}`);
  
       const { name,category,price,imgURL} = response.data.data;
  
      setFormData({name,category,price,imgURL });
      } catch (error) {
        console.log('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:4000/api/products/${id}`);
      console.log(`Product with ID ${id} has been deleted.`); 
            
      navigate( '/product' );   
    } catch (error) {
      console.log('Error deleting product:', error);
    }
  };
console.log(id)
  useEffect(() => {
 
  }, []); 


    return (
        <div>
            <h2>Delete</h2>
            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Product</h4>
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
                <form onSubmit={handleSubmit}>
                <input type="submit" value="Delete" className="btn btn-default"  />
                <Link to="/employee" className="btn btn-default">Back to List</Link>
                </form>
            </div>
        </div>
    );
}

export default DeleteProduct;
