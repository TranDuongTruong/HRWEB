import React, { useState } from 'react';
import Index from '../Admin/Index';

import { Routes, Route, Link } from 'react-router-dom'; // Import Link từ react-router-dom

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
    gender: '',
    shareholder_Status: '',
    benefit_Plans: '',
    ethnicity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xử lý gửi biểu mẫu ở đây
  };

  
  return (
    <>
    
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
                                <input type="text" id="EmployeeID" name="employee_ID" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* First Name */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="FirstName">First Name</label>
                            <div className="controls">
                                <input type="text" id="FirstName" name="first_Name" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Last Name */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="LastName">Last Name</label>
                            <div className="controls">
                                <input type="text" id="LastName" name="last_Name" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Middle Initial */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="MiddleInitial">Middle Initial</label>
                            <div className="controls">
                                <input type="text" id="MiddleInitial" name="middle_Initial" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Address1 */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="Address1">Address 1</label>
                            <div className="controls">
                                <input type="text" id="Address1" name="address1" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Address2 */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="Address2">Address 2</label>
                            <div className="controls">
                                <input type="text" id="Address2" name="address2" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* City */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="City">City</label>
                            <div className="controls">
                                <input type="text" id="City" name="city" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* State */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="State">State</label>
                            <div className="controls">
                                <input type="text" id="State" name="state" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Zip */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="Zip">Zip</label>
                            <div className="controls">
                                <input type="text" id="Zip" name="zip" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="Email">Email</label>
                            <div className="controls">
                                <input type="email" id="Email" name="email" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="PhoneNumber">Phone Number</label>
                            <div className="controls">
                                <input type="text" id="PhoneNumber" name="phone_Number" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Social Security Number */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="SSN">Social Security Number</label>
                            <div className="controls">
                                <input type="text" id="SSN" name="social_Security_Number" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Driver's License */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="DL">Driver's License</label>
                            <div className="controls">
                                <input type="text" id="DL" name="drivers_License" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Marital Status */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="MaritalStatus">Marital Status</label>
                            <div className="controls">
                                <input type="text" id="MaritalStatus" name="marital_Status" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="Gender">Gender</label>
                            <div className="controls">
                                <select id="Gender" name="gender" className="span6">
                                    <option value="true">Male</option>
                                    <option value="false">Female</option>
                                </select>
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Shareholder Status */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="ShareholderStatus">Shareholder Status</label>
                            <div className="controls">
                                <input type="text" id="ShareholderStatus" name="shareholder_Status" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Benefit Plans */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="BenefitPlans">Benefit Plans</label>
                            <div className="controls">
                                <select id="BenefitPlans" name="benefit_Plans" className="span6">
                                    {/* Options for Benefit Plans */}
                                </select>
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Ethnicity */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="Ethnicity">Ethnicity</label>
                            <div className="controls">
                                <input type="text" id="Ethnicity" name="ethnicity" className="span6" />
                                {/* Validation messages */}
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="control-group">
                            <div className="col-md-offset-2 controls">
                                <input type="submit" value="Create" className="btn btn-default" />
                                <Link to="/personals" className="btn btn-default">Back to List</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     

 
    
    </>

  )
}

export default CreatePersonal;
