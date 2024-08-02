import React from 'react'
import image from '../updatedimages/allcomponents.jpeg'
const IndexInfosection = () => {
  return (
    <div>
      <section className="container py-4 reveal">
        <div className="row justify-content-center justify-content-sm-between ">
            <div className="col-sm-12 col-md-12 col-lg-7">
                <h5 className="text-green">The world eagerly awaits the latest in computer technology</h5>
                <h1 className="py-4">TechWorld’s Expertise & Experience Is All You Need</h1>
            </div>
            <div className="row align-items-center py-4">
                <div className="col-sm-12 col-md-12 col-lg-2">
                    <div className="py-4">
                        <h1 className="text-green font-num">100</h1>
                        <h5>Products since Inception</h5>
                    </div>
                    <div className="py-4">
                        <h1 className="text-green font-num">2000</h1>
                        <h5>Units Sold</h5>
                    </div>
                    <div className="py-4">
                        <h1 className="text-green font-num">50</h1>
                        <h5>New Products in Development</h5>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <img src={image} className="w-100 rounded"/>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <p>With the growing demand for cutting-edge computer components, it is important to have a trusted partner who can guide you through the selection process. TechWorld’s expertise in computer technology can help you tap into the latest advancements and make the most out of your hardware. Our team of experts can provide customized solutions that cater to your specific needs, whether it's for gaming, professional use, or personal projects. Let us help you achieve peak performance and ensure the long-term reliability of your systems. Contact TechWorld today to learn more about our products.</p>
                    <button className="btn-header p-3">Learn More <i className="bi bi-arrow-right px-2"></i></button>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default IndexInfosection
