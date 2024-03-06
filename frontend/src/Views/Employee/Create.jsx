import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';



const CreatePersonal = () => {
  const [formData, setFormData] = useState({
    employeeId: '' ,
    firstName: '',
    lastName: '',
    vacationDays: '',
    paidToDate: '',
    paidLastYear: '',
    payRate: '',
    payRateId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/employee', formData);    
      console.log('New employee data created:', formData);
      navigate('/employee');

    } catch (error) {
      console.log('Error creating new employee data:', error);
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

          <div className="control-group">
  <label className="control-label" htmlFor="EmployeeID">ID</label>
  <div className="controls">
    <input type="text" id="EmployeeID" name="employeeId" className="span6" onChange={handleChange} />
  </div>
</div>

<div className="control-group">
  <label className="control-label" htmlFor="FirstName">First Name</label>
  <div className="controls">
    <input type="text" id="FirstName" name="firstName" className="span6" onChange={handleChange} />
  </div>
</div>

<div className="control-group">
  <label className="control-label" htmlFor="LastName">Last Name</label>
  <div className="controls">
    <input type="text" id="LastName" name="lastName" className="span6" onChange={handleChange} />
  </div>
</div>

<div className="control-group">
  <label className="control-label" htmlFor="VacationDays">Vacation Days</label>
  <div className="controls">
    <input type="number" id="VacationDays" name="vacationDays" className="span6" onChange={handleChange} />
  </div>
</div>

<div className="control-group">
  <label className="control-label" htmlFor="PaidToDate">Paid To Date</label>
  <div className="controls">
    <input type="number" id="PaidToDate" name="paidToDate" className="span6" onChange={handleChange} />
  </div>
</div>

<div className="control-group">
  <label className="control-label" htmlFor="PaidLastYear">Paid Last Year</label>
  <div className="controls">
    <input type="number" id="PaidLastYear" name="paidLastYear" className="span6" onChange={handleChange} />
  </div>
</div>

<div className="control-group">
  <label className="control-label" htmlFor="PayRate">Pay Rate</label>
  <div className="controls">
    <input type="number" id="PayRate" name="payRate" className="span6" onChange={handleChange} />
  </div>
</div>

<div className="control-group">
  <label className="control-label" htmlFor="PayRateId">Pay Rate ID</label>
  <div className="controls">
    <input type="number" id="PayRateId" name="payRateId" className="span6" onChange={handleChange} />
  </div>
</div>


            <div className="control-group">
              <div className="col-md-offset-2 controls">


                <input type="submit" value="Create" className="btn btn-default" onClick={handleSubmit}/>
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
