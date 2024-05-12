
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Payrate/Create.css'


const CreatePersonal = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Kiểm tra xác minh trường không được null
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
      const checkEmployeeIdResponse = await axios.get(`http://localhost:5000/api/employee/checkEmployeeId/${formData.Employee_ID}`);
      console.log(formData.Employee_ID + "checkEmployeeIdResponse", checkEmployeeIdResponse)
      if (checkEmployeeIdResponse.data.data != null) {
        setError({ field: 'Employee_ID', message: `The employee ID ${formData.Employee_ID} already exists.` });
        return;
      }

      const response = await axios.post('http://localhost:5000/api/employee', formData);
      console.log('New employee data created:', response);
      navigate('/employee');
    } catch (error) {
      console.log('Error creating new employee data:', error);
    }
  };

  return (
    <div className="content">
      <div className="module">
        <div className="module-head">
          <h3>Create Employee</h3>
        </div>
        <form className="form-horizontal row-fluid" onSubmit={handleSubmit}>
          <div className="module-body">

            <div className="control-group">
              <label className="control-label" htmlFor="EmployeeID">ID</label>
              <div className="controls">
                <input type="text" id="EmployeeID" name="Employee_ID" className="span6" onChange={handleChange} />
                {error && error.field === 'Employee_ID' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>


            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="FirstName">First Name</label>
              <div className="controls">
                <input type="text" id="FirstName" name="First_Name" className="span6" onChange={handleChange} />
                {error && error.field === 'First_Name' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>

            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="LastName">Last Name</label>
              <div className="controls">
                <input type="text" id="LastName" name="Last_Name" className="span6" onChange={handleChange} />
                {error && error.field === 'Last_Name' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="VacationDays">Vacation Days</label>
              <div className="controls">
                <input type="number" id="VacationDays" name="VacationDays" className="span6" onChange={handleChange} />
                {error && error.field === 'VacationDays' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PaidToDate">Paid To Date</label>
              <div className="controls">
                <input type="number" id="PaidToDate" name="PaidToDate" className="span6" onChange={handleChange} />
                {error && error.field === 'PaidToDate' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PaidLastYear">Paid Last Year</label>
              <div className="controls">
                <input type="number" id="PaidLastYear" name="PaidLastYear" className="span6" onChange={handleChange} />
                {error && error.field === 'PaidLastYear' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PayRate">Pay Rate</label>
              <div className="controls">
                <input type="number" id="PayRate" name="PayRate" className="span6" onChange={handleChange} />
                {error && error.field === 'PayRate' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="PayRateId">Pay Rate ID</label>
              <div className="controls">
                <input type="number" id="PayRateId" name="PayRateId" className="span6" onChange={handleChange} />
                {error && error.field === 'PayRateId' && (
                  <div className="error-message">{error.message}</div>
                )}
              </div>
            </div>


            <div className="control-group">
              <div className="col-md-offset-2 controls">


                <input type="submit" value="Create" className="btn btn-default" onClick={handleSubmit} />
                <Link to="/employee" className="btn btn-default">Back to List</Link>
              </div>
            </div>
          </div>
        </form>


      </div>
    </div>
  );
};

export default CreatePersonal;
