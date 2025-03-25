import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Service from '../pages/Services/Service';
import ServiceDetails from '../pages/Services/ServiceDetails';
import Project from '../pages/Project/Project';
import BlogDetails from '../pages/Blog/BlogDetails';
import Blog from '../pages/Blog/Blog';
import ProjectDetails from '../pages/Project/ProjectDetails';
import ContactUs from '../pages/ContactUs/ContactUs';
const HomePage = React.lazy(() => import("../pages/Home/Index"));
const AboutUs = React.lazy(() => import("../pages/AboutUs/AboutUs"));

function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Service /> } />
                <Route path="/services-d" element={<ServiceDetails />} />
                <Route path="/project" element={<Project />} />
                <Route path="/project-d" element={<ProjectDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-d" element={<BlogDetails />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
