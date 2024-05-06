import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import MyChart from './MyChart'; 

function Index() {
    const chartData = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7','8'],
        datasets: [
          {
            label: 'Profits',
             data: [1, 14, 5, 4, 5, 1, 14,5,5],
             fill: false,
                borderColor: 'rgb(85, 243, 192)',
            tension: 0.1
          },
          {
            label: 'Expenses',
            data: [5,2,10,3,4,5,2,10,8],
            fill: false,
            borderColor: 'rgb(13, 179, 126)',
            tension: 0.1
          }
        ]
      };
    return (
        <div className="content">
            <div className="btn-controls">
                <div className="btn-box-row row-fluid">
                    <a href="#" className="btn-box big span4">
                        <i className="icon-random"></i><b>65%</b>
                        <p className="text-muted">Growth</p>
                    </a>
                    <a href="#" className="btn-box big span4">
                        <i className="icon-user"></i><b>15</b>
                        <p className="text-muted">New Users</p>
                    </a>
                    <a href="#" className="btn-box big span4">
                        <i className="icon-money"></i><b>15,152</b>
                        <p className="text-muted">Profit</p>
                    </a>
                </div>
                <div className="btn-box-row row-fluid">
                    <div className="span8">
                        <div className="row-fluid">
                            <div className="span12">
                                <a href="#" className="btn-box small span4">
                                    <i className="icon-envelope"></i><b>Messages</b>
                                </a>
                                <a href="#" className="btn-box small span4">
                                    <i className="icon-group"></i><b>Clients</b>
                                </a>
                                <a href="#" className="btn-box small span4">
                                    <i className="icon-exchange"></i><b>Expenses</b>
                                </a>
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span12">
                                <a href="#" className="btn-box small span4">
                                    <i className="icon-save"></i><b>Total Sales</b>
                                </a>
                                <a href="#" className="btn-box small span4">
                                    <i className="icon-bullhorn"></i><b>Social Feed</b>
                                </a>
                                <a href="#" className="btn-box small span4">
                                    <i className="icon-sort-down"></i><b>Bounce Rate</b>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="widget widget-usage unstyled span4">
                        <li>
                            <p><strong>Windows 8</strong> <span className="pull-right small muted">78%</span></p>
                            <div className="progress tight">
                                <div className="bar" style={{ width: '78%' }}></div>
                            </div>
                        </li>
                        <li>
                            <p><strong>Mac</strong> <span className="pull-right small muted">56%</span></p>
                            <div className="progress tight">
                                <div className="bar bar-success" style={{ width: '56%' }}></div>
                            </div>
                        </li>
                        <li>
                            <p><strong>Linux</strong> <span className="pull-right small muted">44%</span></p>
                            <div className="progress tight">
                                <div className="bar bar-warning" style={{ width: '44%' }}></div>
                            </div>
                        </li>
                        <li>
                            <p><strong>iPhone</strong> <span className="pull-right small muted">67%</span></p>
                            <div className="progress tight">
                                <div className="bar bar-danger" style={{ width: '67%' }}></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* profits chart  */}

            <div className="module">
        <div className="module-head">
          <h3>Profit Chart</h3>
        </div>
        <div className="module-body"style={{ height: '500px', width: '98%' }}>
            
          <MyChart data={chartData} /> {/* Render your Chart component */}
        </div>
      </div>

      {/* Existing chart */}
    
         
            <div className="module hide">
                <div className="module-head">
                    <h3>Adjust Budget Range</h3>
                </div>
                <div className="module-body">
                    <div className="form-inline clearfix">
                        <a href="#" className="btn pull-right">Update</a>
                        <label htmlFor="amount">Price range:</label>
                        &nbsp;
                        <input type="text" id="amount" className="input-" />
                    </div>
                    <hr />
                    <div className="slider-range"></div>
                </div>
            </div>
            <div className="module">
                <div className="module-head">
                    <h3>DataTables</h3>
                </div>
                <div className="module-body table">
                    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper" role="grid">
                        <div id="DataTables_Table_0_length" className="dataTables_length">
                            <label>
                                Show <select size="1" name="DataTables_Table_0_length" aria-controls="DataTables_Table_0">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select> entries
                            </label>
                        </div>
                        <div className="dataTables_filter" id="DataTables_Table_0_filter">
                            <label>Search: <input type="text" aria-controls="DataTables_Table_0" /></label>
                        </div>
                        <table cellPadding="0" cellSpacing="0" border="0" className="datatable-1 table table-bordered table-striped display dataTable" width="100%" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style={{ width: '100%' }}>
                            <thead>
                                <tr role="row">
                                    <th className="sorting_asc" role="columnheader" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style={{ width: '135px' }}>
                                        Rendering engine
                                    </th>
                                    <th className="sorting" role="columnheader" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending" style={{ width: '202.889px' }}>
                                        Browser
                                    </th>
                                    <th className="sorting" role="columnheader" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending" style={{ width: '182.889px' }}>
                                        Platform(s)
                                    </th>
                                    <th className="sorting" role="columnheader" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending" style={{ width: '113.889px' }}>
                                        Engine version
                                    </th>
                                    <th className="sorting" role="columnheader" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending" style={{ width: '78.8889px' }}>
                                        CSS grade
                                    </th>
                                </tr>
                            </thead>

                            <tfoot>
                                <tr>
                                    <th rowSpan="1" colSpan="1">
                                        Rendering engine
                                    </th>
                                    <th rowSpan="1" colSpan="1">
                                        Browser
                                    </th>
                                    <th rowSpan="1" colSpan="1">
                                        Platform(s)
                                    </th>
                                    <th rowSpan="1" colSpan="1">
                                        Engine version
                                    </th>
                                    <th rowSpan="1" colSpan="1">
                                        CSS grade
                                    </th>
                                </tr>
                            </tfoot>
                            <tbody role="alert" aria-live="polite" aria-relevant="all">
                                <tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Firefox 1.0
                                    </td>
                                    <td className=" ">
                                        Win 98+ / OSX.2+
                                    </td>
                                    <td className="center ">
                                        1.7
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Firefox 1.5
                                    </td>
                                    <td className=" ">
                                        Win 98+ / OSX.2+
                                    </td>
                                    <td className="center ">
                                        1.8
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Firefox 2.0
                                    </td>
                                    <td className=" ">
                                        Win 98+ / OSX.2+
                                    </td>
                                    <td className="center ">
                                        1.8
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Firefox 3.0
                                    </td>
                                    <td className=" ">
                                        Win 2k+ / OSX.3+
                                    </td>
                                    <td className="center ">
                                        1.9
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Camino 1.0
                                    </td>
                                    <td className=" ">
                                        OSX.2+
                                    </td>
                                    <td className="center ">
                                        1.8
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Camino 1.5
                                    </td>
                                    <td className=" ">
                                        OSX.3+
                                    </td>
                                    <td className="center ">
                                        1.8
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Netscape 7.2
                                    </td>
                                    <td className=" ">
                                        Win 95+ / Mac OS 8.6-9.2
                                    </td>
                                    <td className="center ">
                                        1.7
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Netscape Browser 8
                                    </td>
                                    <td className=" ">
                                        Win 98SE+
                                    </td>
                                    <td className="center ">
                                        1.7
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Netscape Navigator 9
                                    </td>
                                    <td className=" ">
                                        Win 98+ / OSX.2+
                                    </td>
                                    <td className="center ">
                                        1.8
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Mozilla 1.0
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td className="center ">
                                        1
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Mozilla 1.1
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td className="center ">
                                        1.1
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Mozilla 1.2
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td className="center ">
                                        1.2
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Mozilla 1.3
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td className="center ">
                                        1.3
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Mozilla 1.4
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td className="center ">
                                        1.4
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Mozilla 1.5
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td className="center ">
                                        1.5
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Mozilla 1.6
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td className="center ">
                                        1.6
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Mozilla 1.7
                                    </td>
                                    <td className=" ">
                                        Win 98+ / OSX.1+
                                    </td>
                                    <td className="center ">
                                        1.7
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Mozilla 1.8
                                    </td>
                                    <td className=" ">
                                        Win 98+ / OSX.1+
                                    </td>
                                    <td className="center ">
                                        1.8
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Seamonkey 1.1
                                    </td>
                                    <td className=" ">
                                        Win 98+ / OSX.2+
                                    </td>
                                    <td className="center ">
                                        1.8
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Gecko
                                    </td>
                                    <td className=" ">
                                        Epiphany 2.20
                                    </td>
                                    <td className=" ">
                                        Gnome
                                    </td>
                                    <td className="center ">
                                        1.8
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeC odd">
                                    <td className="  sorting_1">
                                        KHTML
                                    </td>
                                    <td className=" ">
                                        Konqureror 3.1
                                    </td>
                                    <td className=" ">
                                        KDE 3.1
                                    </td>
                                    <td className="center ">
                                        3.1
                                    </td>
                                    <td className="center ">
                                        C
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        KHTML
                                    </td>
                                    <td className=" ">
                                        Konqureror 3.3
                                    </td>
                                    <td className=" ">
                                        KDE 3.3
                                    </td>
                                    <td className="center ">
                                        3.3
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        KHTML
                                    </td>
                                    <td className=" ">
                                        Konqureror 3.5
                                    </td>
                                    <td className=" ">
                                        KDE 3.5
                                    </td>
                                    <td className="center ">
                                        3.5
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Misc
                                    </td>
                                    <td className=" ">
                                        NetFront 3.1
                                    </td>
                                    <td className=" ">
                                        Embedded devices
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        C
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Misc
                                    </td>
                                    <td className=" ">
                                        NetFront 3.4
                                    </td>
                                    <td className=" ">
                                        Embedded devices
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeX even">
                                    <td className="  sorting_1">
                                        Misc
                                    </td>
                                    <td className=" ">
                                        Dillo 0.8
                                    </td>
                                    <td className=" ">
                                        Embedded devices
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        X
                                    </td>
                                </tr><tr className="gradeX odd">
                                    <td className="  sorting_1">
                                        Misc
                                    </td>
                                    <td className=" ">
                                        Links
                                    </td>
                                    <td className=" ">
                                        Text only
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        X
                                    </td>
                                </tr><tr className="gradeX even">
                                    <td className="  sorting_1">
                                        Misc
                                    </td>
                                    <td className=" ">
                                        Lynx
                                    </td>
                                    <td className=" ">
                                        Text only
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        X
                                    </td>
                                </tr><tr className="gradeC odd">
                                    <td className="  sorting_1">
                                        Misc
                                    </td>
                                    <td className=" ">
                                        IE Mobile
                                    </td>
                                    <td className=" ">
                                        Windows Mobile 6
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        C
                                    </td>
                                </tr><tr className="gradeC even">
                                    <td className="  sorting_1">
                                        Misc
                                    </td>
                                    <td className=" ">
                                        PSP browser
                                    </td>
                                    <td className=" ">
                                        PSP
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        C
                                    </td>
                                </tr><tr className="gradeU odd">
                                    <td className="  sorting_1">
                                        Other browsers
                                    </td>
                                    <td className=" ">
                                        All others
                                    </td>
                                    <td className=" ">
                                        -
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        U
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Presto
                                    </td>
                                    <td className=" ">
                                        Opera 7.0
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Presto
                                    </td>
                                    <td className=" ">
                                        Opera 7.5
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.2+
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Presto
                                    </td>
                                    <td className=" ">
                                        Opera 8.0
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.2+
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Presto
                                    </td>
                                    <td className=" ">
                                        Opera 8.5
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.2+
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Presto
                                    </td>
                                    <td className=" ">
                                        Opera 9.0
                                    </td>
                                    <td className=" ">
                                        Win 95+ / OSX.3+
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Presto
                                    </td>
                                    <td className=" ">
                                        Opera 9.2
                                    </td>
                                    <td className=" ">
                                        Win 88+ / OSX.3+
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Presto
                                    </td>
                                    <td className=" ">
                                        Opera 9.5
                                    </td>
                                    <td className=" ">
                                        Win 88+ / OSX.3+
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Presto
                                    </td>
                                    <td className=" ">
                                        Opera for Wii
                                    </td>
                                    <td className=" ">
                                        Wii
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Presto
                                    </td>
                                    <td className=" ">
                                        Nokia N800
                                    </td>
                                    <td className=" ">
                                        N800
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Presto
                                    </td>
                                    <td className=" ">
                                        Nintendo DS browser
                                    </td>
                                    <td className=" ">
                                        Nintendo DS
                                    </td>
                                    <td className="center ">
                                        8.5
                                    </td>
                                    <td className="center ">
                                        C/A<sup>1</sup>
                                    </td>
                                </tr><tr className="gradeX even">
                                    <td className="  sorting_1">
                                        Tasman
                                    </td>
                                    <td className=" ">
                                        Internet Explorer 4.5
                                    </td>
                                    <td className=" ">
                                        Mac OS 8-9
                                    </td>
                                    <td className="center ">
                                        -
                                    </td>
                                    <td className="center ">
                                        X
                                    </td>
                                </tr><tr className="gradeC odd">
                                    <td className="  sorting_1">
                                        Tasman
                                    </td>
                                    <td className=" ">
                                        Internet Explorer 5.1
                                    </td>
                                    <td className=" ">
                                        Mac OS 7.6-9
                                    </td>
                                    <td className="center ">
                                        1
                                    </td>
                                    <td className="center ">
                                        C
                                    </td>
                                </tr><tr className="gradeC even">
                                    <td className="  sorting_1">
                                        Tasman
                                    </td>
                                    <td className=" ">
                                        Internet Explorer 5.2
                                    </td>
                                    <td className=" ">
                                        Mac OS 8-X
                                    </td>
                                    <td className="center ">
                                        1
                                    </td>
                                    <td className="center ">
                                        C
                                    </td>
                                </tr><tr className="gradeX odd">
                                    <td className="  sorting_1">
                                        Trident
                                    </td>
                                    <td className=" ">
                                        Internet Explorer 4.0
                                    </td>
                                    <td className=" ">
                                        Win 95+
                                    </td>
                                    <td className="center ">
                                        4
                                    </td>
                                    <td className="center ">
                                        X
                                    </td>
                                </tr><tr className="gradeC even">
                                    <td className="  sorting_1">
                                        Trident
                                    </td>
                                    <td className=" ">
                                        Internet Explorer 5.0
                                    </td>
                                    <td className=" ">
                                        Win 95+
                                    </td>
                                    <td className="center ">
                                        5
                                    </td>
                                    <td className="center ">
                                        C
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Trident
                                    </td>
                                    <td className=" ">
                                        Internet Explorer 5.5
                                    </td>
                                    <td className=" ">
                                        Win 95+
                                    </td>
                                    <td className="center ">
                                        5.5
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Trident
                                    </td>
                                    <td className=" ">
                                        Internet Explorer 6
                                    </td>
                                    <td className=" ">
                                        Win 98+
                                    </td>
                                    <td className="center ">
                                        6
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Trident
                                    </td>
                                    <td className=" ">
                                        Internet Explorer 7
                                    </td>
                                    <td className=" ">
                                        Win XP SP2+
                                    </td>
                                    <td className="center ">
                                        7
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Trident
                                    </td>
                                    <td className=" ">
                                        AOL browser (AOL desktop)
                                    </td>
                                    <td className=" ">
                                        Win XP
                                    </td>
                                    <td className="center ">
                                        6
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Webkit
                                    </td>
                                    <td className=" ">
                                        Safari 1.2
                                    </td>
                                    <td className=" ">
                                        OSX.3
                                    </td>
                                    <td className="center ">
                                        125.5
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Webkit
                                    </td>
                                    <td className=" ">
                                        Safari 1.3
                                    </td>
                                    <td className=" ">
                                        OSX.3
                                    </td>
                                    <td className="center ">
                                        312.8
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Webkit
                                    </td>
                                    <td className=" ">
                                        Safari 2.0
                                    </td>
                                    <td className=" ">
                                        OSX.4+
                                    </td>
                                    <td className="center ">
                                        419.3
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Webkit
                                    </td>
                                    <td className=" ">
                                        Safari 3.0
                                    </td>
                                    <td className=" ">
                                        OSX.4+
                                    </td>
                                    <td className="center ">
                                        522.1
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Webkit
                                    </td>
                                    <td className=" ">
                                        OmniWeb 5.5
                                    </td>
                                    <td className=" ">
                                        OSX.4+
                                    </td>
                                    <td className="center ">
                                        420
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA even">
                                    <td className="  sorting_1">
                                        Webkit
                                    </td>
                                    <td className=" ">
                                        iPod Touch / iPhone
                                    </td>
                                    <td className=" ">
                                        iPod
                                    </td>
                                    <td className="center ">
                                        420.1
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr><tr className="gradeA odd">
                                    <td className="  sorting_1">
                                        Webkit
                                    </td>
                                    <td className=" ">
                                        S60
                                    </td>
                                    <td className=" ">
                                        S60
                                    </td>
                                    <td className="center ">
                                        413
                                    </td>
                                    <td className="center ">
                                        A
                                    </td>
                                </tr>
                                {/* Add more table rows here if needed */}
                            </tbody>
                        </table>
                        <div className="dataTables_info" id="DataTables_Table_0_info">
                            Showing 11 to 20 of 57 entries
                        </div>
                        <div className="dataTables_paginate paging_two_button btn-group datatable-pagination" id="DataTables_Table_0_paginate">
                            <a className="paginate_enabled_previous" tabIndex="0" role="button" id="DataTables_Table_0_previous" aria-controls="DataTables_Table_0">
                                <span>Previous</span><i className="icon-chevron-left shaded"></i>
                            </a>
                            <a className="paginate_enabled_next" tabIndex="0" role="button" id="DataTables_Table_0_next" aria-controls="DataTables_Table_0">
                                <span>Next</span><i className="icon-chevron-right shaded"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;