import React from 'react';

function DeleteJobHistory() {
    // Assume jobHistoryData is passed as props containing job history details
    const { Personal, Department, Division, Start_Date, End_Date, Job_Title, Supervisor, Job_Category, Location, Departmen_Code, Salary_Type, Pay_Period, Hours_per_Week, Hazardous_Training } = jobHistoryData;

    const handleDelete = (e) => {
        e.preventDefault();
        // Code to handle deletion goes here
    };

    return (
        <div>
            <h2>Delete</h2>
            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Job_History</h4>
                <hr />
                <dl className="dl-horizontal">
                    <dt>First Name</dt>
                    <dd>{Personal.First_Name}</dd>

                    <dt>Department</dt>
                    <dd>{Department}</dd>

                    <dt>Division</dt>
                    <dd>{Division}</dd>

                    <dt>Start Date</dt>
                    <dd>{Start_Date}</dd>

                    <dt>End Date</dt>
                    <dd>{End_Date}</dd>

                    <dt>Job Title</dt>
                    <dd>{Job_Title}</dd>

                    <dt>Supervisor</dt>
                    <dd>{Supervisor}</dd>

                    <dt>Job Category</dt>
                    <dd>{Job_Category}</dd>

                    <dt>Location</dt>
                    <dd>{Location}</dd>

                    <dt>Department Code</dt>
                    <dd>{Departmen_Code}</dd>

                    <dt>Salary Type</dt>
                    <dd>{Salary_Type}</dd>

                    <dt>Pay Period</dt>
                    <dd>{Pay_Period}</dd>

                    <dt>Hours per Week</dt>
                    <dd>{Hours_per_Week}</dd>

                    <dt>Hazardous Training</dt>
                    <dd>{Hazardous_Training}</dd>
                </dl>

                <form onSubmit={handleDelete}>
                    <div className="form-actions no-color">
                        <input type="submit" value="Delete" className="btn btn-default" /> |
                        <a href="/index">Back to List</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteJobHistory;
