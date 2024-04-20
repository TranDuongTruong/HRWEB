import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
//import io from 'socket.io-client';
import io from 'socket.io-client';

const socket1 = io('http://localhost:4000'); // Adjust the URL based on your server
const socket2 = io('http://localhost:8080/');

import axios from 'axios';

//var newSocket=io("http://localhost:4000");

const EmployeeIndex = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredPersonals, setFilteredPersonals] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    fetchEmployee();
    console.log("aaa")
    socket1.on('employeeCreated', () => {
      console.log("employeeCreated")
      fetchEmployee();
    });

    socket1.on('employeeUpdated', () => {
      console.log("employeeUpdated")
      fetchEmployee();
    });
    socket1.on('employeeDeleted', () => {
      console.log("employeeDeleted")
      fetchEmployee();
    });
    socket2.emit("addNewUser")

    socket2.on('getNewEmployee', () => {
      console.log("getNewEmployee")
      fetchEmployee();
    });

    // Clean up listeners
    return () => {
      socket1.off('employeeCreated', fetchEmployee);
      socket1.off('employeeUpdated', fetchEmployee);
      socket1.off('employeeDeleted', fetchEmployee);
      socket2.off('employeeCreated', fetchEmployee);

    };


  }, []);



  const fetchEmployee = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/employee/combionedData');
      console.log("------------------------------------------------------------------\n", response.data)
      setEmployees(response.data);
    } catch (error) {
      console.log('Error fetching employee data:', error);
    }
  };

  useEffect(() => {
    if (employees && employees.data) {
      setFilteredPersonals(employees.data);
    }
  }, [employees]);

  const handleSearchChange = (event) => {
    const newKeyword = event.target.value.toLowerCase();
    setSearchKeyword(newKeyword);
    if (employees && employees.data) {
      const filteredData = employees.data.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(newKeyword)
        )
      );
      setFilteredPersonals(filteredData);
    }

  };

  const handleEntriesPerPageChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const renderTableEntries = () => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;

    return filteredPersonals.slice(startIndex, endIndex).map((item) => (

      <tr key={item.Employee_ID} className="odd gradeX">
        <td>{item.First_Name}</td>
        <td>{item.Last_Name}</td>
        <td>{(item.Gender ? "Male" : "Female")}</td>
        <td>{item.Email}</td>
        <td>{item.Phone_Number}</td>
        <td>{item.Benefit_Plans}</td>
        <td>{item.PayRate}</td>
        <td>
          <Link to={`/employee/edit/${item.Employee_ID}`}>Edit</Link> |
          <Link to={`/employee/delete/${item.Employee_ID}`}>Delete</Link>
        </td>
      </tr>
    ));
  };

  const renderPaginationButtons = () => {
    if (filteredPersonals && filteredPersonals.length > 0) {
      const totalPages = Math.ceil(filteredPersonals.length / entriesPerPage);
      const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

      return (
        <div className="dataTables_paginate paging_two_button btn-group datatable-pagination" id="DataTables_Table_0_paginate">
          <a
            className={`paginate_disabled_previous ${currentPage === 1 ? 'disabled' : ''}`}
            tabIndex="0"
            role="button"
            id="DataTables_Table_0_previous"
            aria-controls="DataTables_Table_0"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <span>Previous</span><i className="icon-chevron-left shaded"></i>
          </a>
          {pageNumbers.map((pageNumber) => (
            <a
              key={pageNumber}
              className={`paginate_enabled_next ${currentPage === pageNumber ? 'active' : ''}`}
              tabIndex="0"
              role="button"
              aria-controls="DataTables_Table_0"
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </a>
          ))}
          <a
            className={`paginate_enabled_next ${currentPage === totalPages ? 'disabled' : ''}`}
            tabIndex="0"
            role="button"
            id="DataTables_Table_0_next"
            aria-controls="DataTables_Table_0"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span>Next</span><i className="icon-chevron-right shaded"></i>
          </a>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="module">
        <div className="module-head">
          <h3>Employee - <Link to="/employee/create">Create New</Link></h3>
        </div>
        <div className="module-body table">
          <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper" role="grid">
            <div id="DataTables_Table_0_length" className="dataTables_length">
              <label>Show
                <select
                  size="1"
                  name="DataTables_Table_0_length"
                  aria-controls="DataTables_Table_0"
                  value={entriesPerPage}
                  onChange={handleEntriesPerPageChange}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
            <div className="dataTables_filter" id="DataTables_Table_0_filter">
              <label>Search: <input type="text" value={searchKeyword} onChange={handleSearchChange} aria-controls="DataTables_Table_0" /></label>
            </div>
          </div>

          <table className="datatable-1 table table-bordered table-striped display" width="100%">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone_Number</th>
                <th>Benefit_Plans</th>
                <th>Pay Rate</th>
              </tr>
            </thead>
            <tbody>
              {renderTableEntries()}
            </tbody>
          </table>

          <div className="dataTables_info" id="DataTables_Table_0_info">Showing {Math.min(entriesPerPage, filteredPersonals.length)} of {filteredPersonals.length} entries</div>
          {renderPaginationButtons()}
        </div>

        <script src='/socket.io/socket.io.js'></script>

      </div>

    </>
  );
};

export default EmployeeIndex;
