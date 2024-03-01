import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import AdminDashboard from './Views/Shared/_Layout.jsx';
import App from './App.jsx';
import './index.css';
import '../src/bootstrap/css/bootstrapmin.css';
import '../src/bootstrap/css/bootstrapresponsivemin.css'
//import '../src/Content/Site.css';
import '../src/images/icons/css/font-awesome.css';



import  {initializeCommonFunctions}  from '../src/Scripts/common.js'
import './Scripts/jquery-191min.js'
import '../src/Scripts/jquery-ui-1.10.1.custommin.js'
import '../src/bootstrap/js/bootstrapmin.js'
 import '../src/Scripts/flot/jquery.flot.js'
 import '../src/Scripts/flot/jquery.flot.resize.js'
 import '../src/Scripts/datatables/jquery.dataTables.js'
// import PersonalDetails from './Views/Personals/Details.jsx'; // Import các component từ thư mục "personal"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, và Switch

// import { Link } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AdminDashboard />
 
  
    </BrowserRouter>
    
  </React.StrictMode>
);