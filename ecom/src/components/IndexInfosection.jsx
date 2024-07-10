import React from 'react'
import image from '../updatedimages/Home Page 2nd image.jpg'
const IndexInfosection = () => {
  return (
    <div>
      <section className="container py-4 reveal">
        <div className="row justify-content-center justify-content-sm-between ">
            <div className="col-sm-12 col-md-12 col-lg-7">
                <h5 className="text-green">The world eagerly awaits renewable energy</h5>
                <h1 className="py-4">CSMAX’s Expertise & Experience Is All You Need</h1>
            </div>
            <div className="row align-items-center py-4">
                <div className="col-sm-12 col-md-12 col-lg-2">
                    <div className="py-4">
                        <h1 className="text-green font-num">25</h1>
                        <h5>Projects since Inception</h5>
                        
                    </div>
                    <div className="py-4">
                        <h1 className="text-green font-num">400</h1>
                        <h5>MW Installed Capacity</h5>
                    </div>
                    <div className="py-4">
                        <h1 className="text-green font-num">4.16</h1>
                        <h5>GW Installation in the pipeline</h5>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <img src={image} className="w-100 rounded"/>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <p>With the growing demand for renewable energy, it is important to have a trusted partner who can guide you through the transition process. CS MAX’s expertise in renewable energy can help you tap 
                        into this sustainable resource and make the most out of its benefits. Our team of experts can provide customized solutions that cater to your 
                        specific needs, whether it's for residential or commercial use. Let us help you achieve a sustainable future and ensure the long-term viability of our planet. Contact CS MAX’s today to learn more about our services.</p>
                        <button className="btn-header p-3">Learn More <i className="bi bi-arrow-right px-2"></i></button>
                </div>
            </div>
        </div>
        
    </section>
    </div>
  )
}

export default IndexInfosection
