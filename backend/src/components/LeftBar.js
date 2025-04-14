import React from 'react';

function LeftBar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

           
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">  Admin </div>
            </a>

      
            <hr className="sidebar-divider my-0" />

                
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li> 
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>All Images</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/menu">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Menu</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Header</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Footer</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Services</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Blog List</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Blog New Page</span>
                </a>
            </li>

                <li className="nav-item active">
                    <a className="nav-link" href="#"  >
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item active" href="buttons.html">Buttons</a>
                            <a className="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>
                </li>

                    
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>New Page</span>
                        </a> 
                    </li>

                   
                    <li className="nav-item">
                        <a className="nav-link" href="#"  >
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a> 
                    </li>
                     

                        
                        <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Tables</span></a>
                        </li>

                        
                        <hr className="sidebar-divider d-none d-md-block" />

                            
                            <div className="text-center d-none d-md-inline">
                                <button className="rounded-circle border-0" id="sidebarToggle"></button>
                            </div>

                        </ul>
  );
}

export default LeftBar;
