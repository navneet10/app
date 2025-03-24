
import AboutImg1 from "../../assets/imgs/pages/about/about.png";
import AboutImg2 from "../../assets/imgs/pages/about/about2.png";

function AboutSection() {
  return (
      <section className="box-section box-about-us-2">
          <div className="container" data-aos="fade-up">
              <div className="row">
                  <div className="col-lg-6">
                      <div className="box-image-about-us-2">
                          <div className="image-about-1">
                              <img className="wow img-custom-anim-left" src={ AboutImg1} alt="Vatech" />
                          </div>
                          <div className="image-about-2">
                              <img className="wow img-custom-anim-right" src={AboutImg2} alt="Vatech" />
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="box-info-about-top">
                          <div className="banner-small-title-black line-primary-1400">About us</div>
                          <h2 className="heading-ag-3xl dark-950 mb-3">
                              Crafting Success Stories<br className="d-none d-lg-block" />
                              One Client Time
                          </h2>
                      </div>
                      <div className="box-info-about-line">
                          <p className="mb-20 paragraph-rubik-r neutral-1700">We provide technical support to assist you with any issues orai questions you may have regarding our services Yes, we offerm customizable solutions tailored</p>
                          <ul className="list-tick">
                              <li className="sub-heading-ag-sm">
                                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4.99867 9.66864C4.86625 9.66941 4.73661 9.63073 4.62626 9.55753C4.51591 9.48433 4.42987 9.37992 4.37909 9.25763C4.32831 9.13533 4.3151 9.00068 4.34115 8.87085C4.3672 8.74102 4.43132 8.62189 4.52534 8.52864L8.05867 5.00197L4.52534 1.4753C4.41612 1.34777 4.35905 1.18372 4.36553 1.01594C4.37201 0.848152 4.44156 0.688992 4.56029 0.570262C4.67902 0.451533 4.83818 0.381978 5.00597 0.375497C5.17375 0.369016 5.3378 0.426087 5.46534 0.535305L9.46534 4.53531C9.5895 4.66021 9.6592 4.82918 9.6592 5.0053C9.6592 5.18143 9.5895 5.3504 9.46534 5.4753L5.46534 9.4753C5.34116 9.59847 5.17356 9.6679 4.99867 9.66864Z" fill="#0075DC" />
                                      <path d="M0.998669 9.66809C0.866252 9.66886 0.736606 9.63018 0.62626 9.55698C0.515914 9.48378 0.429866 9.37938 0.379088 9.25708C0.32831 9.13479 0.315103 9.00014 0.341149 8.87031C0.367196 8.74048 0.431316 8.62134 0.525335 8.52809L4.05867 5.00143L0.525335 1.47476C0.3998 1.34922 0.329274 1.17896 0.329274 1.00143C0.329274 0.823891 0.3998 0.653628 0.525335 0.528092C0.650871 0.402557 0.821134 0.332031 0.998669 0.332031C1.1762 0.332031 1.34647 0.402557 1.472 0.528092L5.472 4.52809C5.59617 4.653 5.66586 4.82197 5.66586 4.99809C5.66586 5.17422 5.59617 5.34318 5.472 5.46809L1.472 9.46809C1.41026 9.53109 1.33663 9.5812 1.25538 9.61553C1.17413 9.64986 1.08687 9.66773 0.998669 9.66809Z" fill="#0075DC" />
                                  </svg>
                                  You can contact our customer support
                              </li>
                              <li className="sub-heading-ag-sm">
                                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4.99867 9.66864C4.86625 9.66941 4.73661 9.63073 4.62626 9.55753C4.51591 9.48433 4.42987 9.37992 4.37909 9.25763C4.32831 9.13533 4.3151 9.00068 4.34115 8.87085C4.3672 8.74102 4.43132 8.62189 4.52534 8.52864L8.05867 5.00197L4.52534 1.4753C4.41612 1.34777 4.35905 1.18372 4.36553 1.01594C4.37201 0.848152 4.44156 0.688992 4.56029 0.570262C4.67902 0.451533 4.83818 0.381978 5.00597 0.375497C5.17375 0.369016 5.3378 0.426087 5.46534 0.535305L9.46534 4.53531C9.5895 4.66021 9.6592 4.82918 9.6592 5.0053C9.6592 5.18143 9.5895 5.3504 9.46534 5.4753L5.46534 9.4753C5.34116 9.59847 5.17356 9.6679 4.99867 9.66864Z" fill="#0075DC" />
                                      <path d="M0.998669 9.66809C0.866252 9.66886 0.736606 9.63018 0.62626 9.55698C0.515914 9.48378 0.429866 9.37938 0.379088 9.25708C0.32831 9.13479 0.315103 9.00014 0.341149 8.87031C0.367196 8.74048 0.431316 8.62134 0.525335 8.52809L4.05867 5.00143L0.525335 1.47476C0.3998 1.34922 0.329274 1.17896 0.329274 1.00143C0.329274 0.823891 0.3998 0.653628 0.525335 0.528092C0.650871 0.402557 0.821134 0.332031 0.998669 0.332031C1.1762 0.332031 1.34647 0.402557 1.472 0.528092L5.472 4.52809C5.59617 4.653 5.66586 4.82197 5.66586 4.99809C5.66586 5.17422 5.59617 5.34318 5.472 5.46809L1.472 9.46809C1.41026 9.53109 1.33663 9.5812 1.25538 9.61553C1.17413 9.64986 1.08687 9.66773 0.998669 9.66809Z" fill="#0075DC" />
                                  </svg>
                                  We offer a range of services including
                              </li>
                          </ul>
                          <a href="#" className="btn btn-border-gray-600 mb-3">
                              Read More
                              <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773437C1.44922 0.417969 2.02344 0.417969 2.35156 0.773437L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="#141416" />
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default AboutSection;
