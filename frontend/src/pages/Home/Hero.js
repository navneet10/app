import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";

function Hero() {
    const [herodata, setHerodata] = useState(null);
    const [contactData, setContactData] = useState(null);
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Adjust duration as needed
    }, []);

    useEffect(() => {
        const getHero = async () => {
            const data = await fetchData("banner");
            const contactData = await fetchData("contact_info");
            //if (Array.isArray(data) && data.length > 0) {
                setHerodata(data[0]);  
            setContactData(contactData[0]);  
           // }
        }
        getHero();
    }, []);

    return (
        <> 
            <section className="position-relative overflow-hidden box-banner-14"
                style={{
                    background: `url("/img/${herodata?.bg_image || ""}") no-repeat top center`
            }}>
                <div className="box-banner-14-inner"  >

                    <div className="container" data-aos="fade-up">
                        <div className="banner">
                            <p className="sub-heading-ag-sm text-uppercase text-line-down color-white mb-1">
                                 
                                {herodata?.small_text || "Loading..."}
                            </p>
                            <h1 className="display-4xl-bold color-white mb-5">
                                {herodata?.title || "Loading..."}
                            </h1>
                            <div className="d-flex align-items-center flex-wrap">
                                <Link to={herodata?.button_link || "#"} className="btn btn-primary-square-md mb-3">
                                    {herodata?.button_text || "Loading..."}
                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L3.0598e-07 7.5L19 7.5Z" fill="" />
                                        <path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L-1.70857e-07 7.5" stroke="" strokeWidth="2" />
                                    </svg>
                                </Link>
                                <span className="mr-20"></span>
                                <div className="d-inline-block mb-3">
                                    <div className="box-need-help-2 color-white">
                                        <img src={`/img/${herodata?.icons}`} alt="Vatech" />
                                        <div className="right-help">
                                            <span className="paragraph-18-fitree">{herodata?.text}</span><br />
                                            <strong className="paragraph-base-fitree-bold color-white">{contactData?.phone }</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  );
}

export default Hero;
