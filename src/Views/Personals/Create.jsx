import React, { useState } from 'react';
import Index from '../Admin/Index';


const CreatePersonal = () => {

  
  const [formData, setFormData] = useState({
    employee_ID: '',
    first_Name: '',
    last_Name: '',
    middle_Initial: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone_Number: '',
    social_Security_Number: '',
    drivers_License: '',
    marital_Status: '',
    gender: '',
    shareholder_Status: '',
    benefit_Plans: '',
    ethnicity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xử lý gửi biểu mẫu ở đây
  };

  console.log("gfffffffffffffffffffffffff")
  return (
    <>
    
    <div className="content">
      <div className="module">
        <div className="module-head">
          <h3>Create Personal</h3>
        </div>
        <form className="form-horizontal row-fluid" onSubmit={handleSubmit}>
          <div className="module-body">
            <div className="control-group">
              <label className="control-label" htmlFor="EmployeeID">Employee ID</label>
              <div className="controls">
                <input
                  type="text"
                  id="EmployeeID"
                  name="employee_ID"
                  value={formData.employee_ID}
                  onChange={handleChange}
                  className="span6"
                />
              </div>
            </div>
            {/* Các trường dữ liệu khác tương tự */}
            <div className="control-group">
              <label className="control-label" htmlFor="BenefitPlans">Benefit Plans</label>
              <div className="controls">
                <select
                  id="BenefitPlans"
                  name="benefit_Plans"
                  value={formData.benefit_Plans}
                  onChange={handleChange}
                  className="span6"
                >
                  <option value="">-- Select Benefit Plan --</option>
                  {/* Thêm các tùy chọn cho Benefit Plans nếu cần */}
                </select>
              </div>
            </div>
            <div className="control-group">
              <div className="col-md-offset-2 controls">
                <input type="submit" value="Create" className="btn btn-default" />
                {/* Nút "Back to List" sẽ được xử lý bằng React Router */}

              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="span9">
      {/* <Routers>
      <Router path='/index' element={Index}></Router>

      </Routers> */}
      </div>

    </div>
    
    </>

  )
}

export default CreatePersonal;
