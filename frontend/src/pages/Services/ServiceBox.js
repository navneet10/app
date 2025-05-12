import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../services/api';

function ServiceBox() {
    const [servicedata, setServicedata] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const serviceboxdata = async () => {
            try {
                const servicefatchdata = await fetchData('services');
                setServicedata(servicefatchdata || []); // Set to an empty array if null
            } catch (error) {
                console.error("Failed to fetch services:", error);
            }
        };
        serviceboxdata();
    }, []);

    return (
        <div className="row mt-5">
            {servicedata && servicedata.length > 0 ? (
                servicedata.map((service, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="card-service-6" data-aos="fade-up" data-aos-duration="0">
                            <div className="card-image"> 
                                <img src={`img/${service.icon}`} alt={service.title} />
                            </div>
                            <div className="card-info">
                                <h3 className="heading-ag-xl dark-950">{service.title}</h3>
                                <p className="paragraph-rubik-r dark-950-70">{service.description}</p>
                                <Link to={service.button_link} className="readmore sub-heading-ag-md">
                                    {service.button_text}
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7291 10.1533C12.3596 9.69869 12.1635 8.73092 12.0604 7.86866C11.9256 6.75741 11.9573 5.66659 12.1934 4.66189C12.3705 3.90862 12.6605 3.08807 13.1242 2.71125M13.1242 2.71125C12.6605 3.08807 11.7975 3.20443 11.0244 3.22332C9.99212 3.24835 8.91789 3.05622 7.85869 2.69826C7.03526 2.42032 6.12707 2.02917 5.75863 1.57579M13.1242 2.71125L1.48325 12.1711" stroke="" strokeWidth="2" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading services...</p>  
            )}
        </div>
    );
}

export default ServiceBox;
