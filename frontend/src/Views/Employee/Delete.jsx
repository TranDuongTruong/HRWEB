import React, { useEffect  } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { Link } from 'react-router-dom';

const DeletePersonal = ({ employeeID }) => {

  let { id } = useParams();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:4000/api/employee/${id}`);
      console.log(`Employee with ID ${id} has been deleted.`);    
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
        <h4>Employee ID: {employeeID}</h4>
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

export default DeletePersonal;
