import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Link } from 'react-router-dom';

const DeletePersonal = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/api/employee/${id}`);
      console.log(`Employee with ID ${id} has been deleted.`);

      navigate('/employee');
    } catch (error) {
      console.log('Error deleting employee:', error);
    }
  };
  console.log(id)
  useEffect(() => {

  }, []);

  return (
    <div>
      <h2>Delete</h2>
      <h3>Are you sure you want to delete this?</h3>
      <div>
        <h4>Employee</h4>
        <dl className="dl-horizontal">
          <dt>Employee Id</dt>
          <dd>{formData.Employee_ID}</dd>
          <dt>Name</dt>
          <dd>{formData.First_Name + formData.lastName}</dd>

          <dt>Vacation days</dt>
          <dd>{formData.VacationDays}</dd>

          <dt>Paid To Date</dt>
          <dd>{formData.PaidToDate}</dd>

          <dt>Payrate</dt>
          <dd>{formData.PayRate}</dd>

          <dt>Payrate ID</dt>
          <dd>{formData.PayRateId}</dd>
        </dl>
        {/* Hiển thị thông tin cần xóa ở đây */}
        <hr />
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Delete" className="btn btn-default" />
          <Link to="/employee" className="btn btn-default">Back to List</Link>
        </form>
      </div>
    </div>
  );
};

export default DeletePersonal;