import React from 'react'; 
import PageHeader from '../../components/PageHeader'; 
import detimg from "../../assets/imgs/pages/project/detail.png" 

function ProjectDetails() {
    return (
        <>
            <PageHeader />
            <section className="box-section box-project-detail">
                <div className="container" data-aos="fade-up" >
                    <div className="row">
                        <div className="col-lg-7 mb-4">
                            <img src={detimg} alt="Vatech" />
                        </div>
                        <div className="col-lg-5 mb-4 position-relative">
                            <div className="right-project-detail">
                                <h2>A lifetime Insurance</h2>
                                <p className="paragraph-rubik-r neutral-2400">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, virra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliq</p>
                                <p className="paragraph-rubik-r neutral-2400">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non,</p>
                                <div className="box-info-project mt-4">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p className="paragraph-rubik-r">Client</p>
                                            <p className="sub-heading-ag-md mb-5">Sandi leo rakiul</p>
                                            <p className="paragraph-rubik-r">Amount</p>
                                            <p className="sub-heading-ag-md">45,000$</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="paragraph-rubik-r">Category</p>
                                            <p className="sub-heading-ag-md mb-5">Monthly,Insecure</p>
                                            <p className="paragraph-rubik-r">Date</p>
                                            <p className="sub-heading-ag-md">November 19, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-detail">
                        <p>Sliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, aoreet augue mattis ferment ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non,</p>
                        <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam erosto, posuere lobortis non, viverra laoreet augue mis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis.</p>
                        <h4>Our Project Structure Fully Responsive</h4>
                        <p>Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobor, vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra .Aliquam eros justo,</p>
                    </div>
                </div>
            </section>

        </>
        
  );
}

export default ProjectDetails;
