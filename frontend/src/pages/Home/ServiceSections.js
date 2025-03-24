import ServiceBox from "../Services/ServiceBox";

function ServiceSection() {
    
    return (
        <> 
            <section class="position-relative overflow-hidden box-section box-our-services-11">
                <div class="container">
                    <div class="row position-relative align-items-end">
                        <div class="col-lg-8">
                            <p class="sub-heading-ag-sm text-uppercase primary-500 mb-1">
                                sERVICES
                                <svg class="ms-2" width="61" height="8" viewBox="0 0 61 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z" fill="#0055FF" />
                                </svg>
                            </p>
                            <h3 class="heading-48-fitree dark-950">
                                What we Have to Offer<br class="d-none d-lg-block" />
                                For your SERVICES
                            </h3>
                        </div>
                        <div class="col-lg-4 text-center text-lg-end">
                            <a href="#" class="btn btn-view-all dark-950">
                                View all services
                                <span>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7022 11.7956C15.2253 11.2272 14.9576 10.0054 14.8098 8.91541C14.617 7.51069 14.6354 6.12852 14.9144 4.85136C15.1237 3.8938 15.4746 2.84878 16.0543 2.3623M16.0543 2.3623C15.4746 2.84878 14.3839 3.01336 13.4051 3.05268C12.0983 3.10495 10.7339 2.88301 9.3853 2.45076C8.33688 2.11515 7.17885 1.63785 6.70319 1.07098M16.0543 2.3623L1.49947 14.5753" stroke="white" stroke-width="2"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <ServiceBox />
                </div>
            </section>
        </>
  );
}

export default ServiceSection;
