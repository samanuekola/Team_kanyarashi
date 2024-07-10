import React from 'react'
import serviceimage from '../updatedimages/Green-Services-Section.jpg'
const Servicesgreensection = () => {
  return (
    <section className="bg-greenimg">
        <div className="container">
            <div className="row green-services ">
                <div className="col-12 col-md-6 p-0 bg-white reveal fade-left">
                    <img src={serviceimage} className="img-fluid"/>
                </div>
                <div className="col-12 col-md-6 py-5 px-5 bg-white reveal fade-right">
                    <h6 className="text-green">Making Energy More Affordable</h6>
                    <h5>By Leveraging On Progressive Practices To Cut Down Infrastructure Investments & Logistics And Maximising Value.</h5>
                    <p className="py-3">The world is taking great strides towards policies that prioritize the protection of our environment. As part of this global movement, Cs max is contributing to the goal of making 
                        green energy more affordable and accessible to everyone. By offering a wide range of affordable and reliable green energy solutions, Cs max is empowering communities to take control of their energy usage and reduce their carbon footprint. With their innovative approach to sustainable energy, Cs max is helping to create a greener future for all.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Servicesgreensection
