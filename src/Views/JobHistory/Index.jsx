import React from 'react';
import CreateJobHistory from '../JobHistory/Create'
import { Routes,Route ,Link} from 'react-router-dom';

function JobHistoryIndex({ jobHistories }) {
    // Assume jobHistories is passed as props containing an array of job history objects
    return (
        
<>
        <div className="span9">
        <Routes>
        <Route path='/create' element={<CreateJobHistory />} />
        </Routes>
        </div>
  
        <div>
            <h2>Index</h2>
            <p>
            <Link to="/create">Create New</Link>
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Department</th>
                        <th>Division</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Job Category</th>
                        <th>Location</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {jobHistories.map(jobHistory => (
                        <tr key={jobHistory.ID}>
                            <td>{jobHistory.Personal.First_Name} {jobHistory.Personal.Last_Name}</td>
                            <td>{jobHistory.Department}</td>
                            <td>{jobHistory.Division}</td>
                            <td>{jobHistory.Start_Date}</td>
                            <td>{jobHistory.End_Date}</td>
                            <td>{jobHistory.Job_Category}</td>
                            <td>{jobHistory.Location}</td>
                            <td>
                                <a href={`/edit/${jobHistory.ID}`}>Edit</a> |
                                <a href={`/details/${jobHistory.ID}`}>Details</a> |
                                <a href={`/delete/${jobHistory.ID}`}>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default JobHistoryIndex;
