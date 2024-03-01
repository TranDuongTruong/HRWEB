import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link từ react-router-dom

import PersonalDetails from '../Personals/Details';
import CreatePersonal from '../Personals/Create' ;
import EditPersonal from '../Personals/Edit'; 
import DeletePersonal from '../Personals/Delete';
const PersonalIndex = ({ personals }) => {

  return (
    <>
    <div className="span9">
      <Routes>
      <Route path='/create' element={<CreatePersonal />} />
      <Route path='/edit/:id' element={<EditPersonal />} /> 
      <Route path='/delete/:id' element={<DeletePersonal />} />
      </Routes>
      </div>

      
    <div className="module">
    <div className="module-head">
        <h3>Personals - <Link to="/create">Create New</Link></h3> {/* Sử dụng Link thay vì thẻ a */}
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
            {personals.map((item) => (
              <tr key={item.Employee_ID} className="odd gradeX">
                <td>{item.First_Name} {item.Last_Name}</td>
                <td>{item.City}</td>
                <td>{item.Email}</td>
                <td>{item.Phone_Number}</td>
                <td className="center">{item.Gender ? "Male" : "Female"}</td>
                <td className="center">{item.Shareholder_Status ? "Yes" : "No"}</td>
                <td>
                  <Link to={`/edit/${item.Employee_ID}`}>Edit</Link> | {/* Sử dụng Link thay vì thẻ a */}
                  {/*<Link to={`/details/${item.Employee_ID}`}>Details</Link> |*/}
                  <Link to={`/delete/${item.Employee_ID}`}>Delete</Link>
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
