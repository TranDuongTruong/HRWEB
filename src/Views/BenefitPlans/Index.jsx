import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link từ react-router-dom

function BenefitPlanIndex({ benefitPlans }) {
    return (
        <div className="module">
            <div className="module-head">
                <h3>Benefit Plans -   <Link to="/benefitplans/create">Create New</Link></h3>
            </div>
            <div className="module-body table">
                <table className="datatable-1 table table-bordered table-striped display" width="100%">
                    <thead>
                        <tr>
                            <th>Plan Name</th>
                            <th>Deductable</th>
                            <th>Percentage CoPay</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {benefitPlans.map(plan => (
                            <tr key={plan.Benefit_Plan_ID}>
                                <td>{plan.Plan_Name}</td>
                                <td>{plan.Deductable}</td>
                                <td>{plan.Percentage_CoPay}</td>
                                <td>
                                <Link to={`/benefitplans/edit/${plan.Benefit_Plan_ID}`}>Edit</Link> |&nbsp;
                                <Link to={`/benefitplans/details/${plan.Benefit_Plan_ID}`}>Details</Link> |&nbsp;
                                <Link to={`/benefitplans/delete/${plan.Benefit_Plan_ID}`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BenefitPlanIndex;
