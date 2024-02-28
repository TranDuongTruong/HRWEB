import React from 'react';

const PersonalIndex = ({ personals }) => {
  return (
    <div className="module">
      <div className="module-head">
        <h3>Personals - <a href="/create">Create New</a></h3>
      </div>
      <div className="module-body table">
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
                  <a href={`/edit/${item.Employee_ID}`}>Edit</a> |
                  {/*<a href={`/details/${item.Employee_ID}`}>Details</a> |*/}
                  <a href={`/delete/${item.Employee_ID}`}>Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalIndex;
