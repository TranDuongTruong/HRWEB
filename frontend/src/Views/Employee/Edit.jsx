﻿
// export default EditPersonal;
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Payrate/Create.css'

const EditPersonal = () => {
  const [formData, setFormData] = useState({
    employeeId:'',
    firstName: '',
    lastName: '',
    vacationDays: '',
    paidToDate: '',
    paidLastYear: '',
    payRate: '',
    payRateId: ''
  });
  const [error, setError] = useState('');

  const { id } = useParams(); // Lấy employeeID từ URL
 
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
     
   const response = await axios.get(`http://localhost:4000/api/employee/${id}`);
       
        const { employeeId, firstName, lastName, vacationDays, paidToDate, paidLastYear, payRate, payRateId } = response.data.data;
  
        setFormData({ employeeId,firstName, lastName, vacationDays, paidToDate, paidLastYear, payRate, payRateId });
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
    const requiredFields = ['employeeId', 'firstName', 'lastName', 'vacationDays', 'paidToDate', 'paidLastYear', 'payRate', 'payRateId'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError({ field: field, message: 'The field ' + field + ' is required' });
        console.log(error.message);
        return;
      }
    }
  
    // Kiểm tra xác minh các trường số
    const numericFields = ['vacationDays', 'paidToDate', 'paidLastYear', 'payRate', 'payRateId'];
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
                <input type="text" id="EmployeeId" name="employeeId" className="span6" value={formData.employeeId}  readOnly  />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="FirstName">First Name</label>
              <div className="controls">
                <input type="text" id="FirstName" name="firstName" className="span6" value={formData.firstName} onChange={handleChange} />
                {error && error.field === 'firstName' && (
                        <div className="error-message">{error.message}</div>
                    )} 
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="LastName">Last Name</label>
              <div className="controls">
                <input type="text" id="LastName" name="lastName" className="span6" value={formData.lastName} onChange={handleChange} />
                {error && error.field === 'lastName' && (
                        <div className="error-message">{error.message}</div>
                    )} 
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="VacationDays">Vacation Days</label>
              <div className="controls">
                <input type="number" id="VacationDays" name="vacationDays" className="span6" value={formData.vacationDays} onChange={handleChange} />
                {error && error.field === 'vacationDays' && (
                        <div className="error-message">{error.message}</div>
                    )} 
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PaidToDate">Paid To Date</label>
              <div className="controls">
                <input type="number" id="PaidToDate" name="paidToDate" className="span6" value={formData.paidToDate} onChange={handleChange} />
                {error && error.field === 'paidToDate' && (
                        <div className="error-message">{error.message}</div>
                    )} 
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PaidLastYear">Paid Last Year</label>
              <div className="controls">
                <input type="number" id="PaidLastYear" name="paidLastYear" className="span6" value={formData.paidLastYear} onChange={handleChange} />

                {error && error.field === 'paidLastYear' && (
                        <div className="error-message">{error.message}</div>
                    )} 
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PayRate">Pay Rate</label>
              <div className="controls">
                <input type="number" id="PayRate" name="payRate" className="span6" value={formData.payRate} onChange={handleChange} />
                {error && error.field === 'payRate' && (
                        <div className="error-message">{error.message}</div>
                    )} 
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PayRateId">Pay Rate ID</label>
              <div className="controls">
                <input type="number" id="PayRateId" name="payRateId" className="span6" value={formData.payRateId} onChange={handleChange} />
                {error && error.field === 'payRateId' && (
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

export default EditPersonal;