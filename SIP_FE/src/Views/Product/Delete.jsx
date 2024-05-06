import React from 'react';

function DeleteBenefitPlan({ plan }) {
    const handleDelete = () => {
        // Gửi yêu cầu xóa đến server hoặc xử lý logic tương ứng
        console.log('Deleted:', plan);
    };

    return (
        <div>
            <h2>Delete</h2>
            <h3>Are you sure you want to delete this?</h3>
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
                <form onSubmit={handleDelete}>
                    <button type="submit" className="btn btn-default">Delete</button>
                    <a href="index.html" className="btn btn-default">Back to List</a>
                </form>
            </div>
        </div>
    );
}

export default DeleteBenefitPlan;
