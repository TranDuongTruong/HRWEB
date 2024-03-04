import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Month 0', Profits: 0 },
    { name: 'Month 1', Profits: 1 },
    { name: 'Month 2', Profits: 4 },
    { name: 'Month 3', Profits: 8 },
    { name: 'Month 4', Profits: 12 },
    { name: 'Month 5', Profits: 16 },
    { name: 'Month 6', Profits: 20 },
    { name: 'Month 7', Profits: 24 },
    { name: 'Month 8', Profits: 28 },
];

function Index() {
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
            <div className="module">
                <div className="module-head">
                    <h3>Profit Chart</h3>
                </div>
                <div className="module-body">
                    <ResponsiveContainer width="100%" height={500}>
                        <BarChart
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            barSize={20}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Profits" fill="#54b8a3" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
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
                        <table cellpadding="0" cellspacing="0" border="0" className="datatable-1 table table-bordered table-striped display dataTable" width="100%" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style={{ width: '100%' }}>
                            <thead>
                                <tr role="row">
                                    <th className="sorting_asc" role="columnheader" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style={{ width: '135px' }}>
                                        Rendering engine
                                    </th>
                                    <th className="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style={{ width: '202.889px' }}>
                                        Browser
                                    </th>
                                    <th className="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style={{ width: '182.889px' }}>
                                        Platform(s)
                                    </th>
                                    <th className="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending" style={{ width: '113.889px' }}>
                                        Engine version
                                    </th>
                                    <th className="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending" style={{ width: '78.8889px' }}>
                                        CSS grade
                                    </th>
                                </tr>
                            </thead>

                            <tfoot>
                                <tr>
                                    <th rowspan="1" colspan="1">
                                        Rendering engine
                                    </th>
                                    <th rowspan="1" colspan="1">
                                        Browser
                                    </th>
                                    <th rowspan="1" colspan="1">
                                        Platform(s)
                                    </th>
                                    <th rowspan="1" colspan="1">
                                        Engine version
                                    </th>
                                    <th rowspan="1" colspan="1">
                                        CSS grade
                                    </th>
                                </tr>
                            </tfoot>
                            <tbody role="alert" aria-live="polite" aria-relevant="all">
                                <tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Firefox 1.0
                                    </td>
                                    <td class=" ">
                                        Win 98+ / OSX.2+
                                    </td>
                                    <td class="center ">
                                        1.7
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Firefox 1.5
                                    </td>
                                    <td class=" ">
                                        Win 98+ / OSX.2+
                                    </td>
                                    <td class="center ">
                                        1.8
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Firefox 2.0
                                    </td>
                                    <td class=" ">
                                        Win 98+ / OSX.2+
                                    </td>
                                    <td class="center ">
                                        1.8
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Firefox 3.0
                                    </td>
                                    <td class=" ">
                                        Win 2k+ / OSX.3+
                                    </td>
                                    <td class="center ">
                                        1.9
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Camino 1.0
                                    </td>
                                    <td class=" ">
                                        OSX.2+
                                    </td>
                                    <td class="center ">
                                        1.8
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Camino 1.5
                                    </td>
                                    <td class=" ">
                                        OSX.3+
                                    </td>
                                    <td class="center ">
                                        1.8
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Netscape 7.2
                                    </td>
                                    <td class=" ">
                                        Win 95+ / Mac OS 8.6-9.2
                                    </td>
                                    <td class="center ">
                                        1.7
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Netscape Browser 8
                                    </td>
                                    <td class=" ">
                                        Win 98SE+
                                    </td>
                                    <td class="center ">
                                        1.7
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Netscape Navigator 9
                                    </td>
                                    <td class=" ">
                                        Win 98+ / OSX.2+
                                    </td>
                                    <td class="center ">
                                        1.8
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Mozilla 1.0
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td class="center ">
                                        1
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Mozilla 1.1
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td class="center ">
                                        1.1
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Mozilla 1.2
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td class="center ">
                                        1.2
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Mozilla 1.3
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td class="center ">
                                        1.3
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Mozilla 1.4
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td class="center ">
                                        1.4
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Mozilla 1.5
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td class="center ">
                                        1.5
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Mozilla 1.6
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td class="center ">
                                        1.6
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Mozilla 1.7
                                    </td>
                                    <td class=" ">
                                        Win 98+ / OSX.1+
                                    </td>
                                    <td class="center ">
                                        1.7
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Mozilla 1.8
                                    </td>
                                    <td class=" ">
                                        Win 98+ / OSX.1+
                                    </td>
                                    <td class="center ">
                                        1.8
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Seamonkey 1.1
                                    </td>
                                    <td class=" ">
                                        Win 98+ / OSX.2+
                                    </td>
                                    <td class="center ">
                                        1.8
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Gecko
                                    </td>
                                    <td class=" ">
                                        Epiphany 2.20
                                    </td>
                                    <td class=" ">
                                        Gnome
                                    </td>
                                    <td class="center ">
                                        1.8
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeC odd">
                                    <td class="  sorting_1">
                                        KHTML
                                    </td>
                                    <td class=" ">
                                        Konqureror 3.1
                                    </td>
                                    <td class=" ">
                                        KDE 3.1
                                    </td>
                                    <td class="center ">
                                        3.1
                                    </td>
                                    <td class="center ">
                                        C
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        KHTML
                                    </td>
                                    <td class=" ">
                                        Konqureror 3.3
                                    </td>
                                    <td class=" ">
                                        KDE 3.3
                                    </td>
                                    <td class="center ">
                                        3.3
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        KHTML
                                    </td>
                                    <td class=" ">
                                        Konqureror 3.5
                                    </td>
                                    <td class=" ">
                                        KDE 3.5
                                    </td>
                                    <td class="center ">
                                        3.5
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Misc
                                    </td>
                                    <td class=" ">
                                        NetFront 3.1
                                    </td>
                                    <td class=" ">
                                        Embedded devices
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        C
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Misc
                                    </td>
                                    <td class=" ">
                                        NetFront 3.4
                                    </td>
                                    <td class=" ">
                                        Embedded devices
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeX even">
                                    <td class="  sorting_1">
                                        Misc
                                    </td>
                                    <td class=" ">
                                        Dillo 0.8
                                    </td>
                                    <td class=" ">
                                        Embedded devices
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        X
                                    </td>
                                </tr><tr class="gradeX odd">
                                    <td class="  sorting_1">
                                        Misc
                                    </td>
                                    <td class=" ">
                                        Links
                                    </td>
                                    <td class=" ">
                                        Text only
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        X
                                    </td>
                                </tr><tr class="gradeX even">
                                    <td class="  sorting_1">
                                        Misc
                                    </td>
                                    <td class=" ">
                                        Lynx
                                    </td>
                                    <td class=" ">
                                        Text only
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        X
                                    </td>
                                </tr><tr class="gradeC odd">
                                    <td class="  sorting_1">
                                        Misc
                                    </td>
                                    <td class=" ">
                                        IE Mobile
                                    </td>
                                    <td class=" ">
                                        Windows Mobile 6
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        C
                                    </td>
                                </tr><tr class="gradeC even">
                                    <td class="  sorting_1">
                                        Misc
                                    </td>
                                    <td class=" ">
                                        PSP browser
                                    </td>
                                    <td class=" ">
                                        PSP
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        C
                                    </td>
                                </tr><tr class="gradeU odd">
                                    <td class="  sorting_1">
                                        Other browsers
                                    </td>
                                    <td class=" ">
                                        All others
                                    </td>
                                    <td class=" ">
                                        -
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        U
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Presto
                                    </td>
                                    <td class=" ">
                                        Opera 7.0
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.1+
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Presto
                                    </td>
                                    <td class=" ">
                                        Opera 7.5
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.2+
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Presto
                                    </td>
                                    <td class=" ">
                                        Opera 8.0
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.2+
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Presto
                                    </td>
                                    <td class=" ">
                                        Opera 8.5
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.2+
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Presto
                                    </td>
                                    <td class=" ">
                                        Opera 9.0
                                    </td>
                                    <td class=" ">
                                        Win 95+ / OSX.3+
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Presto
                                    </td>
                                    <td class=" ">
                                        Opera 9.2
                                    </td>
                                    <td class=" ">
                                        Win 88+ / OSX.3+
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Presto
                                    </td>
                                    <td class=" ">
                                        Opera 9.5
                                    </td>
                                    <td class=" ">
                                        Win 88+ / OSX.3+
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Presto
                                    </td>
                                    <td class=" ">
                                        Opera for Wii
                                    </td>
                                    <td class=" ">
                                        Wii
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Presto
                                    </td>
                                    <td class=" ">
                                        Nokia N800
                                    </td>
                                    <td class=" ">
                                        N800
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Presto
                                    </td>
                                    <td class=" ">
                                        Nintendo DS browser
                                    </td>
                                    <td class=" ">
                                        Nintendo DS
                                    </td>
                                    <td class="center ">
                                        8.5
                                    </td>
                                    <td class="center ">
                                        C/A<sup>1</sup>
                                    </td>
                                </tr><tr class="gradeX even">
                                    <td class="  sorting_1">
                                        Tasman
                                    </td>
                                    <td class=" ">
                                        Internet Explorer 4.5
                                    </td>
                                    <td class=" ">
                                        Mac OS 8-9
                                    </td>
                                    <td class="center ">
                                        -
                                    </td>
                                    <td class="center ">
                                        X
                                    </td>
                                </tr><tr class="gradeC odd">
                                    <td class="  sorting_1">
                                        Tasman
                                    </td>
                                    <td class=" ">
                                        Internet Explorer 5.1
                                    </td>
                                    <td class=" ">
                                        Mac OS 7.6-9
                                    </td>
                                    <td class="center ">
                                        1
                                    </td>
                                    <td class="center ">
                                        C
                                    </td>
                                </tr><tr class="gradeC even">
                                    <td class="  sorting_1">
                                        Tasman
                                    </td>
                                    <td class=" ">
                                        Internet Explorer 5.2
                                    </td>
                                    <td class=" ">
                                        Mac OS 8-X
                                    </td>
                                    <td class="center ">
                                        1
                                    </td>
                                    <td class="center ">
                                        C
                                    </td>
                                </tr><tr class="gradeX odd">
                                    <td class="  sorting_1">
                                        Trident
                                    </td>
                                    <td class=" ">
                                        Internet Explorer 4.0
                                    </td>
                                    <td class=" ">
                                        Win 95+
                                    </td>
                                    <td class="center ">
                                        4
                                    </td>
                                    <td class="center ">
                                        X
                                    </td>
                                </tr><tr class="gradeC even">
                                    <td class="  sorting_1">
                                        Trident
                                    </td>
                                    <td class=" ">
                                        Internet Explorer 5.0
                                    </td>
                                    <td class=" ">
                                        Win 95+
                                    </td>
                                    <td class="center ">
                                        5
                                    </td>
                                    <td class="center ">
                                        C
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Trident
                                    </td>
                                    <td class=" ">
                                        Internet Explorer 5.5
                                    </td>
                                    <td class=" ">
                                        Win 95+
                                    </td>
                                    <td class="center ">
                                        5.5
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Trident
                                    </td>
                                    <td class=" ">
                                        Internet Explorer 6
                                    </td>
                                    <td class=" ">
                                        Win 98+
                                    </td>
                                    <td class="center ">
                                        6
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Trident
                                    </td>
                                    <td class=" ">
                                        Internet Explorer 7
                                    </td>
                                    <td class=" ">
                                        Win XP SP2+
                                    </td>
                                    <td class="center ">
                                        7
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Trident
                                    </td>
                                    <td class=" ">
                                        AOL browser (AOL desktop)
                                    </td>
                                    <td class=" ">
                                        Win XP
                                    </td>
                                    <td class="center ">
                                        6
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Webkit
                                    </td>
                                    <td class=" ">
                                        Safari 1.2
                                    </td>
                                    <td class=" ">
                                        OSX.3
                                    </td>
                                    <td class="center ">
                                        125.5
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Webkit
                                    </td>
                                    <td class=" ">
                                        Safari 1.3
                                    </td>
                                    <td class=" ">
                                        OSX.3
                                    </td>
                                    <td class="center ">
                                        312.8
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Webkit
                                    </td>
                                    <td class=" ">
                                        Safari 2.0
                                    </td>
                                    <td class=" ">
                                        OSX.4+
                                    </td>
                                    <td class="center ">
                                        419.3
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Webkit
                                    </td>
                                    <td class=" ">
                                        Safari 3.0
                                    </td>
                                    <td class=" ">
                                        OSX.4+
                                    </td>
                                    <td class="center ">
                                        522.1
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Webkit
                                    </td>
                                    <td class=" ">
                                        OmniWeb 5.5
                                    </td>
                                    <td class=" ">
                                        OSX.4+
                                    </td>
                                    <td class="center ">
                                        420
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA even">
                                    <td class="  sorting_1">
                                        Webkit
                                    </td>
                                    <td class=" ">
                                        iPod Touch / iPhone
                                    </td>
                                    <td class=" ">
                                        iPod
                                    </td>
                                    <td class="center ">
                                        420.1
                                    </td>
                                    <td class="center ">
                                        A
                                    </td>
                                </tr><tr class="gradeA odd">
                                    <td class="  sorting_1">
                                        Webkit
                                    </td>
                                    <td class=" ">
                                        S60
                                    </td>
                                    <td class=" ">
                                        S60
                                    </td>
                                    <td class="center ">
                                        413
                                    </td>
                                    <td class="center ">
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
                            <a className="paginate_enabled_previous" tabindex="0" role="button" id="DataTables_Table_0_previous" aria-controls="DataTables_Table_0">
                                <span>Previous</span><i className="icon-chevron-left shaded"></i>
                            </a>
                            <a className="paginate_enabled_next" tabindex="0" role="button" id="DataTables_Table_0_next" aria-controls="DataTables_Table_0">
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