import React from 'react'
import directorimage from '../updatedimages/Person.png'
import '../Companystyle.css'
const Company = () => {
  return (
    <div>
      <section className="company-main">
        <h1 className="text-white text-center about-section" >About Us</h1>
      </section>
      <section className="container ">
        <div className="row py-4">
            <div className="col-md-7 col-12 reveal fade-left">
                <h1 className="py-2">About us</h1>
                <p>
                    Cs Max is a startup company based in India that provides green energy solutions for businesses and industries.
                     We specialize in solar panels, wind turbines, and industrial solar equipment installation and maintenance. We also help our clients with buying land, obtaining permits, and designing customized plans for their energy needs.
                </p>
                <p>We believe that green energy is the future of India and the world, and we are committed to making it accessible and
                     affordable for everyone. Our vision is to create a cleaner, greener, and more sustainable environment for our customers and society.</p>
                <p>
                    We have a team of experienced and qualified engineers, technicians, and consultants who are passionate about renewable energy and innovation. We use the latest technology
                     and best practices to deliver high-quality products and services that meet or exceed our customers' expectations.
                </p>
                <p>
                    We are always looking for new opportunities and challenges to grow and improve our business. If you are interested in working with us or learning more about our 
                    offerings, please contact us today. We would love to hear from you!
                </p>
            </div>
            <div className="col-md-5 col-12 reveal fade-right">
                <div>
                    <img src={directorimage} />
                </div>
                <div className="about-chairman">
                    <div className="container">
                        <h4 className="pt-4">Mr. Yogesh Chaudhary</h4>
                        <h6>Director</h6>
                        <h5 className="py-3">Director's Desk</h5>
                        <div className="para">
                            <p>Mr. Yogesh Chaudhary is the director and founder of CS MAX, a startup company that provides green energy solutions for businesses and industries. 
                                He has a large client base across India and abroad, and he has over 20 years of experience in technical and technological fields.
                            </p>
                            <p>
                                He is a visionary leader who believes in the power of renewable energy to transform the world. He is responsible for setting the strategic
                                 direction and goals of the company, as well as overseeing the operations and finances. He is also involved in developing and maintaining relationships with key stakeholders, partners, and customers.
                            </p>
                            <p>
                                His values accountability, leadership, decision-making, and collaboration as the core principles of his work. He leads by example and inspires his team to achieve excellence and innovation. He is 
                                alwavs open to new ideas and feedback. and he encourages a culture of learning and growth within the company.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default Company
