import React from 'react';
import { useState } from 'react'

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

const personalsData = [
    {
      Employee_ID: 1,
      First_Name: "John",
      Last_Name: "Doe",
      City: "New York",
      Email: "john.doe@example.com",
      Phone_Number: "1234567890",
      Gender: true,
      Shareholder_Status: true
    },
    // Thêm các đối tượng khác vào mảng personals nếu cần
  ];
 function AdminDashboard() {


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
    

    <Routes>  
         <Route path='/personals' element={PersonalIndex} ></Route>  
       <Route path='/personals' element={PersonalDetails}></Route>        
        <Route path='/personals' element={DeletePersonal}></Route>
        <Route path='/personals' element={EditPersonal}></Route> 
      
        
        <Route path='/benefitplans' element={JobHistoryDetails}></Route>
        <Route path='/benefitplans' element={CreateJobHistory}></Route>
        <Route path='/benefitplans' element={JobHistoryIndex}></Route>
        <Route path='/benefitplans' element={EditJobHistory}></Route>
        <Route path='/benefitplans' element={DeleteJobHistory}></Route>
        <Route path='/jobhistory' element={BenefitPlanDetails}></Route>
        <Route path='/jobhistory' element={BenefitPlanForm}></Route>
        <Route path='/jobhistory' element={BenefitPlanIndex}></Route>
        <Route path='/jobhistory' element={EditBenefitPlan}></Route>
        <Route path='/jobhistory' element={DeleteBenefitPlan}></Route>

        <Route path='/' element={PersonalIndex}></Route>
    {/* <Route path='/personals/details' element={PersonalDetails}></Route>
    <Route path='/personals/create' element={CreatePersonal}></Route>
    <Route path='/personals/delete' element={DeletePersonal}></Route>
    <Route path='/personals/edit' element={EditPersonal}></Route>
    <Route path='/personals' element={PersonalIndex}></Route>
    <Route path='/benefitplans/details' element={BenefitPlanDetails}></Route>
    <Route path='/benefitplans/create' element={BenefitPlanForm}></Route>
    <Route path='/benefitplans/delete' element={DeleteBenefitPlan}></Route>
    <Route path='/benefitplans/edit' element={EditBenefitPlan}></Route>
    <Route path='/benefitplans' element={BenefitPlanIndex}></Route>
    <Route path='/jobhistory/details' element={JobHistoryDetails}></Route>
    <Route path='/jobhistory/create' element={CreateJobHistory}></Route>
    <Route path='/jobhistory/delete' element={DeleteJobHistory}></Route>
    <Route path='/jobhistory/edit' element={EditJobHistory}></Route>
    <Route path='/jobhistory' element={JobHistoryIndex}></Route>

    <Route path='/' element={Index}></Route> */}

    </Routes>
    
      
      </>
  )
}
export default AdminDashboard;




