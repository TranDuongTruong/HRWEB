import React from 'react';

const PersonalDetails = ({ personal }) => {
  return (
    <div>
      <h2>Details</h2>
      <div>
        <h4>Personal</h4>
        <hr />
        <dl className="dl-horizontal">
          <dt>Benefit Plan Name</dt>
          <dd>{personal.Benefit_Plans1.Plan_Name}</dd>

          <dt>Emergency Contact Name</dt>
          <dd>{personal.Emergency_Contacts.Emergency_Contact_Name}</dd>

          <dt>Employment Status</dt>
          <dd>{personal.Employment.Employment_Status}</dd>

          <dt>First Name</dt>
          <dd>{personal.First_Name}</dd>

          <dt>Last Name</dt>
          <dd>{personal.Last_Name}</dd>

          <dt>Middle Initial</dt>
          <dd>{personal.Middle_Initial}</dd>

          <dt>Address1</dt>
          <dd>{personal.Address1}</dd>

          <dt>Address2</dt>
          <dd>{personal.Address2}</dd>

          <dt>City</dt>
          <dd>{personal.City}</dd>

          <dt>State</dt>
          <dd>{personal.State}</dd>

          <dt>Zip</dt>
          <dd>{personal.Zip}</dd>

          <dt>Email</dt>
          <dd>{personal.Email}</dd>

          <dt>Phone Number</dt>
          <dd>{personal.Phone_Number}</dd>

          <dt>Social Security Number</dt>
          <dd>{personal.Social_Security_Number}</dd>

          <dt>Drivers License</dt>
          <dd>{personal.Drivers_License}</dd>

          <dt>Marital Status</dt>
          <dd>{personal.Marital_Status}</dd>

          <dt>Gender</dt>
          <dd>{personal.Gender}</dd>

          <dt>Shareholder Status</dt>
          <dd>{personal.Shareholder_Status}</dd>

          <dt>Ethnicity</dt>
          <dd>{personal.Ethnicity}</dd>
        </dl>
      </div>
      <p>
        <button onClick={() => console.log('Edit button clicked')}>Edit</button>
        <button onClick={() => console.log('Back to List button clicked')}>Back to List</button>
      </p>
    </div>
  );
};

export default PersonalDetails;
