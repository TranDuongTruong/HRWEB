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
import { usePayrateContext } from './PayrateContext';


const PayrateIndex = () => {
    const { state, fetchPayrates } = usePayrateContext();
    const { payrates } = state;

    useEffect(() => {
        fetchPayrates();
    }, []);

    return (
        <>
            <div>
                <h2>Payrates</h2>
                <p>
                    <Link to="/payrate/create">Create New</Link>
                </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                            <th>Tax Percentage</th>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {payrates.map(payrate => (
                            <tr key={payrate._id}>
                                <td>{payrate.name}</td>
                                <td>{payrate.value}</td>
                                <td>{payrate.taxPercentage}</td>
                                <td>{payrate.type}</td>
                                <td>{payrate.amount}</td>
                                <td>
                                    <Link to={`/payrate/edit/${payrate._id}`}>Edit</Link> |{' '}
                                    <Link to={`/payrate/details/${payrate._id}`}>Details</Link> |{' '}
                                    <Link to={`/payrate/delete/${payrate._id}`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PayrateIndex;
