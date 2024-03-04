import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Routes,Route ,Link} from 'react-router-dom';

import PersonalDetails from '../Employee/Details';
import CreatePersonal from '../Employee/Create' ;
import PersonalIndex from '../Employee/Index';
import EditPersonal from '../Employee/Edit'; 
import DeletePersonal from '../Employee/Delete';



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

  const [employeeData, setPersonalsData] = useState([]);

  useEffect(() => {
    fetchEmployee();
    console.log(employeeData.data);
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

  console.log(employeeData);

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
                 personals={employeeData.data}
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




