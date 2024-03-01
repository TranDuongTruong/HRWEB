import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link từ react-router-dom

const CreateJobHistory = () => {
    // Khởi tạo các trường nhập với giá trị mặc định là rỗng
    const [employeeId, setEmployeeId] = useState('');
    const [department, setDepartment] = useState('');
    const [division, setDivision] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [supervisor, setSupervisor] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [location, setLocation] = useState('');
    const [departmentCode, setDepartmentCode] = useState('');
    const [salaryType, setSalaryType] = useState('');
    const [payPeriod, setPayPeriod] = useState('');
    const [hoursPerWeek, setHoursPerWeek] = useState('');
    const [hazardousTraining, setHazardousTraining] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Thực hiện xử lý gửi biểu mẫu ở đây
    };

    return (
        <div>
            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
                {/* Các trường nhập */}
                <div className="form-group">
                    <label htmlFor="employeeId">Employee ID</label>
                    <input type="text" id="employeeId" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} className="form-control" />
                </div>
                {/* Các trường nhập khác tương tự */}

                {/* Nút gửi biểu mẫu */}
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Create</button>
                </div>
            </form>

            {/* Link "Back to List" */}
            <div>
               
            </div>
        </div>
    );
};

export default CreateJobHistory;
