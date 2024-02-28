import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar navbar-fixed-top">
            <div className="navbar-inner">
                <div className="container">
                    <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
                        <i className="icon-reorder shaded"></i>
                    </button>
                    <a className="brand" href="#">
                        Edmin
                    </a>
                    <div className="nav-collapse collapse navbar-inverse-collapse">
                        <ul className="nav pull-right">
                            <li>
                                <a href="#">
                                    Sign Up
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Forgot your password?
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <b className="copyright">&copy; 2014 Edmin - EGrappler.com </b> All rights reserved.
            </div>
        </div>
    );
};

const EdminPage = () => {
    return (
        <html lang="en">
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Edmin</title>
                <link rel="stylesheet" type="text/css" href="/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="/bootstrap/css/bootstrap-responsive.min.css" />
                <link rel="stylesheet" type="text/css" href="/css/theme.css" />
                <link rel="stylesheet" type="text/css" href="/images/icons/css/font-awesome.css" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600' rel='stylesheet' />
            </head>
            <body>
                <Navbar />
                <div className="wrapper">
                    {/* Render other components or content here */}
                </div>
                <Footer />
                <script src="/scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
                <script src="/scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
                <script src="/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
            </body>
        </html>
    );
};

export default EdminPage;
