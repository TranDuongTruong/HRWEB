import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreatePersonal = () => {
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
  const benefitPlans1 = [
    { id: 1, name: 1 },
    { id: 2, name: 2},
    { id: 3, name: 3 },
    // Thêm các đối tượng khác nếu cần
  ];
  
  useEffect(() => {
    fetchBenefitPlans();
  }, []);

  const fetchBenefitPlans = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/Benefitplan');
      setBenefitPlans(response.data);
    } catch (error) {
      console.log('Error fetching benefit plans:', error);
    }
    
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.gender=formData.gender==="Female"?false:true;
    console.log(formData)
    try {
      
      const response = await axios.post('http://localhost:4000/api/personal', formData);
      console.log('New personal data created:', response);
      // Redirect to personal list page after successful creation
      window.location.href = '/personal';
    } catch (error) {
      console.log('Error creating new personal data:', error,"\n",error.response.data);
    }
  };

  return (
    <div className="content">
      <div className="module">
        <div className="module-head">
          <h3>Create Personal</h3>
        </div>
        <form className="form-horizontal row-fluid" onSubmit={handleSubmit}>
          <div className="module-body">
            {/* Employee ID */}
            <div className="control-group">
              <label className="control-label" htmlFor="EmployeeID">Employee ID</label>
              <div className="controls">
                <input
                  type="text"
                  id="EmployeeID"
                  name="employee_ID"
                  value={formData.employee_ID}
                  onChange={handleChange}
                  className="span6"
                />
              </div>
            </div>

            {/* Repeat similar pattern for other form fields */}
            {Object.keys(formData).map((key) => (
              key !== 'employee_ID' && key !== 'gender' && key !== 'shareholder_Status' && key !== 'benefit_Plans' &&
              <div className="control-group" key={key}>
                <label className="control-label" htmlFor={key}>{key.replace(/_/g, ' ')}</label>
                <div className="controls">
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="span6"
                  />
                </div>
              </div>
            ))}

            {/* Gender */}
            <div className="control-group">
              <label className="control-label" htmlFor="Gender">Gender</label>
              <div className="controls">
                <select
                  id="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="span6"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            {/* Shareholder Status */}
            <div className="control-group">
              <label className="control-label" htmlFor="ShareholderStatus">Shareholder Status</label>
              <div className="controls">
                <input
                  type="checkbox"
                  id="ShareholderStatus"
                  name="shareholder_Status"
                  checked={formData.shareholder_Status}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Benefit Plans */}
            <div className="control-group">
              <label className="control-label" htmlFor="BenefitPlans">Benefit Plans</label>
              <div className="controls">
                <select
                  id="BenefitPlans"
                  name="benefit_Plans"
                  value={formData.benefit_Plans}
                  onChange={handleChange}
                  className="span6"
                >
                  <option value="">-- Select Benefit Plan --</option>
                  {benefitPlans1.map((plan) => (
                    <option key={plan.id} value={plan.name}>{plan.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="control-group">
              <div className="col-md-offset-2 controls">
                <input type="submit" value="Create" className="btn btn-default" />
                {/* Link to navigate back to personal list page */}
                <Link to="/personal" className="btn btn-default">Back to List</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePersonal;
