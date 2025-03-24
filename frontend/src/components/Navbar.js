import React from 'react';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/template/logo.svg";

function Navbar() {
    useEffect(() => {
        const navbar = document.querySelector(".navbar");
        if (!navbar) return;

        let wScrollBefore = window.pageYOffset;

        const handleScroll = () => {
            let elHeight = navbar.offsetHeight;
            let wScrollCurrent = window.pageYOffset;
            let wScrollDiff = wScrollBefore - wScrollCurrent;
            let elTop = parseInt(window.getComputedStyle(navbar).getPropertyValue("top")) + wScrollDiff;

            if (wScrollCurrent <= 0) {
                navbar.style.top = "0px";
                navbar.style.position = "relative";
                navbar.classList.remove("navbar-stick");
            } else if (wScrollDiff > 0) {
                navbar.style.top = elTop > 0 ? "0px" : `${elTop}px`;
                navbar.style.position = "fixed";
                navbar.style.width = "100%";
                navbar.classList.add("navbar-stick");
            } else if (wScrollDiff < 0) {
                if (wScrollCurrent + window.innerHeight >= document.body.offsetHeight - elHeight) {
                    navbar.style.top = (elTop = wScrollCurrent + window.innerHeight - document.body.offsetHeight) < 0 ? `${elTop}px` : "0px";
                } else {
                    navbar.style.top = Math.abs(elTop) > elHeight ? `-${elHeight}px` : `${elTop}px`;
                }
            }

            wScrollBefore = wScrollCurrent;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
      <> 
          <header className="header-style-6 header-style-13">
              <nav className="navbar navbar-expand-lg navbar-light navbar-transparent w-100">
                  <div className="container px-3">
                      <a className="navbar-brand pe-4" href="index.html"><img src={logo} alt="" /></a>
                      <ul className="navbar-nav m-auto gap-1 align-items-lg-center ">
                          <li className="nav-item   ">
                              <NavLink className="nav-link fw-medium" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</NavLink> 
                          </li>
                          <li className="nav-item  ">
                              <NavLink className="nav-link fw-medium" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</NavLink>
                              
                          </li>
                          <li className="nav-item dropdown menu-item-has-children">
                              <a className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="services.html">Services 01</a></li>
                                  <li><a className="dropdown-item" href="services-2.html">Services 02</a></li>
                                  <li><a className="dropdown-item" href="services-3.html">Services 03</a></li>
                                  <li><a className="dropdown-item" href="services-4.html">Services 04</a></li>
                                  <li><a className="dropdown-item" href="service-detail.html">Services Details 01</a></li>
                                  <li><a className="dropdown-item" href="service-detail-2.html">Services Details 02</a></li>
                                  <li><a className="dropdown-item" href="service-detail-3.html">Services Details 03</a></li>
                                  <li><a className="dropdown-item" href="service-detail-4.html">Services Details 04</a></li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown menu-item-has-children">
                              <a className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="project.html">Project List</a></li>
                                  <li><a className="dropdown-item" href="project-detail.html">Project Details</a></li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown menu-item-has-children">
                              <a className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="news-grid.html">News Grid</a></li>
                                  <li><a className="dropdown-item" href="news-grid-sidebar.html">News Grid Sidebar</a></li>
                                  <li><a className="dropdown-item" href="news-details.html">Blog Details</a></li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown menu-item-has-children">
                              <a className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="contact.html">Contact Us</a></li>
                                  <li><a className="dropdown-item" href="pricing.html">Pricing</a></li>
                                  <li><a className="dropdown-item" href="team.html">Team</a></li>
                                  <li><a className="dropdown-item" href="team-detail.html">Team Details</a></li>
                                  <li><a className="dropdown-item" href="faq.html">FAQs</a></li>
                                  <li><a className="dropdown-item" href="404.html">Error 404</a></li>
                              </ul>
                          </li>
                      </ul>

                      <div className="d-flex align-items-center">
                          <a href="javascript:void(0)" className="menu-tigger btn-navbar px-2 d-flex align-items-center justify-content-center btn-menu">
                              <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <line y1="12" x2="30" y2="12" stroke="" stroke-width="3" />
                                  <path d="M5 22H30" stroke="" stroke-width="3" />
                                  <path d="M10 2H30" stroke="" stroke-width="3" />
                              </svg>
                          </a>
                          <a href="#" className="btn btn-primary-square d-none d-lg-inline-block">
                              Get a quote
                              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634285 11.3333 -3.66907e-07M17 6L7.39105e-07 6" stroke="" stroke-width="1.5" />
                              </svg>
                          </a>
                      </div>
                  </div>
              </nav>
               

          </header>

    </>
  );
}

export default Navbar;
