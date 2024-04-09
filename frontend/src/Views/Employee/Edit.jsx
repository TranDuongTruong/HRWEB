﻿
// export default EditPersonal;
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Payrate/Create.css'

const EditEmployee = () => {
  const [formData, setFormData] = useState({
    Employee_ID:'',
    First_Name: '',
    Last_Name: '',
    VacationDays: '',
    PaidToDate: '',
    PaidLastYear: '',
    PayRate: '',
    PayRateId: '',
    Middle_Initial:"",
            Address1: '',
            Address2: '',
            City: '',
            State: '',
            Zip: '',
            Email: '',
            Phone_Number: '',
            Social_Security_Number: '',
            Drivers_License: '',
            Marital_Status: '',
            Gender: '',
            Shareholder_Status: '',
            Benefit_Plans: '',
            Ethnicity: ''
    
  });
  const [error, setError] = useState('');
  const benefitPlans1 = [
    { id: 1, name: 1 },
    { id: 2, name: 2},
    { id: 3, name: 3 },
    // Thêm các đối tượng khác nếu cần
  ];
  const { id } = useParams(); // Lấy employeeID từ URL
 
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
     console.log(id)
   const response = await axios.get(`http://localhost:4000/api/employee/${id}`);
    
        const { Employee_ID, First_Name, Last_Name, VacationDays, PaidToDate, PaidLastYear, PayRate, PayRateId, Middle_Initial,
          Address1,
          Address2,
          City,
          State,
          Zip,
          Email,
          Phone_Number,
          Social_Security_Number,
          Drivers_License,
          Marital_Status,
          Gender,
          Shareholder_Status,
          Benefit_Plans,
          Ethnicity } = response.data.data;
  
        setFormData({ Employee_ID,First_Name, Last_Name, VacationDays, PaidToDate, PaidLastYear, PayRate, PayRateId, Middle_Initial,
          Address1,
          Address2,
          City,
          State,
          Zip,
          Email,
          Phone_Number,
          Social_Security_Number,
          Drivers_License,
          Marital_Status,
          Gender,
          Shareholder_Status,
          Benefit_Plans,
          Ethnicity });
      } catch (error) {
        console.log('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const requiredFields = ['Employee_ID', 'First_Name', 'Last_Name', 'VacationDays', 'PaidToDate', 'PaidLastYear', 'PayRate', 'PayRateId',"Middle_Initial", "Address1", "City", "State", "Zip", "Email", "Phone_Number", "Social_Security_Number", "Drivers_License", "Marital_Status" , "Ethnicity"];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError({ field: field, message: 'The field ' + field + ' is required' });
        console.log(error.message);
        return;
      }
    }
  
    // Kiểm tra xác minh các trường số
    const numericFields = ['VacationDays', 'PaidToDate', 'PaidLastYear', 'PayRate', 'PayRateId'];
    for (const field of numericFields) {
      if (isNaN(formData[field])) {
        setError({ field: field, message: 'The field ' + field + ' must be a number.' });
        return;
      }
    }



    try {
      await axios.put(`http://localhost:4000/api/employee/${id}`, formData);
      console.log('Employee data updated:', formData);
      
      navigate( '/employee' );

    } catch (error) {
      console.log('Error updating employee data:', error);
    }
  };

  return (
    <div className="content">
      <div className="module">
        <div className="module-head">
          <h3>Edit Employee</h3>
        </div>
        <form className="form-horizontal row-fluid" onSubmit={handleSubmit}>
          <div className="module-body">

          <div className="control-group">
              <label className="control-label" htmlFor="FirstName">Employee ID</label>
              <div className="controls">
                <input type="text" id="EmployeeId" name="employeeId" className="span6" value={formData.Employee_ID}  readOnly  />
              </div>
            </div>
            {Object.keys(formData).map((key) => (
             key !== 'Employee_ID'&& key !== 'Gender' && key !== 'Shareholder_Status' && key !== 'Benefit_Plans' &&
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
                  {error && error.field === key && (
                        <div className="error-message">{error.message}</div>
                    )} 
                </div>
              </div>
            ))}

            {/* Gender */}
            <div className="control-group">
              <label className="control-label" htmlFor="Gender">Gender</label>
              <div className="controls">
                <select
                  id="Gender"
                  type="checkbox"
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  className="span6"
                >

                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {error && error.field === "Gender" && (
                        <div className="error-message">{error.message}</div>
                    )} 
              </div>
            </div>

            {/* Shareholder Status */}
            <div className="control-group">
              <label className="control-label" htmlFor="ShareholderStatus">Shareholder Status</label>
              <div className="controls">
                <input
                  type="checkbox"
                  id="ShareholderStatus"
                  name="Shareholder_Status"
                  checked={formData.Shareholder_Status}
                  onChange={handleChange}
                />
                {error && error.field === "ShareholderStatus" && (
                        <div className="error-message">{error.message}</div>
                    )} 
              </div>
              
            </div>

            {/* Benefit Plans */}
            <div className="control-group">
              <label className="control-label" htmlFor="BenefitPlans">Benefit Plans</label>
              <div className="controls">
                <select
                  id="BenefitPlans"
                   type="checkbox"
                  name="Benefit_Plans"
                  value={formData.Benefit_Plans}
                  onChange={handleChange}
                  className="span6"
                >
                  <option value="">-- Select Benefit Plan --</option>
                  {benefitPlans1.map((plan) => (
                    <option key={plan.id} value={plan.name}>{plan.name}</option>
                  ))}

                </select>
                {error && error.field === "Benefit_Plans" && (
                        <div className="error-message">{error.message}</div>
                    )} 
              </div>
            </div>
            <div className="control-group">
              <div className="col-md-offset-2 controls">
                <input type="submit" value="Save" className="btn btn-default" />
                <Link to="/employee" className="btn btn-default">Back to List</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;