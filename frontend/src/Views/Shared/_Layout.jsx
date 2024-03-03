import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { Routes,Route ,Link} from 'react-router-dom';



import PersonalDetails from '../Personals/Details';
import CreatePersonal from '../Personals/Create' ;
import PersonalIndex from '../Personals/Index';
import EditPersonal from '../Personals/Edit'; 
import DeletePersonal from '../Personals/Delete';



import JobHistoryDetails from '../JobHistory/Details';
import CreateJobHistory from '../JobHistory/Create' ;
import JobHistoryIndex from '../JobHistory/Index';
import EditJobHistory from '../JobHistory/Edit'; 
import DeleteJobHistory from '../JobHistory/Delete';




import BenefitPlanDetails from '../BenefitPlans/Details';
import BenefitPlanForm from '../BenefitPlans/Create' ;
import BenefitPlanIndex from '../BenefitPlans/Index';
import EditBenefitPlan from '../BenefitPlans/Edit.'; 
import DeleteBenefitPlan from '../BenefitPlans/Delete';

import Index from '../Admin/Index';
import Login from '../Login/Login';
//import AdminDashboard from this;

// const personalsData = [
//   {
//     Employee_ID: 1,
//     First_Name: "John",
//     Last_Name: "Doe",
//     City: "New York",
//     Email: "john.doe@example.com",
//     Phone_Number: "1234567890",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 2,
//     First_Name: "Jane",
//     Last_Name: "Smith",
//     City: "Los Angeles",
//     Email: "jane.smith@example.com",
//     Phone_Number: "9876543210",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 3,
//     First_Name: "Alice",
//     Last_Name: "Johnson",
//     City: "Chicago",
//     Email: "alice.johnson@example.com",
//     Phone_Number: "5551234567",
//     Gender: false,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 4,
//     First_Name: "Michael",
//     Last_Name: "Williams",
//     City: "Houston",
//     Email: "michael.williams@example.com",
//     Phone_Number: "4445678901",
//     Gender: true,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 5,
//     First_Name: "Emily",
//     Last_Name: "Brown",
//     City: "Seattle",
//     Email: "emily.brown@example.com",
//     Phone_Number: "3337890123",
//     Gender: false,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 6,
//     First_Name: "David",
//     Last_Name: "Garcia",
//     City: "Miami",
//     Email: "david.garcia@example.com",
//     Phone_Number: "2228901234",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 7,
//     First_Name: "Olivia",
//     Last_Name: "Martinez",
//     City: "Dallas",
//     Email: "olivia.martinez@example.com",
//     Phone_Number: "1119012345",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 8,
//     First_Name: "James",
//     Last_Name: "Lopez",
//     City: "San Francisco",
//     Email: "james.lopez@example.com",
//     Phone_Number: "9990123456",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 9,
//     First_Name: "Sophia",
//     Last_Name: "Gonzalez",
//     City: "Boston",
//     Email: "sophia.gonzalez@example.com",
//     Phone_Number: "8881234567",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 10,
//     First_Name: "William",
//     Last_Name: "Hernandez",
//     City: "Denver",
//     Email: "william.hernandez@example.com",
//     Phone_Number: "7772345678",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 11,
//     First_Name: "Emma",
//     Last_Name: "Wilson",
//     City: "Portland",
//     Email: "emma.wilson@example.com",
//     Phone_Number: "6663456789",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 12,
//     First_Name: "Daniel",
//     Last_Name: "Lopez",
//     City: "Austin",
//     Email: "daniel.lopez@example.com",
//     Phone_Number: "5554567890",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 13,
//     First_Name: "Ava",
//     Last_Name: "Thompson",
//     City: "Phoenix",
//     Email: "ava.thompson@example.com",
//     Phone_Number: "4445678901",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 14,
//     First_Name: "Matthew",
//     Last_Name: "White",
//     City: "Las Vegas",
//     Email: "matthew.white@example.com",
//     Phone_Number: "3336789012",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 15,
//     First_Name: "Ella",
//     Last_Name: "Jones",
//     City: "Orlando",
//     Email: "ella.jones@example.com",
//     Phone_Number: "2227890123",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 16,
//     First_Name: "Logan",
//     Last_Name: "Lee",
//     City: "Atlanta",
//     Email: "logan.lee@example.com",
//     Phone_Number: "1118901234",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 17,
//     First_Name: "Mia",
//     Last_Name: "Gonzalez",
//     City: "Nashville",
//     Email: "mia.gonzalez@example.com",
//     Phone_Number: "9999012345",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 18,
//     First_Name: "Jackson",
//     Last_Name: "Taylor",
//     City: "Charlotte",
//     Email: "jackson.taylor@example.com",
//     Phone_Number: "8880123456",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 19,
//     First_Name: "Scarlett",
//     Last_Name: "Harris",
//     City: "San Diego",
//     Email: "scarlett.harris@example.com",
//     Phone_Number: "7771234567",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 20,
//     First_Name: "Lucas",
//     Last_Name: "Clark",
//     City: "Philadelphia",
//     Email: "lucas.clark@example.com",
//     Phone_Number: "6662345678",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 21,
//     First_Name: "Chloe",
//     Last_Name: "Lewis",
//     City: "Minneapolis",
//     Email: "chloe.lewis@example.com",
//     Phone_Number: "5553456789",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 22,
//     First_Name: "Gabriel",
//     Last_Name: "Walker",
//     City: "Detroit",
//     Email: "gabriel.walker@example.com",
//     Phone_Number: "4444567890",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 23,
//     First_Name: "Lily",
//     Last_Name: "Perez",
//     City: "Salt Lake City",
//     Email: "lily.perez@example.com",
//     Phone_Number: "3335678901",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 24,
//     First_Name: "Henry",
//     Last_Name: "Roberts",
//     City: "Kansas City",
//     Email: "henry.roberts@example.com",
//     Phone_Number: "2226789012",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 25,
//     First_Name: "Zoey",
//     Last_Name: "Cook",
//     City: "Memphis",
//     Email: "zoey.cook@example.com",
//     Phone_Number: "1117890123",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 26,
//     First_Name: "Wyatt",
//     Last_Name: "Murphy",
//     City: "Raleigh",
//     Email: "wyatt.murphy@example.com",
//     Phone_Number: "9998901234",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 27,
//     First_Name: "Nora",
//     Last_Name: "Bell",
//     City: "Tampa",
//     Email: "nora.bell@example.com",
//     Phone_Number: "8889012345",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 28,
//     First_Name: "Eli",
//     Last_Name: "Howard",
//     City: "Indianapolis",
//     Email: "eli.howard@example.com",
//     Phone_Number: "7770123456",
//     Gender: true,
//     Shareholder_Status: true
//   },
//   {
//     Employee_ID: 29,
//     First_Name: "Hannah",
//     Last_Name: "Ward",
//     City: "Columbus",
//     Email: "hannah.ward@example.com",
//     Phone_Number: "6661234567",
//     Gender: false,
//     Shareholder_Status: false
//   },
//   {
//     Employee_ID: 30,
//     First_Name: "Isaac",
//     Last_Name: "Adams",
//     City: "Seattle",
//     Email: "isaac.adams@example.com",
//     Phone_Number: "5552345678",
//     Gender: true,
//     Shareholder_Status: true
//   }
//   // Thêm các đối tượng khác vào mảng personalsData nếu cần
// ];


