import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

import io from 'socket.io-client';

function EditJobHistory() {
    const socket = io('http://localhost:8080');

    const [jobHistoryData, setJobHistoryData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const formatDateTime = (datetime) => {
        return moment(datetime).format('DD/MM/YYYY hh:mm:ss A');
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/jobHistory/${id}`);
                setJobHistoryData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]); // Fetch data whenever id changes

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:4000/api/jobHistory/${id}`, jobHistoryData);
            socket.emit("editJobHistory")
            navigate('/jobHistory');
        } catch (error) {
            console.error('Error updating data:', error);
            setError(error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleChange = (e) => {
        setJobHistoryData({ ...jobHistoryData, Hazardous_Training: e.target.value });
    };

    return (
        <div className="content">
            <div className="module">
                <div className="module-head">
                    <h3>Edit Job History</h3>
                </div>
                <form onSubmit={handleFormSubmit} className="form-horizontal row-fluid">
                    <input type="hidden" name="ID" value={jobHistoryData.ID} />
                    <div className="module-body">
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Employee_ID">Employee_ID</label>
                            <div className="controls">
                                <input readOnly type="text" name="Employee_ID" className="span6" value={jobHistoryData.Employee_ID} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Department: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Department">Department</label>
                            <div className="controls">
                                <input type="text" name="Department" className="span6" value={jobHistoryData.Department} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Department: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Division">Division</label>
                            <div className="controls">
                                <input type="text" name="Division" className="span6" value={jobHistoryData.Division} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Division: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Start_Date">Start Date</label>
                            <div className="controls">
                                <input type="text" name="Start_Date" className="span6" value={formatDateTime(jobHistoryData.Start_Date)} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Start_Date: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="End_Date">End Date</label>
                            <div className="controls">
                                <input type="text" name="End_Date" className="span6" value={formatDateTime(jobHistoryData.End_Date)} onChange={(e) => setJobHistoryData({ ...jobHistoryData, End_Date: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Job_Title">Job Title</label>
                            <div className="controls">
                                <input type="text" name="Job_Title" className="span6" value={jobHistoryData.Job_Title} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Job_Title: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Supervisor">Supervisor</label>
                            <div className="controls">
                                <input type="text" name="Supervisor" className="span6" value={jobHistoryData.Supervisor} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Supervisor: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Job_Category">Job Category</label>
                            <div className="controls">
                                <input type="text" name="Job_Category" className="span6" value={jobHistoryData.Job_Category} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Job_Category: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Location">Location</label>
                            <div className="controls">
                                <input type="text" name="Location" className="span6" value={jobHistoryData.Location} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Location: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Departmen_Code">Departmen_Code</label>
                            <div className="controls">
                                <input type="text" name="Departmen_Code" className="span6" value={jobHistoryData.Departmen_Code} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Departmen_Code: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Salary_Type">Salary_Type</label>
                            <div className="controls">
                                <input type="text" name="Salary_Type" className="span6" value={jobHistoryData.Salary_Type} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Salary_Type: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Pay_Period">Pay_Period</label>
                            <div className="controls">
                                <input type="text" name="Pay_Period" className="span6" value={jobHistoryData.Pay_Period} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Pay_Period: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Hours_per_Week">Hours_per_Week</label>
                            <div className="controls">
                                <input type="text" name="Hours_per_Week" className="span6" value={jobHistoryData.Hours_per_Week} onChange={(e) => setJobHistoryData({ ...jobHistoryData, Hours_per_Week: e.target.value })} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label col-md-2" htmlFor="Hazardous_Training">Hazardous Training</label>
                            <div className="controls">
                                {console.log(jobHistoryData.Hazardous_Training)}
                                <select name="Hazardous_Training" defaultValue={jobHistoryData.Hazardous_Training} onChange={handleChange}>
                                    <option value="NotSet">Not Set</option>
                                    <option value="false">False</option>
                                    <option value="true">True</option>
                                </select>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="col-md-offset-2 controls">
                                <input type="submit" value="Save" className="btn btn-default" />
                                <Link to="/jobHistory" className="btn btn-default">Back to List</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditJobHistory;