// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// const PersonalIndex = ({ personals }) => {
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [filteredPersonals, setFilteredPersonals] = useState([]);
//   const [entriesPerPage, setEntriesPerPage] = useState(10);

//   useEffect(() => {
//     setFilteredPersonals(personals);
//   }, [personals]);

//   const handleSearchChange = (event) => {
//     setSearchKeyword(event.target.value);
//     const newKeyword = event.target.value.toLowerCase();
//     const filteredData = personals.filter((item) =>
//       Object.values(item).some((value) =>
//         value.toString().toLowerCase().includes(newKeyword)
//       )
//     );
//     setFilteredPersonals(filteredData);
//   };
//   const handleEntriesPerPageChange = (event) => {
//     setEntriesPerPage(parseInt(event.target.value));
//   };
//   const renderTableEntries = () => {
//     return personals.slice(0, entriesPerPage).map((item) => (
//       <tr key={item.employeeId} className="odd gradeX">
//         <td>{item.firstName}</td>
//         <td>{item.lastName}</td>
//         <td>{item.vacationDays}</td>
//         <td>{item.paidToDate}</td>
//         <td>{item.paidLastYear}</td>
//         <td>{item.payRate}</td>
//         <td>{item.payRateId}</td>
//         <td>
//           <Link to={`/employee/edit/${item.employeeId}`}>Edit</Link> | {/* Sử dụng Link thay vì thẻ a */}
//           <Link to={`/employee/delete/${item.employeeId}`}>Delete</Link>
//         </td>
//       </tr>
//     ));
//   };

//   return (
//     <>
//       <div className="module">
//         <div className="module-head">
//           <h3>Personals - <Link to="/employee/create">Create New</Link></h3>
//         </div>
//         <div className="module-body table">
//           <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper" role="grid">
//             <div id="DataTables_Table_0_length" className="dataTables_length">
//               <label>Show  <select 
//                   size="1" 
//                   name="DataTables_Table_0_length" 
//                   aria-controls="DataTables_Table_0"
//                   value={entriesPerPage}
//                   onChange={handleEntriesPerPageChange}
//                 >
//                   <option value="10">10</option>
//                   <option value="25">25</option>
//                   <option value="50">50</option>
//                   <option value="100">100</option>
//                 </select>  entries</label>
//             </div>
//             <div className="dataTables_filter" id="DataTables_Table_0_filter">
//               <label>Search: <input type="text" aria-controls="DataTables_Table_0" value={searchKeyword} onChange={handleSearchChange} /></label>
//             </div>
//           </div>

//           <table className="datatable-1 table table-bordered table-striped display" width="100%">
//             <thead>
//               <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Vacation Days</th>
//                 <th>Paid To Date</th>
//                 <th>Paid Last Year</th>
//                 <th>Pay Rate</th>
//                 <th>Pay Rate ID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {renderTableEntries()}
//             </tbody>
//           </table>

//           <div className="dataTables_info" id="DataTables_Table_0_info">Showing 1 to {filteredPersonals.length} of {filteredPersonals.length} entries</div>
//           <div className="dataTables_paginate paging_two_button btn-group datatable-pagination" id="DataTables_Table_0_paginate">
//             <a className="paginate_disabled_previous" tabIndex="0" role="button" id="DataTables_Table_0_previous" aria-controls="DataTables_Table_0">
//               <span>Previous</span><i className="icon-chevron-left shaded"></i>
//             </a>
//             <a className="paginate_enabled_next" tabIndex="0" role="button" id="DataTables_Table_0_next" aria-controls="DataTables_Table_0">
//               <span>Next</span><i className="icon-chevron-right shaded"></i></a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PersonalIndex;
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const PersonalIndex = ({ personals }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredPersonals, setFilteredPersonals] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  useEffect(() => {
    setFilteredPersonals(personals);
  }, [personals]);

  const handleSearchChange = (event) => {
    const newKeyword = event.target.value.toLowerCase();
    setSearchKeyword(newKeyword);
    const filteredData = personals.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(newKeyword)
      )
    );
    setFilteredPersonals(filteredData);
  };

  const handleEntriesPerPageChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value));
  };

  const renderTableEntries = () => {
    return filteredPersonals.slice(0, entriesPerPage).map((item) => (
      <tr key={item.employeeId} className="odd gradeX">
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.vacationDays}</td>
        <td>{item.paidToDate}</td>
        <td>{item.paidLastYear}</td>
        <td>{item.payRate}</td>
        <td>{item.payRateId}</td>
        <td>
          <Link to={`/employee/edit/${item.employeeId}`}>Edit</Link> |
          <Link to={`/employee/delete/${item.employeeId}`}>Delete</Link>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="module">
        <div className="module-head">
          <h3>Personals - <Link to="/employee/create">Create New</Link></h3>
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
                <th>Vacation Days</th>
                <th>Paid To Date</th>
                <th>Paid Last Year</th>
                <th>Pay Rate</th>
                <th>Pay Rate ID</th>
              </tr>
            </thead>
            <tbody>
              {renderTableEntries()}
            </tbody>
          </table>

          <div className="dataTables_info" id="DataTables_Table_0_info">Showing 1 to {Math.min(entriesPerPage, filteredPersonals.length)} of {filteredPersonals.length} entries</div>
          <div className="dataTables_paginate paging_two_button btn-group datatable-pagination" id="DataTables_Table_0_paginate">
            <a className="paginate_disabled_previous" tabIndex="0" role="button" id="DataTables_Table_0_previous" aria-controls="DataTables_Table_0">
              <span>Previous</span><i className="icon-chevron-left shaded"></i>
            </a>
            <a className="paginate_enabled_next" tabIndex="0" role="button" id="DataTables_Table_0_next" aria-controls="DataTables_Table_0">
              <span>Next</span><i className="icon-chevron-right shaded"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalIndex;
