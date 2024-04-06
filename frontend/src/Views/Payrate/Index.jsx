import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Index.css'
import classNames from 'classnames';

const PayrateIndex = () => {
  const [payrates, setPayrates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetchPayrates();
  }, [currentPage]);

  const fetchPayrates = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/payrate?page=${currentPage}&limit=${itemsPerPage}`
      );
      setPayrates(response.data.payrates);
      setTotalPages(response.data.totalPages)
    } catch (error) {
      console.log('Error fetching payrates:', error);
    }
  };

  const handlePageChange = (data) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <>
      <div>
        <h2>Payrates</h2>
        <p>
          <Link to="/payrate/create">Create New</Link>
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Tax Percentage</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payrates.map((payrate) => (
              <tr key={payrate._id}>
                <td>{payrate.name}</td>
                <td>{payrate.value}</td>
                <td>{payrate.taxPercentage}</td>
                <td>{payrate.type}</td>
                <td>{payrate.amount}</td>
                <td>
                  <Link to={`/payrate/edit/${payrate._id}`}>Edit</Link> |{' '}
                  <Link to={`/payrate/details/${payrate._id}`}>Details</Link> |{' '}
                  <Link to={`/payrate/delete/${payrate._id}`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={Math.ceil(totalPages)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={classNames('paginate')}
          previousClassName={classNames('paginate-button')}
          nextClassName={classNames('paginate-button')}
          pageClassName={classNames('paginate-button')}
          breakClassName={classNames('paginate-button', 'break')}
          activeClassName={classNames('paginate-button', 'selected')}
        />
      </div>
    </>
  );
};

export default PayrateIndex;
