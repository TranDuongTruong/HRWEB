import React, { useState } from 'react';

function CreateJobHistory() {
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
        // Code to handle form submission goes here
    };

    return (
        <div className="form-horizontal">
            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Employee_ID" className="control-label col-md-2">Employee_ID</label>
                    <div className="col-md-10">
                        <select id="Employee_ID" className="form-control" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
                            {/* Options for Employee_ID dropdown */}
                        </select>
                    </div>
                </div>

                {/* Other form fields go here with similar structure */}
                
                <div className="form-group">
                    <div className="col-md-offset-2 col-md-10">
                        <input type="submit" value="Create" className="btn btn-default" />
                    </div>
                </div>
            </form>

            <div>
                <a href="/index">Back to List</a>
            </div>
        </div>
    );
}

export default CreateJobHistory;
