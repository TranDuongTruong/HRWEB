import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';

function BenefitPlanIndex() {
    const [benefitPlans, setBenefitPlans] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [itemsPerPage, setItemsPerPage] = useState(10); // Số lượng dòng trên mỗi trang

    useEffect(() => {
        fetchBenefitPlans();
    }, [currentPage]); // Fetch lại dữ liệu khi trang thay đổi

    const fetchBenefitPlans = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/benefitplan');
            setBenefitPlans(response.data.data); 
        } catch (error) {
            console.log('Error fetching benefit plans:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    const handleShowCountChange = (event) => {
        setItemsPerPage(parseInt(event.target.value));
    };

    // Tính toán index bắt đầu và index kết thúc của dòng cần hiển thị
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = benefitPlans.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="module">
            <div className="module-head">
                <h3>Benefit Plans - <Link to="/benefitplan/create">Create New</Link></h3>
                <div>
                    <select value={itemsPerPage} onChange={handleShowCountChange}>
                        <option value={5}>Show 5</option>
                        <option value={10}>Show 10</option>
                        <option value={15}>Show 15</option>
                        <option value={20}>Show 20</option>
                        <option value={50}>Show 50</option>
                        <option value={70}>Show 70</option>
                        <option value={100}>Show 100</option>
                    </select>
                    <input
                        type="text"
                        value={searchKeyword}
                        onChange={handleSearchChange}
                        placeholder="Search by plan name..."
                    />
                    
                </div>
            </div>
            <div className="module-body table">
                <table className="datatable-1 table table-bordered table-striped display" width="100%">
                    <thead>
                        <tr>
                            <th>Plan Name</th>
                            <th>Deductable</th>
                            <th>Percentage CoPay</th>
                
                        </tr>
                    </thead>
                    <tbody>
                    {currentItems.map((plan, index) => (
                        <tr key={index}>
                            <td>{plan.Plan_Name}</td>
                            <td>{plan.Deductable}</td>
                            <td>{plan.Percentage_CoPay}</td>
                            <td>
                                <Link to={`/benefitplan/edit/${plan.Benefit_Plan_ID}`}>Edit</Link> |&nbsp;
                                <Link to={`/benefitplan/details/${plan.Benefit_Plan_ID}`}>Details</Link> |&nbsp;
                                <Link to={`/benefitplan/delete/${plan.Benefit_Plan_ID}`}>Delete</Link>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
                {/* Nút chuyển trang */}
                <div>
                    {benefitPlans.length > itemsPerPage && (
                        <div>
                            {Array.from({ length: Math.ceil(benefitPlans.length / itemsPerPage) }, (_, i) => (
                                <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
                            ))}
                        </div>
                    )}
                </div>
                {/* Hiển thị tổng số phần tử */}
                <div>
                    Total entries: {benefitPlans.length}
                </div>
            </div>
        </div>
    );
}

export default BenefitPlanIndex;