const benefitPlanData = [
  {
      Benefit_Plan_ID: 1,
      Plan_Name: "Plan A",
      Deductable: "$1000",
      Percentage_CoPay: "20%",
  },
  {
      Benefit_Plan_ID: 2,
      Plan_Name: "Plan B",
      Deductable: "$1500",
      Percentage_CoPay: "25%",
  },
  {
      Benefit_Plan_ID: 3,
      Plan_Name: "Plan C",
      Deductable: "$2000",
      Percentage_CoPay: "30%",
  },
  // Thêm các đối tượng khác vào mảng benefitPlanData nếu cần
];
const jobHistoryData = [
  {
      ID: 1,
      Personal: {
          First_Name: "John",
          Last_Name: "Doe"
      },
      Department: "Sales",
      Division: "Retail",
      Start_Date: "2023-01-01",
      End_Date: "2023-06-30",
      Job_Category: "Associate",
      Location: "New York"
  },
  {
      ID: 2,
      Personal: {
          First_Name: "Jane",
          Last_Name: "Doe"
      },
      Department: "Marketing",
      Division: "Digital",
      Start_Date: "2022-08-15",
      End_Date: "2023-02-28",
      Job_Category: "Manager",
      Location: "Los Angeles"
  },
  // Thêm các đối tượng khác vào mảng jobHistoryData nếu cần
];



//const personalsData=[]

