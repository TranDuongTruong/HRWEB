import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link từ react-router-dom

const CreatePayrate  = () => {
    const [name, setName] = useState('');
    const [value, setValue] = useState(0);
    const [taxPercentage, setTaxPercentage] = useState(0.1);
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Thực hiện xử lý gửi biểu mẫu ở đây
    };

    return (
        <div>
            <h2>Create Payrate</h2>
            <form onSubmit={handleSubmit}>
                {/* Các trường nhập */}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <div className='form-group'>
                    <label htmlFor="value">Value</label>
                    <input type="number" id="value" value={value} onChange={(e) => setValue(Number(e.target.value))} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="taxPercentage">Tax Percentage</label>
                    <input type="number" id="taxPercentage" value={taxPercentage} onChange={(e) => setTaxPercentage(Number(e.target.value))} className="form-control" />
                </div>
                <div className='form-group'>
                    <label htmlFor="type">Type</label>
                    <input type="text" id="type" value={type} onChange={(e)=>setType(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Create</button>
                </div>
            </form>

            {/* Link "Back to List" */}
            <div>
                {/* Thêm nút hoặc liên kết để quay lại danh sách Payrate */}
            </div>
        </div>
    );
};

export default CreatePayrate ;
