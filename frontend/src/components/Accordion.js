import React, { useEffect } from 'react'; 
function Accordion() {
 
    return (
        <>
            <div className="section-service-detail-blue">
                <div className="box-questions">
                    <div className="block-faqs">
                        <div className="accordion" id="accordionFAQ">
                            <div className="accordion-item wow fadeInUp">
                                <h5 className="accordion-header" id="headingOne">
                                    <button className="accordion-button text-heading-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <p>Your business to streamline workflow, and increase productivity.</p>
                                    </button>
                                </h5>
                                <div className="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis. Augue eu vulputate egestas cursus as vivamus. Commodo dictum ultrices nunc dignissim.</div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp">
                                <h5 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button text-heading-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <p>Technology services built specifically for your business</p>
                                    </button>
                                </h5>
                                <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis. Augue eu vulputate egestas cursus as vivamus. Commodo dictum ultrices nunc dignissim.</div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp">
                                <h5 className="accordion-header" id="headingThree">
                                    <button className="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <p>We excels at the intersection of business and technology</p>
                                    </button>
                                </h5>
                                <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis. Augue eu vulputate egestas cursus as vivamus. Commodo dictum ultrices nunc dignissim.</div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp">
                                <h5 className="accordion-header" id="headingFour">
                                    <button className="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <p>Proud of our work, but we're even more proud of the results.</p>
                                    </button>
                                </h5>
                                <div className="accordion-collapse collapse" id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis. Augue eu vulputate egestas cursus as vivamus. Commodo dictum ultrices nunc dignissim.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
  );
}

export default Accordion;
