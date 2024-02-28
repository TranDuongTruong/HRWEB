import React from 'react';

function BenefitPlanIndex({ benefitPlans }) {
    return (
        <div className="module">
            <div className="module-head">
                <h3>Benefit Plans - <a href="/create">Create New</a></h3>
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
                                    <a href={`/edit/${plan.Benefit_Plan_ID}`}>Edit</a> |&nbsp;
                                    <a href={`/details/${plan.Benefit_Plan_ID}`}>Details</a> |&nbsp;
                                    <a href={`/delete/${plan.Benefit_Plan_ID}`}>Delete</a>
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
