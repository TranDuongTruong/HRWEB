import React from 'react';

const DeletePersonal = () => {
  // Logic để lấy dữ liệu personal từ API hoặc props

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thêm logic xử lý xóa ở đây
  };

  return (
    <div>
      <h2>Delete</h2>
      <h3>Are you sure you want to delete this?</h3>
      <div>
        <h4>Personal</h4>
        <hr />
        {/* Hiển thị dữ liệu personal ở đây */}
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Delete" className="btn btn-default" />
          <button className="btn btn-default">Back to List</button>
        </form>
      </div>
    </div>
  );
};

export default DeletePersonal;
