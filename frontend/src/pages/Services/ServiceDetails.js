import React from 'react'; 
import PageHeader from '../../components/PageHeader'; 
import detimg from "../../assets/imgs/pages/services/img.png"
import Accordion from '../../components/Accordion';
function ServiceDetails() {
    return (
        <>
            <PageHeader />
            <section className="box-section overflow-hidden section-service-detail section-service-detail-blue ">
                <div className="container" data-aos="fade-up" >
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="block-menu-left mb-30">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span>business Analysis</span>
                                            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="" />
                                                <path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Tax Strategy</span>
                                            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="" />
                                                <path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Financial Advisory</span>
                                            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="" />
                                                <path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>business Growth</span>
                                            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="" />
                                                <path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Innovation Idea</span>
                                            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="" />
                                                <path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Market Research</span>
                                            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="" />
                                                <path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                             
                             
                        </div>
                        <div className="col-lg-9">
                            <div className="service-detail">
                                <h1 className="heading-ag-3xl mb-20">UI/UX Design</h1>
                                <p>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis. Augue eu vulputate tortor egestas cursus vivamus. Commodo dictum iaculis eget massa phasellus ultrices nunc dignissim. Id nulla amet tincidunt urna sed massa sed. Pellentesque imperdiet proin aliquam nisl nulla. In donec massa ultrices amet eget. Tristique sed purus et maecenas condimentu purus lectus diam diam tellus libero id sapien justo.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis. Augue eu vulputate egestas cursus vivamus. Commodo dictum iaculis eget massa phasellus ultrices nunc dignissim.</p>
                                <div>
                                    <img src={ detimg } alt="Vatech" />
                                </div>
                                <h3 className="pb-2">Plan Benefits</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul>
                                            <li>Global Data Analysis</li>
                                            <li>Zero broker commission</li>
                                            <li>Analytics and Engineering</li>
                                            <li>IT Services & Cybersecurity</li>
                                            <li>Data and Cloud Computing</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <li>Guaranteed by the services</li>
                                            <li>Workspace cloud business</li>
                                            <li>Managed backup services</li>
                                            <li>Experts & News from the Industry.</li>
                                            <li>A well established expertise</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box-questions">
                                <h4 className="heading-ag-lg dark-950 mb-30">Questions? You're covered.</h4>
                                <Accordion />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
        
  );
}

export default ServiceDetails;
