﻿
// export default EditPersonal;
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Payrate/Create.css'

const EditPersonal = () => {
  const [formData, setFormData] = useState({
    Employee_ID: '',
    First_Name: '',
    Last_Name: '',
    VacationDays: '',
    PaidToDate: '',
    PaidLastYear: '',
    PayRate: '',
    PayRateId: ''
  });
  const [error, setError] = useState('');

  const { id } = useParams(); // Lấy employeeID từ URL

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {

        const response = await axios.get(`http://localhost:5000/api/employee/${id}`);

        const { Employee_ID, First_Name, Last_Name, VacationDays, PaidToDate, PaidLastYear, PayRate, PayRateId } = response.data.data;

        setFormData({ Employee_ID, First_Name, Last_Name, VacationDays, PaidToDate, PaidLastYear, PayRate, PayRateId });
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
    const requiredFields = ['Employee_ID', 'First_Name', 'Last_Name', 'VacationDays', 'PaidToDate', 'PaidLastYear', 'PayRate', 'PayRateId'];
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
      await axios.put(`http://localhost:5000/api/employee/${id}`, formData);
      console.log('Employee data updated:', formData);

      navigate('/employee');

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
                <input type="text" id="EmployeeId" name=" Employee_ID" className="span6" value={formData.Employee_ID} readOnly />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="First_Name">First Name</label>
              <div className="controls">
                <input type="text" id="FirstName" name="First_Name" className="span6" value={formData.First_Name} onChange={handleChange} />
                {error && error.field === 'First_Name' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="LastName">Last Name</label>
              <div className="controls">
                <input type="text" id="LastName" name="Last_Name" className="span6" value={formData.Last_Name} onChange={handleChange} />
                {error && error.field === 'Last_Name' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="VacationDays">Vacation Days</label>
              <div className="controls">
                <input type="number" id="VacationDays" name="VacationDays" className="span6" value={formData.VacationDays} onChange={handleChange} />
                {error && error.field === 'VacationDays' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PaidToDate">Paid To Date</label>
              <div className="controls">
                <input type="number" id="PaidToDate" name="PaidToDate" className="span6" value={formData.PaidToDate} onChange={handleChange} />
                {error && error.field === 'PaidToDate' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PaidLastYear">Paid Last Year</label>
              <div className="controls">
                <input type="number" id="PaidLastYear" name="PaidLastYear" className="span6" value={formData.PaidLastYear} onChange={handleChange} />

                {error && error.field === 'PaidLastYear' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PayRate">Pay Rate</label>
              <div className="controls">
                <input type="number" id="PayRate" name="PayRate" className="span6" value={formData.PayRate} onChange={handleChange} />
                {error && error.field === 'PayRate' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PayRateId">Pay Rate ID</label>
              <div className="controls">
                <input type="number" id="PayRateId" name="PayRateId" className="span6" value={formData.PayRateId} onChange={handleChange} />
                {error && error.field === 'PayRateId' && (
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