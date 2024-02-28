import React, { useState } from 'react';

const EditPersonal = ({ personal, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(personal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="content">
      <div className="module">
        <div className="module-head">
          <h3>Edit Personal</h3>
        </div>
        <form onSubmit={handleSubmit} className="form-horizontal row-fluid">
          <div className="module-body">
            <input type="hidden" name="Employee_ID" value={formData.Employee_ID} />

            <div className="control-group">
              <label className="control-label col-md-2" htmlFor="First_Name">First Name</label>
              <div className="controls">
                <input type="text" className="span6" id="First_Name" name="First_Name" value={formData.First_Name} onChange={handleChange} />
              </div>
            </div>

            {/* Other input fields go here */}

            <div className="control-group">
              <div className="col-md-offset-2 controls">
                <input type="submit" value="Save" className="btn btn-default" />
                <button type="button" className="btn btn-default" onClick={handleCancel}>Back to List</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPersonal;
