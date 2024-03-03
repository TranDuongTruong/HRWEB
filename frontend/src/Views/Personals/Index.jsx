import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link từ react-router-dom


const PersonalIndex = ({ personals }) => {

  return (
    <>
    <div className="module">
    <div className="module-head">
        <h3>Personals - <Link to="/personals/create">Create New</Link></h3> {/* Sử dụng Link thay vì thẻ a */}
      </div>
      <div className="module-body table">
      
      <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper" role="grid">
        <div id="DataTables_Table_0_length" class="dataTables_length">
          <label>Show <select size="1" name="DataTables_Table_0_length" aria-controls="DataTables_Table_0">
            <option value="10">10</option><option value="25">25</option><option value="50">50</option>
            <option value="100">100</option></select> entries</label>
            </div>
            <div class="dataTables_filter" id="DataTables_Table_0_filter">
        <label>Search: <input type="text" aria-controls="DataTables_Table_0" /></label>
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
    {personals.map((item) => (
      <tr key={item.employeeId} className="odd gradeX">
      
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.vacationDays}</td>
        <td>{item.paidToDate}</td>
        <td>{item.paidLastYear}</td>
        <td>{item.payRate}</td>
        <td>{item.payRateId}</td>
        <td>
          <Link to={`/personals/edit/${item.employeeId}`}>Edit</Link> | {/* Sử dụng Link thay vì thẻ a */}
          <Link to={`/personals/delete/${item.employeeId}`}>Delete</Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        <div class="dataTables_info" id="DataTables_Table_0_info">Showing 1 to 10 of 50 entries</div>
        <div class="dataTables_paginate paging_two_button btn-group datatable-pagination" id="DataTables_Table_0_paginate">
          <a class="paginate_disabled_previous" tabindex="0" role="button" id="DataTables_Table_0_previous" aria-controls="DataTables_Table_0">
            <span>Previous</span><i class="icon-chevron-left shaded"></i>
            </a>
            <a class="paginate_enabled_next" tabindex="0" role="button" id="DataTables_Table_0_next" aria-controls="DataTables_Table_0">
              <span>Next</span><i class="icon-chevron-right shaded"></i></a></div>
      </div>
      


    </div>
    </>
  );
};

export default PersonalIndex;