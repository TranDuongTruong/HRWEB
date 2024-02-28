import React from 'react';
import './Layout.css'; // Import CSS file for styling

// Header component
function Header() {
  return (
    <div className="navbar navbar-fixed-top">
      <div className="navbar-inner">
        <div className="container">
          <a className="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
            <i className="icon-reorder shaded"></i>
          </a>
          <a className="brand" href="#">
            Edmin
          </a>
          <div className="nav-collapse collapse navbar-inverse-collapse">
            <ul className="nav pull-right">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Forgot your password?</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <b className="copyright">&copy; 2024 Edmin - EGrappler.com </b> All rights reserved.
      </div>
    </div>
  );
}

// Main layout component
function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="wrapper">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
