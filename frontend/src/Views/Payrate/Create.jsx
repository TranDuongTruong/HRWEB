import React, { useState } from 'react';
import { usePayrateContext } from './PayrateContext';
import { useNavigate } from 'react-router-dom';
import './Create.css'

const CreatePayrate = () => {
    const { addPayrate } = usePayrateContext();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [taxPercentage, setTaxPercentage] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset previous error
        setError(null);

        // Validate the form inputs
        if (name === '') {
            setError({ field: 'name', message: 'Name is required' });
            return;
        }

        if (isNaN(value)) {
            setError({ field: 'value', message: 'Value must be numbers' });
            return;
        }
        
        if (isNaN(taxPercentage)) {
            setError({ field: 'taxPercentage', message: 'Tax Percentage must be numbers' });
            return;
        }
        if (isNaN(type)) {
            setError({ field: 'type', message: 'Type must be numbers' });
            return;
        }
        if (isNaN(amount)) {
            setError({ field: 'amount', message: 'Amount must be numbers' });
            return;
        }

        // Nếu không có lỗi, thêm payrate mới
        addPayrate({ name, value, taxPercentage, type, amount });

        // Reset form sau khi thêm mới
        setName('');
        setValue('');
        setTaxPercentage('');
        setType('');
        setAmount('');

        // Quay lại trang /payrate sau khi thêm mới thành công
        navigate('/payrate');
    };

    return (
        <div>
            <h2>Create Payrate</h2>
            <form onSubmit={handleSubmit}>
                {/* Các trường nhập */}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                    />
                    {error && error.field === 'name' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="value">Value</label>
                    <input
                        type="number"
                        id="value"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="form-control"
                    />
                    {error && error.field === 'value' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="taxPercentage">Tax Percentage</label>
                    <input
                        type="number"
                        id="taxPercentage"
                        value={taxPercentage}
                        onChange={(e) => setTaxPercentage(Number(e.target.value))}
                        className="form-control"
                    />
                    {error && error.field === 'taxPercentage' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <input
                        type="text"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="form-control"
                    />
                    {error && error.field === 'type' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="form-control"
                    />
                    {error && error.field === 'amount' && (
                        <div className="error-message">{error.message}</div>
                    )}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Create</button>
                </div>
            </form>

            {/* Hiển thị thông báo lỗi */}
            {/* {error && <div className="error-message">{error}</div>} */}

            {/* Link "Back to List" */}
            <div>
                {/* Thêm nút hoặc liên kết để quay lại danh sách Payrate */}
            </div>
        </div>
    );
};
export default CreatePayrate;
