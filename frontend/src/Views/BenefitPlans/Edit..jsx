import React, { useState } from 'react';

function EditBenefitPlan({ plan }) {
    const [planName, setPlanName] = useState(plan.Plan_Name);
    const [deductable, setDeductable] = useState(plan.Deductable);
    const [percentageCoPay, setPercentageCoPay] = useState(plan.Percentage_CoPay);

    const handlePlanNameChange = (e) => {
        setPlanName(e.target.value);
    };

    const handleDeductableChange = (e) => {
        setDeductable(e.target.value);
    };

    const handlePercentageCoPayChange = (e) => {
        setPercentageCoPay(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to save the changes
    };

    return (
        <div>
            <h2>Edit</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-horizontal">
                    <h4>Benefit_Plans</h4>
                    <hr />
                    <input type="hidden" name="Benefit_Plan_ID" value={plan.Benefit_Plan_ID} />

                    <div className="form-group">
                        <label htmlFor="Plan_Name" className="control-label col-md-2">Plan Name</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="Plan_Name" value={planName} onChange={handlePlanNameChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Deductable" className="control-label col-md-2">Deductable</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="Deductable" value={deductable} onChange={handleDeductableChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Percentage_CoPay" className="control-label col-md-2">Percentage CoPay</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="Percentage_CoPay" value={percentageCoPay} onChange={handlePercentageCoPayChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-offset-2 col-md-10">
                            <button type="submit" className="btn btn-default">Save</button>
                        </div>
                    </div>
                </div>
            </form>
            <div>
                <a href="index.html" className="btn btn-default">Back to List</a>
            </div>
        </div>
    );
}

export default EditBenefitPlan;
