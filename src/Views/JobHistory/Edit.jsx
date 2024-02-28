import React from 'react';

function EditJobHistory({ jobHistory, handleSubmit }) {
    // Assume jobHistory is passed as props containing job history details
    const { ID, Employee_ID, Department, Division, Start_Date, End_Date, Job_Title, Supervisor, Job_Category, Location, Departmen_Code, Salary_Type, Pay_Period, Hours_per_Week, Hazardous_Training } = jobHistory;

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Logic to handle form submission
        handleSubmit();
    };

    return (
        <div className="content">
            <div className="module">
                <div className="module-head">
                    <h3>Edit Job History</h3>
                </div>
                <form onSubmit={handleFormSubmit} className="form-horizontal row-fluid">
                    <input type="hidden" name="ID" value={ID} />
                    <div className="module-body">
                        {/* Remaining form elements */}
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Employee_ID">Employee ID</label>
                            <div className="controls">
                                <select name="Employee_ID" className="span6" value={Employee_ID}>
                                    {/* Options for Employee_ID dropdown */}
                                </select>
                                {/* Validation message for Employee_ID */}
                            </div>
                        </div>
                        {/* Remaining form elements */}
                        <div className="control-group">
                            <div className="col-md-offset-2 controls">
                                <input type="submit" value="Save" className="btn btn-default" />
                                <a href="/index" className="btn btn-default">Back to List</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditJobHistory;
