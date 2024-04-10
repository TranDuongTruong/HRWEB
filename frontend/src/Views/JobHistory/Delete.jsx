import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

function DeleteJobHistory() {
    const [jobHistoryData, setJobHistoryData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobHistory = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/jobHistory/${id}`);
                setJobHistoryData(response.data);
            } catch (error) {
                console.log('Error fetching job history:', error);
            }
        };

        fetchJobHistory();
    }, [id]);

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:4000/api/jobHistory/${id}`);
            navigate('/jobHistory');
        } catch (error) {
            console.log('Error deleting job history:', error);
        }
    };

    if (!jobHistoryData) {
        return <div>Loading...</div>;
    }

    const { First_Name, Last_Name , Department, Division, Start_Date, End_Date, Job_Title, Supervisor, Job_Category, Location, Departmen_Code, Salary_Type, Pay_Period, Hours_per_Week, Hazardous_Training } = jobHistoryData;

    return (
        <div>
            <h2>Delete</h2>
            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Job History</h4>
                <hr />
                <dl className="dl-horizontal">
                    <dt>Full Name</dt>
                    <dd>{First_Name} {Last_Name}</dd>

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
                    <dd>{Hazardous_Training === null ? 'Not Set' : Hazardous_Training ? 'True' : 'False'}</dd>
                </dl>

                <form onSubmit={handleDelete}>
                    <div className="form-actions no-color">
                        <input type="submit" value="Delete" className="btn btn-default" /> |
                        <Link to="/jobHistory">Back to List</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteJobHistory;