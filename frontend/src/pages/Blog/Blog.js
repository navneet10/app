import React from 'react'; 
import PageHeader from '../../components/PageHeader'; 
import BlogBox from './BlogBox';
function Blog() {
    return (
        <>
            <PageHeader />
            <section class="box-section box-contact-section-2">
                <div class="container" data-aos="fade-up">
                    <BlogBox />
                </div>
            </section>
        </>
        
  );
}

export default Blog;
