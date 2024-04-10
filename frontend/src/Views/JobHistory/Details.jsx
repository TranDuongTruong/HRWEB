import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

function JobHistoryDetails() {
    const { id } = useParams();
    const [jobHistory, setJobHistory] = useState(null);
    const [hazardousTraining, setHazardousTraining] = useState('Not Set');

    useEffect(() => {
        // Kiểm tra nếu id không phải là undefined
        if (id) {
            const fetchJobHistoryById = async () => {
                try {
                    const response = await axios.get(`http://localhost:4000/api/jobHistory/${id}`);
                    setJobHistory(response.data); // Assume response.data contains the job history details
                } catch (error) {
                    console.log('Error fetching job history:', error);
                }
            };

            fetchJobHistoryById();
        }
    }, [id]);

    useEffect(() => {
        if (jobHistory) {
            setHazardousTraining(jobHistory.Hazardous_Training);
        }
    }, [jobHistory]);

    if (!jobHistory) {
        return <div>Loading...</div>;
    }

    const { First_Name, Last_Name, Department, Division, Start_Date, End_Date, Job_Title, Supervisor, Job_Category, Location, Departmen_Code, Salary_Type, Pay_Period, Hours_per_Week } = jobHistory;

    const handleChange = (e) => {
        setHazardousTraining(e.target.value);
    };
    const formatDateTime = (datetime) => {
        return moment(datetime).format('DD/MM/YYYY hh:mm:ss A');
      };

    return (
        <div>
            <h2>Details</h2>
            <div>
                <h4>Job_History</h4>
                <hr />
                <dl className="dl-horizontal">

                    <dt>Full Name</dt>
                    <dd>{First_Name} {Last_Name}</dd>

                    <dt>Department</dt>
                    <dd>{Department}</dd>

                     <dt>Division</dt>
                    <dd>{Division}</dd>

                    <dt>Start Date</dt>
                    <dd>{formatDateTime(Start_Date)}</dd>

                    <dt>End Date</dt>
                    <dd>{formatDateTime(End_Date)}</dd>

                    <dt>Job Title</dt>
                    <dd>{Job_Title}</dd>

                    <dt>Supervisor</dt>
                    <dd>{Supervisor}</dd>

                    <dt>Job Category</dt>
                    <dd>{Job_Category}</dd>

                    <dt>Location</dt>
                    <dd>{Location}</dd>

                    <dt>Departmen_Code</dt>
                    <dd>{Departmen_Code}</dd>

                    <dt>Salary_Type</dt>
                    <dd>{Salary_Type}</dd>

                    <dt>Pay_Period</dt>
                    <dd>{Pay_Period}</dd>

                    <dt>Hours_per_Week</dt>
                    <dd>{Hours_per_Week}</dd>

                    <dt>Hazardous Training</dt>
                    <dd>
                        <select value={hazardousTraining} onChange={handleChange}>
                            <option value="NotSet">Not Set</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </dd> 
                </dl>
            </div>

            <p>
                <Link to={`/jobHistory/edit/${id}`}>Edit</Link> |{' '}
                <Link to="/jobHistory">Back to List</Link>
            </p>
        </div>
    );
}

export default JobHistoryDetails;
