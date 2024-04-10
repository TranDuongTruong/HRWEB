import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Routes,Route ,Link} from 'react-router-dom';

import EmployeeDetails from '../Employee/Details';
import CreateEmployee from '../Employee/Create' ;
import EmployeeIndex from '../Employee/Index';
import EditEmployee from '../Employee/Edit'; 
import DeleteEmployee from '../Employee/Delete';

// import PersonalIndex from '../Personals/Index';
// import CreatePersonal from '../Personals/Create';
// import EditPersonal from '../Personals/Edit';
// import DeletePersonal from '../Personals/Delete';



import PayrateDetails from '../Payrate/Details';
import CreatePayrate  from '../Payrate/Create' ;
import PayrateIndex from '../Payrate/Index';
import EditPayRate from '../Payrate/Edit'; 
import DeletePayrate from '../Payrate/Delete';




import DetailsProduct from '../Product/Details';
import ProductCreate from '../Product/Create' ;
import ProductIndex from '../Product/Index';
import EditProduct from '../Product/Edit.'; 
import DeleteProduct from '../Product/Delete';

import BenefitPlanCreate from '../BenefitPlans/Create';
import BenefitPlanIndex from '../BenefitPlans/Index';
import BenefitPlanEdit from '../BenefitPlans/Edit.';
import BenefitPlanDetails from '../BenefitPlans/Details';
import BenefitPlanDelete from '../BenefitPlans/Delete';

import Index from '../Admin/Index';
import Login from '../Login/Login';
//import AdminDashboard from this;



import JobHistoryIndex from '../JobHistory/Index';
import JobHistoryDetails from '../JobHistory/Details';
import CreateJobHistory from '../JobHistory/Create';







const employeeData=[];
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
                    <Link to="/employee"><i className="menu-icon icon-bullhorn"></i >Employee</Link>
                  </li>
                  <li>
                    <Link to="/product">
                      <i className="menu-icon icon-tasks"></i>Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/payrate">
                      <i className="menu-icon icon-inbox"></i>Payrate
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/personal">
                      <i className="menu-icon icon-bullhorn"></i>Personal
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/jobHistory">
                      <i className="menu-icon icon-inbox"></i>JobHistory
                    </Link>
                  </li>
                  <li>
                    <Link to="/benefitplan">
                      <i className="menu-icon icon-inbox"></i>BenefitPlans
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
                
                 <Route path='/employee/create' element={<CreateEmployee />} />
                <Route path='/employee/edit/:id' element={<EditEmployee />} /> 
                <Route path='/employee/delete/:id' element={<DeleteEmployee />} />
                <Route path='/employee' element={<EmployeeIndex />} />

                {/* <Route path='/employee'element={<PersonalIndex  personals={employeeData.data}/>} /> */}
                 <Route path='/product'element={<ProductIndex/>} />
               
                 <Route path='/product/details/:id' element={<DetailsProduct />} />
                 <Route path='/product/create'  element={<ProductCreate />} />
                 <Route path='/product/delete/:id'  element={<DeleteProduct />} />
                  <Route path='/product/edit/:id'  element={<EditProduct />} />


               
                 
                 <Route path='/payrate/details/:id'  element={<PayrateDetails />} />
                 <Route path='/payrate/create' element={<CreatePayrate  />} />
                 <Route path='/payrate/edit/:id'  element={<EditPayRate />} />
                 <Route path='/payrate/delete/:id'  element={<DeletePayrate />} />
                 <Route path='/payrate' element={<PayrateIndex />} />

                 {/* <Route path='/personal' element={<PersonalIndex />} />
                 <Route path='/personal/create' element={<CreatePersonal />} />
                <Route path='/personal/edit/:id' element={<EditPersonal />} /> 
                <Route path='/personal/delete/:id' element={<DeletePersonal />} /> */}

                <Route path='/jobHistory'  element={<JobHistoryIndex />} />
                <Route path='/jobHistory/details/:id'  element={<JobHistoryDetails />} />
                <Route path='/jobHistory/create'  element={<CreateJobHistory />} />


                <Route path='/benefitplan/create' element={<BenefitPlanCreate />} />
                <Route path='/benefitplan/delete/:id' element={<BenefitPlanDelete />} />
                <Route path='/benefitplan/details/:id' element={<BenefitPlanDetails />} />
                <Route path='/benefitplan/edit/:id' element={<BenefitPlanEdit />} />
                <Route path='/benefitplan' element={<BenefitPlanIndex />} />

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




