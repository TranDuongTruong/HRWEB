import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPersonal = () => {
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
    gender: 'Male',
    shareholder_Status: false,
    benefit_Plans: '', // We will store plan name instead of ID here
    ethnicity: ''
  });
  const [benefitPlans, setBenefitPlans] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch benefit plans and personal data
    fetchBenefitPlans();
    fetchPersonalData();
  }, []);

  const fetchBenefitPlans = async () => {
    // try {
    //   const response = await axios.get('http://localhost:4000/api/benefitplan');
    //   console.log(response.data)
    //   setBenefitPlans(response.data);
    // } catch (error) {
    //   console.log('Error fetching benefit plans:', error);
    // }
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/personal/${id}`, formData);
      
      console.log('Personal data updated:', formData);
      navigate('/personal');
    } catch (error) {
      console.log('Error updating personal data:', error);
    }
  };
  return (
    <div className="content">
      <div className="module">
        <div className="module-head">
          <h3>Edit Personal</h3>
        </div>
        <form onSubmit={handleSubmit} className="form-horizontal row-fluid">
          <div className="module-body">
            {/* Input field for Employee_ID */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Employee_ID">Employee ID</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Employee_ID"
                  name="Employee_ID"
                  value={formData.employee_ID}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for First_Name */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="First_Name">First Name</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="First_Name"
                  name="First_Name"
                  value={formData.first_Name}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for Last_Name */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Last_Name">Last Name</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Last_Name"
                  name="Last_Name"
                  value={formData.last_Name}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for Middle_Initial */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Middle_Initial">Middle Initial</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Middle_Initial"
                  name="Middle_Initial"
                  value={formData.middle_Initial}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for Address1 */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Address1">Address 1</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Address1"
                  name="Address1"
                  value={formData.address1}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for Address2 */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Address2">Address 2</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Address2"
                  name="Address2"
                  value={formData.address2}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for City */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="City">City</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="City"
                  name="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for State */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="State">State</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="State"
                  name="State"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for Zip */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Zip">Zip</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Zip"
                  name="Zip"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for Email */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Email">Email</label>
              <div className="controls">
                <input
                  type="email"
                  className="span6"
                  id="Email"
                  name="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for Phone_Number */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Phone_Number">Phone Number</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Phone_Number"
                  name="Phone_Number"
                  value={formData.phone_Number}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for Social_Security_Number */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Social_Security_Number">Social Security Number</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Social_Security_Number"
                  name="Social_Security_Number"
                  value={formData.social_Security_Number}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for Drivers_License */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Drivers_License">Driver's License</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Drivers_License"
                  name="Drivers_License"
                  value={formData.drivers_License}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Input field for Marital_Status */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Marital_Status">Marital Status</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Marital_Status"
                  name="Marital_Status"
                  value={formData.marital_Status}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Select field for Gender */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Gender">Gender</label>
              <div className="controls">
                <select
                  className="span6"
                  id="Gender"
                  name="Gender"
                  value={formData.gender ? 'Male' : 'Female'}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
  
            {/* Checkbox for Shareholder Status */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Shareholder_Status">Shareholder Status</label>
              <div className="controls">
                <label>
                  <input
                    type="checkbox"
                    name="Shareholder_Status"
                    checked={formData.shareholder_Status}
                    onChange={handleChange}
                  />
                  Shareholder
                </label>
              </div>
            </div>
  
            {/* Input field for Benefit_Plans */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Benefit_Plans">Benefit Plans</label>
              <div className="controls">
                <select
                  className="span6"
                  id="Benefit_Plans"
                  name="Benefit_Plans"
                  value={formData.benefit_Plans}
                  onChange={handleChange}
                >
                  <option value="">{formData.Benefit_Plans}</option>
                  {/* Uncomment below to map benefit plans */}
                  {/* {benefitPlans.map(plan => (
                    <option key={plan.id} value={plan.name}>{plan.name}</option>
                  ))} */}
                </select>
              </div>
            </div>
  
            {/* Input field for Ethnicity */}
            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="Ethnicity">Ethnicity</label>
              <div className="controls">
                <input
                  type="text"
                  className="span6"
                  id="Ethnicity"
                  name="Ethnicity"
                  value={formData.ethnicity}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            <div className="control-group">
              <div className="col-md-offset-2 controls">
                <input type="submit" value="Save" className="btn btn-default" />
                <Link to="/personal" className="btn btn-default">Back to List</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default EditPersonal;
