import React from 'react';

function Login() {
    return (
        <div className="bg-gradient-primary vh-100">
          <div className="container">
              <div className="row justify-content-center"> 
                  <div className="col-lg-6 col-md-9"> 
                      <div className="card o-hidden border-0 shadow-lg my-5">
                          <div className="card-body p-0">
                              <div className="row">
                                  <div className="col-12">
                                      <div className="p-5">
                                          <div className="text-center">
                                              <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                          </div>
                                          <form className="user">
                                              <div className="form-group">
                                                  <input type="email" className="form-control form-control-user" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                              </div>
                                              <div className="form-group">
                                                  <input type="password" className="form-control form-control-user" placeholder="Password" />
                                              </div>
                                                <a href="/dashboard" className="btn btn-primary btn-user btn-block">
                                                  Login
                                              </a>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
  );
}

export default Login;
