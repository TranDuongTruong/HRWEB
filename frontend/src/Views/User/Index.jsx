// import React from 'react';

// import { Routes, Route, Link } from 'react-router-dom'; 

// function JobHistoryIndex({ jobHistories }) {
//     // Assume jobHistories is passed as props containing an array of job history objects
//     return (
        
// <>
       
  
//         <div>
//             <h2>Index</h2>
//             <p>
//             <Link to="/user/create">Create New</Link>
//             </p>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Full Name</th>
//                         <th>Department</th>
//                         <th>Division</th>
//                         <th>Start Date</th>
//                         <th>End Date</th>
//                         <th>Job Category</th>
//                         <th>Location</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {jobHistories.map(jobHistory => (
//                         <tr key={jobHistory.ID}>
//                             <td>{jobHistory.Personal.First_Name} {jobHistory.Personal.Last_Name}</td>
//                             <td>{jobHistory.Department}</td>
//                             <td>{jobHistory.Division}</td>
//                             <td>{jobHistory.Start_Date}</td>
//                             <td>{jobHistory.End_Date}</td>
//                             <td>{jobHistory.Job_Category}</td>
//                             <td>{jobHistory.Location}</td>
//                             <td>
//                             <Link to={`/user/edit/${jobHistory.ID}`}>Edit | </Link> 
//                             <Link to={`/user/details/${jobHistory.ID}`}>Details | </Link> 
//                              <Link to={`/user/delete/${jobHistory.ID}`}>Delete</Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//         </>
//     )
// }

// export default JobHistoryIndex;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobHistoryIndex = () => {
    const [users, setUsers] = useState([]);

    const [filteredPersonals, setFilteredPersonals] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/users');
            console.log(response.data)  
            setUsers(response.data); // Sửa thành response.data
        } catch (error) {
            console.log('Error fetching users:', error);
        }
    };
    useEffect(() => {
        if (users && users.data) {
          setFilteredPersonals(users.data);
        }
      }, [users]);
console.log(filteredPersonals)
    return (
        <>
              <div>
            <h2>USERS</h2>
            <p>
            <Link to="/user/create">Create New</Link>
            </p>
            <table className="table">
                <thead>
                <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { filteredPersonals.map(user => (
                        <tr key={user._id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <Link to={`/user/edit/${user._id}`}>Edit</Link> |{' '}
                            <Link to={`/user/delete/${user._id}`}>Delete</Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default JobHistoryIndex;
