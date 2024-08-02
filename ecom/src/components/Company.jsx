import React from 'react';
import directorimage from '../updatedimages/Person.png';
import '../Companystyle.css';

const Company = () => {
  return (
    <div>
      <section className="company-main">
        <h1 className="text-white text-center about-section">About Us</h1>
      </section>
      <section className="container">
        <div className="row py-4">
          <div className="col-md-7 col-12 reveal fade-left">
            <h1 className="py-2">About Us</h1>
            <p>
              At TechWorld, we are at the forefront of the computer components industry. Based in India, we specialize in providing high-quality components for all your computing needs, including processors, graphics cards, memory, and storage solutions. Our mission is to offer the latest and most reliable hardware to enthusiasts, gamers, and professionals.
            </p>
            <p>
              We believe that the right components can transform your computing experience. Our team is dedicated to sourcing and delivering cutting-edge technology that meets the diverse needs of our clients. Whether you’re building a high-performance gaming rig or upgrading your professional workstation, we are here to help you achieve optimal performance.
            </p>
            <p>
              Our experienced team stays ahead of industry trends to provide products that offer superior reliability and innovation. We are committed to ensuring that our customers receive the best service and support, making your technology investment worthwhile.
            </p>
            <p>
              We are excited to explore new advancements and opportunities in the computer components market. If you are interested in learning more about our products or partnering with us, please contact us. We look forward to helping you build the perfect computing setup!
            </p>
          </div>
          <div className="col-md-5 col-12 reveal fade-right">
            <div>
              <img src={directorimage} alt="Mr. Yuva satwik" className="img-fluid rounded" />
            </div>
            <div className="about-chairman">
              <div className="container">
                <h4 className="pt-4">Mr. Yuva satwik</h4>
                <h6>Founder & Director</h6>
                <h5 className="py-3">From the Director's Desk</h5>
                <div className="para">
                  <p>
                    Mr. Yuva satwik is the founder and director of TechWorld, a leading company in the computer components sector. With over 20 years of experience in technology and hardware, he has a deep understanding of the industry and a strong commitment to delivering exceptional products and services.
                  </p>
                  <p>
                    As a pioneer in the computer components market, Mr. Yuva drives the company's vision of providing the latest and most reliable hardware solutions. His leadership ensures that TechWorld remains at the cutting edge of technology and continues to meet the evolving needs of its customers.
                  </p>
                  <p>
                    Mr. Yuva values innovation, quality, and customer satisfaction. He leads by example, fostering a culture of excellence and continuous improvement within the company. His dedication to the industry and openness to new ideas inspire the team to strive for excellence in every aspect of their work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Company;
