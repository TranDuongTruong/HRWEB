import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './Create.css';
// import JobHistory from './path/to/JobHistory'; // Import JobHistory model

const CreateJobHistory = () => {
    const navigate = useNavigate();

    const [jobHistoryData, setJobHistoryData] = useState({
        Employee: '',
        Department: '',
        Division: '',
        Start_Date: '',
        End_Date: '',
        Job_Title: '',
        Supervisor: '',
        Job_Category: '',
        Location: '',
        Departmen_Code: '',
        Salary_Type: '',
        Pay_Period: '',
        Hours_per_Week: '',
        Hazardous_Training: false
    });

    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null); // Reset previous error

        try {
            // Thêm mới job history
            const response = await fetch('http://localhost:4000/api/jobHistory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jobHistoryData)
            });

            if (!response.ok) {
                throw new Error('Failed to create job history');
            }

            // Quay lại trang /jobhistory sau khi thêm mới thành công
            navigate('/jobHistory');
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to create job history');
        }
    };

    // Hàm xử lý thay đổi giá trị các trường
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobHistoryData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Create </h2>
            <h3>Job History</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                {/* Các trường nhập */}
                <div className="form-group">
                    <label htmlFor="employee">EmployeeId</label>
                    <input
                        type="text"
                        id="employee"
                        value={jobHistoryData.Employee}
                        onChange={handleChange}
                        name="Employee"
                        className="form-control"
                    />
                    {error && error.field === 'Employee' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input
                        type="text"
                        id="department"
                        value={jobHistoryData.Department}
                        onChange={handleChange}
                        name="Department"
                        className="form-control"
                    />
                    {error && error.field === 'Department' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="division">Division</label>
                    <input
                        type="text"
                        id="division"
                        value={jobHistoryData.Division}
                        onChange={handleChange}
                        name="Division"
                        className="form-control"
                    />
                    {error && error.field === 'Division' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="start_date">Start Date</label>
                    <input
                        type="date"
                        id="start_date"
                        value={jobHistoryData.Start_Date}
                        onChange={handleChange}
                        name="Start_Date"
                        className="form-control"
                    />
                    {error && error.field === 'Start_Date' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="end_date">End Date</label>
                    <input
                        type="date"
                        id="end_date"
                        value={jobHistoryData.End_Date}
                        onChange={handleChange}
                        name="End_Date"
                        className="form-control"
                    />
                    {error && error.field === 'End_Date' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="job_title">Job Title</label>
                    <input
                        type="text"
                        id="job_title"
                        value={jobHistoryData.Job_Title}
                        onChange={handleChange}
                        name="Job_Title"
                        className="form-control"
                    />
                    {error && error.field === 'Job_Title' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="supervisor">Supervisor</label>
                    <input
                        type="text"
                        id="supervisor"
                        value={jobHistoryData.Supervisor}
                        onChange={handleChange}
                        name="Supervisor"
                        className="form-control"
                    />
                    {error && error.field === 'Supervisor' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="job_category">Job Category</label>
                    <input
                        type="text"
                        id="job_category"
                        value={jobHistoryData.Job_Category}
                        onChange={handleChange}
                        name="Job_Category"
                        className="form-control"
                    />
                    {error && error.field === 'Job_Category' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        value={jobHistoryData.Location}
                        onChange={handleChange}
                        name="Location"
                        className="form-control"
                    />
                    {error && error.field === 'Location' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="departmen_code">Department Code</label>
                    <input
                        type="text"
                        id="departmen_code"
                        value={jobHistoryData.Departmen_Code}
                        onChange={handleChange}
                        name="Departmen_Code"
                        className="form-control"
                    />
                    {error && error.field === 'Departmen_Code' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="salary_type">Salary Type</label>
                    <input
                        type="text"
                        id="salary_type"
                        value={jobHistoryData.Salary_Type}
                        onChange={handleChange}
                        name="Salary_Type"
                        className="form-control"
                    />
                    {error && error.field === 'Salary_Type' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="pay_period">Pay Period</label>
                    <input
                        type="text"
                        id="pay_period"
                        value={jobHistoryData.Pay_Period}
                        onChange={handleChange}
                        name="Pay_Period"
                        className="form-control"
                    />
                    {error && error.field === 'Pay_Period' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="hours_per_week">Hours per Week</label>
                    <input
                        type="text"
                        id="hours_per_week"
                        value={jobHistoryData.Hours_per_Week}
                        onChange={handleChange}
                        name="Hours_per_Week"
                        className="form-control"
                    />
                    {error && error.field === 'Hours_per_Week' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="hazardous_training">Hazardous Training</label>
                    <select
                        id="hazardous_training"
                        value={jobHistoryData.Hazardous_Training}
                        onChange={handleChange}
                        name="Hazardous_Training"
                        className="form-control"
                    >
                        <option value="NotSet">Not Set</option>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>

                    {error && error.field === 'Hazardous_Training' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>


                <div className="form-group">
                    <button type="submit" className="btn btn-default">Create</button>
                </div>
            </form>

            {/* Hiển thị thông báo lỗi */}
            {error && <div className="error-message">{error}</div>}

            {/* Link "Back to List" */}
            <div>
                <Link to="/jobhistory">Back to List</Link>
            </div>
        </div>
    );
};

export default CreateJobHistory;
