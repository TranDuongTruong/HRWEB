import React, { useState } from 'react';

function EditBenefitPlan() {
 
    return (
        <div>
            <h2>Edit</h2>
            <form >
                <div className="form-horizontal">
                    <h4>Benefit_Plans</h4>
                    <hr />
                    <input type="hidden" name="Benefit_Plan_ID"  />

                    <div className="form-group">
                        <label htmlFor="Plan_Name" className="control-label col-md-2">Plan Name</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="Plan_Name"  />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Deductable" className="control-label col-md-2">Deductable</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="Deductable" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Percentage_CoPay" className="control-label col-md-2">Percentage CoPay</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="Percentage_CoPay"  />
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