const employeeData=[];
 function AdminDashboard() {

  const [personalsData, setPersonalsData] = useState([]);

  useEffect(() => {
    fetchEmployee();
    console.log(personalsData.data);
    test();
  }, []);
  
  const fetchEmployee = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/employee');
      console.log(response.data);
      setPersonalsData(response.data);
    } catch (error) {
      console.log('Error fetching employee data:', error);
    }
  };
 const test=()=>{

  console.log(personalsData);

 }
  return (
    <>
<div>
       <nav className="navbar navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
           <Link className="brand" to="/">Admin</Link>
            <div className="nav-collapse collapse navbar-inverse-collapse">
              <ul className="nav nav-icons">
                <li className="active"><a href="#"><i className="icon-envelope"></i></a></li>
                <li><a href="#"><i className="icon-eye-open"></i></a></li>
                <li><a href="#"><i className="icon-bar-chart"></i></a></li>
              </ul>
              <form className="navbar-search pull-left input-append" action="#">
                <input type="text" className="span3" />
                <button className="btn" type="button">
                  <i className="icon-search"></i>
                </button>
              </form>
              <ul className="nav pull-right">
                <li className="nav-user dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <img src="../images/user.png" className="nav-avatar" alt="User Avatar" />
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Your Profile</a></li>
                    <li><a href="#">Edit Profile</a></li>
                    <li><a href="#">Account Settings</a></li>
                    <li className="divider"></li>
                    <li><a href="#">Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> 
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="span3">
              <div className="sidebar">
                <ul className="widget widget-menu unstyled">
                <li className="active">
                    <Link to="/">
                      <i className="menu-icon icon-dashboard"></i>Dashboard
                    </Link>
                  </li> 
                  <li >
                    <Link to="/personals"><i className="menu-icon icon-bullhorn"></i >Personal List</Link>
                  </li>
                  <li>
                    <Link to="/benefitplans">
                      <i className="menu-icon icon-tasks"></i>Benefit Plans
                    </Link>
                  </li>
                  <li>
                    <Link to="/jobhistory">
                      <i className="menu-icon icon-inbox"></i>Job History
                    </Link>
                  </li>
                </ul>
                <ul className="widget widget-menu unstyled">
                  <li>
                    <a className="collapsed" data-toggle="collapse" href="#togglePages">
                      <i className="menu-icon icon-cog"></i>
                      <i className="icon-chevron-down pull-right"></i>
                      <i className="icon-chevron-up pull-right"></i>More Pages
                    </a>
                    <ul id="togglePages" className="collapse unstyled">
                      <li><a href="#"><i className="icon-inbox"></i>Login</a></li>
                      <li><a href="#"><i className="icon-inbox"></i>Profile</a></li>
                      <li><a href="#"><i className="icon-inbox"></i>All Users</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><i className="menu-icon icon-signout"></i>Logout</a></li>
                </ul>
              </div>
            </div>
            <div className="span9">
            <Routes>
                 <Route path='/' element={<Index />} />
                 <Route path='/personals' element={<PersonalIndex
                 personals={personalsData.data}
                 />} />
                 <Route path='/personals/create' element={<CreatePersonal />} />
                <Route path='/personals/edit/:id' element={<EditPersonal />} /> 
                <Route path='/personals/delete/:id' element={<DeletePersonal />} />




                
                 <Route path='/benefitplans'element={<BenefitPlanIndex  benefitPlans={benefitPlanData}/>} />
               
                 <Route path='/benefitplans/details/:id' element={<BenefitPlanDetails />} />
                 <Route path='/benefitplans/create'  element={<BenefitPlanForm />} />
                 <Route path='/benefitplans/delete/:id'  element={<DeleteBenefitPlan />} />
                  <Route path='/benefitplans/edit/:id'  element={<EditBenefitPlan />} />


                 <Route path='/jobhistory'element={<JobHistoryIndex jobHistories={jobHistoryData}/>} />
                 
                 <Route path='/jobhistory/details/:id'  element={<JobHistoryDetails />} />
                 <Route path='/jobhistory/create' element={<CreateJobHistory />} />
                 <Route path='/jobhistory/delete/:id'  element={<DeleteJobHistory />} />

                
            </Routes>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <b className="copyright">&copy; 2014 Admin - DaoNguyen</b>All rights reserved.
        </div>
      </div>
    </div>
    

    

    
    
      
      </>
  )
}
export default AdminDashboard;




