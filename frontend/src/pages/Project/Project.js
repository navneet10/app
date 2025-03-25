import React from 'react'; 
import PageHeader from '../../components/PageHeader'; 
import ProjectBox from './ProjectBox';
function Project() {
    return (
        <>
            <PageHeader />
            <section className="position-relative overflow-hidden box-project">
                <div className="box-project-inner">
                    <div className="container" data-aos="fade-up">
                        <div className="text-center">
                            <p className="title-line-both secondery-500"  >PROJECTS</p>
                            <h3 className="heading-3xl" >
                                Inspiring Confidence corporate<br className="d-none d-lg-block" />
                                Delivering Solutions
                            </h3>
                        </div>
                        <div className="row mt-140"  >
                            <ProjectBox />
                        </div>
                        <div className="text-center">
                            <a href="#" className="btn btn-primary">
                                See All Project
                                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634285 11.3333 -3.66907e-07M17 6L7.39105e-07 6" stroke="" stroke-width="1.5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
  );
}

export default Project;
