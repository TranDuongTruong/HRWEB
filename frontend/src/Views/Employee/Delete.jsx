import React, { useEffect } from 'react';
import axios from 'axios';

const DeletePersonal = ({ employeeID }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Gửi yêu cầu xóa dữ liệu tới API
      await axios.delete(`http://localhost:4000/api/employee/${employeeID}`);
      console.log(`Employee with ID ${employeeID} has been deleted.`);
      // Thực hiện chuyển hướng hoặc cập nhật UI tại đây (nếu cần)
    } catch (error) {
      console.log('Error deleting employee:', error);
    }
  };

  useEffect(() => {
    // Logic để lấy dữ liệu personal từ API hoặc props và hiển thị thông tin cần xóa
  }, []); // Gọi API để lấy thông tin cần xóa khi component được render lần đầu tiên

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
          <button className="btn btn-default">Back to List</button>
        </form>
      </div>
    </div>
  );
};

export default DeletePersonal;
