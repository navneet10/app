import React from 'react';
import LeftBar from '../components/LeftBar';

function menuList() {
    return (
        <div id="wrapper">
            <LeftBar />
            <div id="content-wrapper" className="d-flex flex-column py-3">
                <div id="content">

                    <div className="container-fluid">

                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Menu List</h1>
                        </div>
                        <hr />
                        <div className="row">

                            <div className="col-xl-3 col-md-6 mb-4">
                                
                            </div> 
  
                        </div>

                    </div>
                </div>
            </div>
        </div>
  );
}

export default menuList;
