import React from 'react';
import BlogSetion from "../../components/Blogs";  
import GetStarted from "../../components/GetStarted";  
import OurProcess from "../../components/OurProcess";
import AboutSection from "../AboutUs/AboutSection";
import Hero from "./Hero";
import ServiceSection from "./ServiceSections";

function HomePage() {
    return (
        <> 
            <Hero />
            <AboutSection />
            <ServiceSection />
            <OurProcess />
            <GetStarted />
            <BlogSetion /> 
        </>
  );
}

export default HomePage;
