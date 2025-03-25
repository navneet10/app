import React from 'react';
import ServiceBox from './ServiceBox';
import PageHeader from '../../components/PageHeader';
import GetStarted from '../../components/GetStarted';
import BlogSetion from '../../components/Blogs';
function Service() {
    return (
        <>
            <PageHeader />
            <section class="box-section box-services-page">
                <div class="container" data-aos="fade-up">
                    <ServiceBox />
                </div>
            </section>
            <GetStarted />
            <BlogSetion />

        </>
        
  );
}

export default Service;
