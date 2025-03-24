import React from 'react';
import AboutSection from './AboutSection';
import PageHeader from '../../components/PageHeader';
import BlogSetion from '../../components/Blogs';
import WhyUs from '../../components/WhyUs';
function AboutUs() {
    return (
        <>
            <PageHeader />
            <AboutSection />
            <WhyUs />
            <BlogSetion/>
        </>
  );
}

export default AboutUs;
