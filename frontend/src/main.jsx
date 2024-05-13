// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import AdminDashboard from './Views/Shared/_Layout.jsx';
// import EdminPage from './Views/Shared/_LayoutLogin.jsx';
// import App from './App.jsx';
// import './index.css';
// import '../src/bootstrap/css/bootstrapmin.css';
// import '../src/bootstrap/css/bootstrapresponsivemin.css'
// //import '../src/Content/Site.css';
// import '../src/images/icons/css/font-awesome.css';
// import { PayrateProvider } from './Views/Payrate/PayrateContext.jsx';




// import { initializeCommonFunctions } from '../src/Scripts/common.js'
// import './Scripts/jquery-191min.js'
// import '../src/Scripts/jquery-ui-1.10.1.custommin.js'
// import '../src/bootstrap/js/bootstrapmin.js'
// import '../src/Scripts/flot/jquery.flot.js'
// import '../src/Scripts/flot/jquery.flot.resize.js'
// import '../src/Scripts/datatables/jquery.dataTables.js'
// // import PersonalDetails from './Views/Personals/Details.jsx'; // Import các component từ thư mục "personal"
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, và Switch

// // import { Link } from 'react-router-dom';




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <PayrateProvider>
//       <BrowserRouter>
//         <AdminDashboard />

//       </BrowserRouter>
//     </PayrateProvider>


//   </React.StrictMode>
// );
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AdminDashboard from './Views/Shared/_Layout.jsx';
import EdminPage from './Views/Shared/_LayoutLogin.jsx';
import App from './App.jsx';
import './index.css';
import '../src/bootstrap/css/bootstrapmin.css';
import '../src/bootstrap/css/bootstrapresponsivemin.css'
import '../src/images/icons/css/font-awesome.css';
import { PayrateProvider } from './Views/Payrate/PayrateContext.jsx';
import io from 'socket.io-client';

//const socket1 = io('http://localhost:4000'); // Adjust the URL based on your server
const socket = io('http://localhost:8080/');
// Import các thư viện và component khác cần thiết

const RootComponent = () => {
  const [onlineUser, setOnlineUser] = useState([]);

  useEffect(() => {

    // Bắt sự kiện khi nhận được danh sách người dùng trực tuyến từ server
    socket.on("handleFailedChanges", (users) => {

      const handleFailedChanges = async () => {
        try {
          console.log("handleFailedChanges")
          const response = await axios.get(`http://localhost:4000/api/employee/handleFailedChanges`);

        } catch (error) {
          console.log('ErrorhandleFailedChanges:', error);
        }
      };
      handleFailedChanges();
    });

    // Làm sạch kết nối socket khi component bị hủy
    return () => {
      socket.disconnect();
    };
  }, []); // Tham số thứ hai là một mảng rỗng để chỉ chạy một lần khi component được tạo

  return (
    <React.StrictMode>
      <PayrateProvider>
        <BrowserRouter>
          <AdminDashboard />
        </BrowserRouter>
      </PayrateProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <RootComponent />
);
