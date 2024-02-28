import React from 'react';

function BenefitPlanDetails({ plan }) {
    return (
        <div>
            <h2>Details</h2>
            <div>
                <h4>Benefit_Plans</h4>
                <hr />
                <dl className="dl-horizontal">
                    <dt>Plan Name</dt>
                    <dd>{plan.Plan_Name}</dd>

                    <dt>Deductable</dt>
                    <dd>{plan.Deductable}</dd>

                    <dt>Percentage CoPay</dt>
                    <dd>{plan.Percentage_CoPay}</dd>
                </dl>
            </div>
            <p>
                <a href={`/Edit/${plan.Benefit_Plan_ID}`} className="btn btn-default">Edit</a>
                <a href="index.html" className="btn btn-default">Back to List</a>
            </p>
        </div>
    );
}

export default BenefitPlanDetails;
