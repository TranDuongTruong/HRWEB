import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PersonalIndex = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredPersonals, setFilteredPersonals] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [personals, setPersonals] = useState({
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
    gender: 'Male',
    shareholder_Status: false,
    benefit_Plans: '', // We will store plan name instead of ID here
    ethnicity: ''
  });

  useEffect(() => {
    fetchPersonals();
  }, []);

  const fetchPersonals = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/personal');
      console.log("----------------",response.data)
      setPersonals(response.data);
    } catch (error) {
      console.log('Error fetching personal data:', error);
    }
  };

  useEffect(() => {
    if (personals && personals.data) {
      setFilteredPersonals(personals.data);
    }
  }, [personals]);

  const handleSearchChange = (event) => {
    const newKeyword = event.target.value.toLowerCase();
    setSearchKeyword(newKeyword);
    if (personals && personals.data) {
      const filteredData = personals.data.filter((item) =>
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
    console.log(personals)
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;

    return filteredPersonals.slice(startIndex, endIndex).map((item) => (
      <tr key={item.employee_ID} className="odd gradeX">
        <td>{item.first_Name} {item.Last_Name}</td>
        <td>{item.city}</td>
        <td>{item.email}</td>
        <td>{item.phone_Number}</td>
        <td className="center">{item.gender ? "Male" : "Female"}</td>
        <td className="center">{item.shareholder_Status ? "Yes" : "No"}</td>
        <td>
          <Link to={`/personal/edit/${item._id}`}>Edit</Link> |
          <Link to={`/personal/delete/${item._id}`}>Delete</Link>
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
          <h3>Personals - <Link to="/personal/create">Create New</Link></h3>
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
                <th>Full Name</th>
                <th>City</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Shareholder</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {renderTableEntries()}
            </tbody>
          </table>

          <div className="dataTables_info" id="DataTables_Table_0_info">Showing {Math.min(entriesPerPage, filteredPersonals.length)} of {filteredPersonals.length} entries</div>
          {renderPaginationButtons()}
        </div>
      </div>
    </>
  );
};

export default PersonalIndex;
