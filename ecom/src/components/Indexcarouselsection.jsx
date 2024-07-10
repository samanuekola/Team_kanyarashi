import React from 'react'
import image1 from '../updatedimages/Explore Our Projects 1.jpg';
import image2 from '../updatedimages/Explore Our Projects 2.jpg';
import image3 from '../updatedimages/Explore Our Projects 3.jpg';
import image4 from '../updatedimages/Explore-Our-Projects-4.jpg';
import image5 from '../updatedimages/Solar-Special-Project.jpg';
import image6 from '../updatedimages/E-waste-management-project.jpg';
import image7 from '../updatedimages/Repowering-Project.jpg';
import image8 from '../updatedimages/Asset-managment-Project.jpg';
const Indexcarouselsection = () => {
  return (
    <section className="bg-191A1C p-5">
    <div className="container">
        <div className="row align-items-center py-4 reveal">
            <div className="col-12 col-md-6">
                <h5 className="text-green text-uppercase">Empowering you sustainably with the Greenway</h5>
                <h2 className="text-white">
                    We are your complete solutions provider for renewable energy
                </h2>
            </div>
            <div className="col-12 col-md-6 ">
                <h5 className="text-white">CS MAX is your affordable and reliable partner for wind and solar power investments.
                </h5>
                <div className="py-3">
                    <button className="btn-body p-3 my-2 my-sm-0">Request a Quote<i className="bi bi-arrow-right px-2"></i> </button>
                    <button className="btn-body2 p-3">Explore All Services <i className="bi bi-arrow-right px-2"></i></button>
                </div>
            </div>
        </div>
    </div>
    
    <section className="pt-5 pb-5">
        <div className="container reveal">
            <div className="row">
                <div className="col-6 col-lg-10 col-md-10 py-4">
                    <h3 className="mb-3 text-green">Explore our projects </h3>
                </div>
                <div className="col-6 col-lg-2 col-md-2 float-right">
                    <a className="btn btn-primarys mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                        <i className="bi bi-chevron-left text-white"></i>
                    </a>
                    <a className="btn btn-primarys mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                        <i className="bi bi-chevron-right text-white"></i>
                    </a>
                </div>
                <div className="col-12">
                    <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
    
                        <div className="carousel-inner">
                            <div className="carousel-item active  rounded">
                                <div className="row">
    
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={image1}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">Wind Power</h4>
                                                <p className="card-text py-2">We offer Single Window EPC solutions that include Resource Assessment, Permits and Approval, Land Development EPC, and Erection & Commissioning.</p>
                                                <button className="btn-cards p-2 px-2 " style={{width: "140px"}}>Read more<i className="fa-regular fa-circle-right px-2"></i></button>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={image2}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">Solar Power</h4>
                                                <p className="card-text py-2">We offer comprehensive EPC solutions for a variety of solar projects, including off-grid commercial applications, roof-mounted systems, floating solar projects</p>
                                                <button className="btn-cards p-2 px-2 " style={{width: "140px"}}>Read more<i className="fa-regular fa-circle-right px-2"></i></button>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={image3}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">Hybrid Power</h4>
                                                <p className="card-text py-2"> Our overarching mission is to rentlessly provide cost-effective and dependable solutions for integrating renewable energies into the power grid.</p>
                                                <button className="btn-cards p-2 px-2 " style={{width: "140px"}}>Read more<i className="fa-regular fa-circle-right px-2"></i></button>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={image4}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">Consultancy</h4>
                                                <p className="card-text py-2">Our consultancy services are professional services that help clients achieve their sustainability goals and transition to low-carbon energy sources.</p>
                                                <button className="btn-cards p-2 px-2 " style={{width: "140px"}}>Read more<i className="fa-regular fa-circle-right px-2"></i></button>
                                            </div>
    
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div className="carousel-item  rounded">
                                <div className="row">
    
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={image5}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">Solar Special Projects</h4>
                                                <p className="card-text py-2">Solar special projects includes, smart meters, solar pump, charging stations, these projects use solar energy, a clean source of energy.</p>
                                                <button className="btn-cards p-2 px-2 " style={{width: "140px"}}>Read more<i className="fa-regular fa-circle-right px-2"></i></button>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={image6}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">E Waste Management</h4>
                                                <p className="card-text py-2">At Cs Max, we offer professional and reliable e-waste management services to help you reduce your environmental impact and save money. </p>
                                                <button className="btn-cards p-2 px-2 " style={{width: "140px"}}>Read more<i className="fa-regular fa-circle-right px-2"></i></button>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={image7}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">Re Powering</h4>
                                                <p className="card-text py-2">Repowering solar equipment is a process of upgrading and replacing old or damaged solar required components with new and more efficient ones.</p>
                                                <button className="btn-cards p-2 px-2 " style={{width: "140px"}}>Read more<i className="fa-regular fa-circle-right px-2"></i></button>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={image8}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">Asset Management</h4>
                                                <p className="card-text py-2">Offering comprehensive, operations & maintenance services for wind & solar farms, covering all components from wind turbine & solar panels.</p>
                                                <button className="btn-cards p-2 px-2 " style={{width: "140px"}}>Read more<i className="fa-regular fa-circle-right px-2"></i></button>
                                            </div>
    
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>
  )
}

export default Indexcarouselsection
