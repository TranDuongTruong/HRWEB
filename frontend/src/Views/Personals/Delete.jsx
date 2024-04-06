import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

const DeletePersonal = () => {
  const [formData, setFormData] = useState({
    employee_ID: '',
    first_Name: '',
    last_Name: '',
    middle_Initial: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone_Number: '',
    social_Security_Number: '',
    drivers_License: '',
    marital_Status: '',
    gender: 'Male', // Default value for gender
    shareholder_Status: false, // Default value for shareholder status
    benefit_Plans: '', // Default value for benefit plans
    ethnicity: ''
  });
  const [benefitPlans, setBenefitPlans] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate(); 
  const handleSubmit =async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:4000/api/personal/${id}`);
      console.log(`Employee with ID ${id} has been deleted.`); 
            
      navigate( '/personal' );   
    } catch (error) {
      console.log('Error deleting employee:', error);
    }  };

  useEffect(() => {


    fetchPersonalData();
    fetchBenefitPlans();
    console.log(formData);
  }, []);

  const fetchBenefitPlans = async () => {
      // try {
      //   const response = await axios.get('http://localhost:4000/api/benefitplan');
      //   setBenefitPlans(response.data); // Assume response contains list of benefit plans
      // } catch (error) {
      //   console.log('Error fetching benefit plans:', error);
      // }
      setBenefitPlans("pl1","pl2","pl3");
    };
  const fetchPersonalData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/personal/${id}`);
      console.log(response.data.data)

      setFormData(response.data.data);
    } catch (error) {
      console.log('Error fetching personal data:', error);
    }
  };
  return (
    <div>
      <h2>Delete</h2>
      <h3>Are you sure you want to delete this?</h3>
      <div>
        <h4>Personal</h4>
        <hr />
        <dl>
      {Object.keys(formData).map((key, index) => (
    <div key={index} >
      <dl className="dl-horizontal">

        <dt>{key} : </dt>
        <dd>{formData[key]}</dd>
      </dl>
      
      
    </div>
  ))}
      </dl>

        <form onSubmit={handleSubmit}>
          <input type="submit" value="Delete" className="btn btn-default" />
          <Link to="/personal" className="btn btn-default">Back to List</Link>
        </form>
      </div>
    </div>
  );
};

export default DeletePersonal;
