import React, { useState,useEffect  } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Link } from 'react-router-dom';

const DeleteEmployee = () => {
  const navigate = useNavigate(); 

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
  const { id } = useParams(); // Lấy employeeID từ URL
  const benefitPlans1 = [
    { id: 1, name: 1 },
    { id: 2, name: 2},
    { id: 3, name: 3 },
    // Thêm các đối tượng khác nếu cần
  ];
 
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:4000/api/employee/${id}`);
      console.log(`Employee with ID ${id} has been deleted.`); 
            
      navigate( '/employee' );   
    } catch (error) {
      console.log('Error deleting employee:', error);
    }
  };

  useEffect(() => {
 
  }, []); 

  console.log("-------",formData.Gender);
  return (
    <div>
      <h2>Delete</h2>
      <h3>Are you sure you want to delete this?</h3>
      <div>
        <h4>Employee</h4>
        {Object.keys(formData).map((key, index) => (
  <div key={index}>
    <dl className="dl-horizontal">
      <dt>{key} :</dt>
      <dd>{key === "Gender" ? (formData[key] ? "Male" : "Female") : 
           key === "Shareholder_Status" ? (formData[key] ? "Yes" : "No") : 
           formData[key]}
      </dd>
    </dl>
  </div>
))}




        {/* Hiển thị thông tin cần xóa ở đây */}
        <hr />
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Delete" className="btn btn-default"  />
          <Link to="/employee" className="btn btn-default">Back to List</Link>
        </form>
      </div>
    </div>
  );
};

export default DeleteEmployee;
