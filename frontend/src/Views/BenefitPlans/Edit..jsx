import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditBenefitPlan = () => {
  const [formData, setFormData] = useState({
    plan_name: '',
    deductable: '',
    percentage: ''
  });
  const [error, setError] = useState('');

  const { id } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBenefitPlanData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/benefitplan/${id}`);
        const { plan_name, deductable, percentage } = response.data.data;
        setFormData({ plan_name, deductable, percentage });
      } catch (error) {
        console.log('Error fetching benefit plan data:', error);
      }
    };

    fetchBenefitPlanData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra xác minh trường không được null
    const requiredFields = ['plan_name', 'deductable', 'percentage'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`The field ${field} is required.`);
        setTimeout(() => {
          setError('');
        }, 15000); // Xóa thông báo sau 15 giây
        return;
      }
    }
    // Kiểm tra xác minh các trường số
    const numericFields = ['deductable', 'percentage'];
    for (const field of numericFields) {
      if (isNaN(formData[field])) {
        setError(`The field ${field} must be a number.`);
        return;
      }
    }

    try {
      await axios.put(`http://localhost:4000/api/benefitplan/${id}`, formData);
      console.log('Benefit plan data updated:', formData);
      navigate('/benefitplan');
    } catch (error) {
      console.log('Error updating benefit plan data:', error);
    }
  };

  return (
    <div className="content">
      <div className="module">
        <div className="module-head">
          <h3>Edit Benefit Plan</h3>
        </div>
        <form className="form-horizontal row-fluid" onSubmit={handleSubmit}>
          <div className="module-body">
            <div className="control-group">
              <label className="control-label" htmlFor="PlanName">Plan Name</label>
              <div className="controls">
                <input type="text" id="PlanName" name="plan_name" className="span6" value={formData.plan_name} onChange={handleChange} />
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="Deductable">Deductable</label>
              <div className="controls">
                <input type="text" id="Deductable" name="deductable" className="span6" value={formData.deductable} onChange={handleChange} />
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="Percentage">Percentage</label>
              <div className="controls">
                <input type="text" id="Percentage" name="percentage" className="span6" value={formData.percentage} onChange={handleChange} />
              </div>
            </div>

            <div className="control-group">
              <div className="col-md-offset-2 controls">
                <input type="submit" value="Save" className="btn btn-default" />
                <button className="btn btn-default" onClick={() => navigate('/benefitplan')}>Back to List</button>
              </div>
            </div>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default EditBenefitPlan;
