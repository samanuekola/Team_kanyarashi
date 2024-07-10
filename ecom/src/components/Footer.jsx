import React from 'react'
import footerlogo from '../updatedimages/Logo white.png'
const Footer = () => {
  return (
    <footer className="footer-img">
    <div className="container py-4">
        <div className="row">
            <div className="col-lg-3 col-12 py-2 col-md-5">
                <a href="./index.html" className="py-2"><img src={footerlogo} className="logo-img"/></a>
                <div className="d-flex py-3">
                    <div className="h3">
                        <i className="bi bi-geo-alt text-white"></i>
                    </div>
                    <div className="text-white px-3">
                         PU-8, 2nd Floor, Pitampura, Saraswati vihar, delhi, North West, Delhi,
                        India
                    </div>
                </div>
                <div className="d-flex py-2">
                    <div className="h3">
                        <i className="bi bi-telephone-inbound text-white"></i>
                    </div>
                    <div className="text-white px-3">
                        +91-998 8776 655
                    </div>
                </div>
                <div className="d-flex py-2">
                    <div className="h3">
                        <i className="bi bi-envelope text-white"></i>
                    </div>
                    <div className="text-white px-3">
                        info@cmaxpower.com
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-12 py-2 col-md-7">
                <div className="text-white">
                    <h4>Stay Up To Date with CS MAX</h4>
                    <p>Subscribe to our newsletter to get updates about Services, Updates, and Development 
                        in Renwable Energy.
                    </p>
                    <form>
                        <input className="input-stay col-12 my-2 input-email" type="text" placeholder="Join us for a brighter future."/>
                        <button className="col-12 my-2 button-sub">Subscribe <i className="bi bi-arrow-right"></i></button>
                    </form>
                </div>
            </div>
            <div className="col-lg-2 col-12 py-2 col-md-6">
                <div className="text-white">
                    <h4>Quick Links</h4>
                    <ul>
                        <li className="py-1"><a className="footer-a" href="#">Home</a></li>
                        <li className="py-1"><a className="footer-a" href="#">About</a></li>
                        <li className="py-1"><a className="footer-a" href="#">Projects</a></li>
                        <li className="py-1"><a className="footer-a" href="#">Blog & News</a></li>
                        <li className="py-1"><a className="footer-a" href="#">Our Team</a></li>
                        <li className="py-1"><a className="footer-a" href="#">Site Map</a></li>
                       
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-12 py-2 col-md-6">
                <div className="text-white">
                    <h4>Services</h4>
                    <ul>
                        <li className="py-1"><a className="footer-a" href="#">Solar Energy</a></li>
                        <li className="py-1"><a className="footer-a" href="#">Wind Energy</a></li>
                        <li className="py-1"><a className="footer-a" href="#">Consultancy</a></li>
                        <li className="py-1"><a className="footer-a" href="#">Custom Plan</a></li>
                        <li className="py-1"><a className="footer-a" href="#">Solar Products</a></li>
                        <li className="py-1"><a className="footer-a" href="#">Engineering</a></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="copy-right text-center py-4">
        
        <p className="text-white">©2023 All Rights Reserved. <span className="text-green">www.everrnew.com</span></p>
    </div>
</footer>
  )
}

export default Footer
