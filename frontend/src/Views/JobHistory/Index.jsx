import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Index.css';
import classNames from 'classnames';
import moment from 'moment'; // Import moment library
import io from 'socket.io-client';

//const socket = io('http://localhost:4000'); // Adjust the URL based on your server
const socket2 = io('http://localhost:8080/');
const JobHistoryIndex = () => {
  const [jobHistories, setJobHistories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetchJobHistories();
    // Listen for Socket.io events
    // socket.on('jobHistoryCreated', fetchJobHistories);

    // socket.on('jobHistoryCreated', () => {
    //   console.log("newjobHistoryCreated")
    //   fetchJobHistories();
    // });

    // socket.on('jobHistoryUpdated', () => {
    //   console.log("jobHistoryUpdated")
    //   fetchJobHistories();
    // });
    // socket.on('jobHistoryDeleted', () => {
    //   console.log("jobHistoryDeleted")
    //   fetchJobHistories();
    // });
    const userName = "web3"; // Thay đổi thành tên của user thực tế
    socket2.emit("addNewUser", userName);

    socket2.on('getNewJobHistory', () => {
      fetchJobHistories();
    });

    // Clean up listeners
    return () => {
      // socket.off('jobHistoryCreated', fetchJobHistories);
      // socket.off('jobHistoryUpdated', fetchJobHistories);
      // socket.off('jobHistoryDeleted', fetchJobHistories);
    };
  }, [currentPage]); // Refresh when page changes

  const fetchJobHistories = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/jobHistory/pagination?page=${currentPage}&limit=${itemsPerPage}`
      );
      setJobHistories(response.data.jobHistories);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log('Error fetching job histories:', error);
    }
  };

  const handlePageChange = (data) => {
    setCurrentPage(data.selected + 1);
  };

  // Function to format datetime
  const formatDateTime = (datetime) => {
    return moment(datetime).format('DD/MM/YYYY hh:mm:ss A');
  };

  return (
    <>
      <div>
        <h2>Index</h2>
        <Link to="/jobHistory/create">Create New</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Department</th>
              <th>Division</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Job Category</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobHistories.map((history) => (
              <tr key={history._id}>
                <td>
                  {history.First_Name} {history.Last_Name}
                </td>
                <td>{history.Department}</td>
                <td>{history.Division}</td>
                <td>{formatDateTime(history.Start_Date)}</td>
                <td>{formatDateTime(history.End_Date)}</td>
                <td>{history.Job_Category}</td>
                <td>{history.Location}</td>
                <td>
                  <Link to={`/jobHistory/edit/${history.ID}`}>Edit</Link> |{' '}
                  <Link to={`/jobHistory/details/${history.ID}`}>Details</Link> |{' '}
                  <Link to={`/jobHistory/delete/${history.ID}`}>Delete</Link>
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

export default JobHistoryIndex;