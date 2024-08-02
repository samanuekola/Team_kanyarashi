import React from 'react'
import image1 from '../updatedimages/mouse.jpeg'
import image2 from '../updatedimages/keyboard.jpeg'
import image3 from '../updatedimages/printer.jpeg'
import image4 from '../updatedimages/scanner.jpeg'
import image5 from '../updatedimages/router.jpeg'
import image6 from '../updatedimages/webcam.jpeg'
import image7 from '../updatedimages/laptopbag.jpeg'
import image8 from '../updatedimages/monitor.jpeg'

const Indexcarouselsection = () => {
  return (
    <section className="bg-191A1C p-5">
      <div className="container">
        <div className="row align-items-center py-4 reveal">
          <div className="col-12 col-md-6">
            <h5 className="text-green text-uppercase">Empowering you with the latest tech</h5>
            <h2 className="text-white">
              We are your complete solutions provider for Computer Components
            </h2>
          </div>
          <div className="col-12 col-md-6">
            <h5 className="text-white">TechWorld is your affordable and reliable partner for Computer Components.</h5>
            <div className="py-3">
              <button className="btn-body p-3 my-2 my-sm-0">Request a Quote<i className="bi bi-arrow-right px-2"></i> </button>
              <button className="btn-body2 p-3">Explore All Products <i className="bi bi-arrow-right px-2"></i></button>
            </div>
          </div>
        </div>
      </div>
    
      <section className="pt-5 pb-5">
        <div className="container reveal">
          <div className="row">
            <div className="col-6 col-lg-10 col-md-10 py-4">
              <h3 className="mb-3 text-green">Explore our products</h3>
            </div>
            <div className="col-6 col-lg-2 col-md-2 float-right">
              <a className="btn btn-primarys mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i className="bi bi-chevron-left text-white"></i>
              </a>
              <a className="btn btn-primarys mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i className="bi bi-chevron-right text-white"></i>
              </a>
            </div>
            <div className="col-12">
              <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active rounded">
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img className="img-fluid rounded-top" alt="Mouse" src={image1}/>
                          <div className="card-body cards-height d-flex flex-column justify-content-end">
                            <h4 className="card-title py-2">Mouse</h4>
                            <p className="card-text py-2">Explore our range of ergonomic and gaming mice, designed for precision and comfort. With customizable buttons and DPI settings, find the perfect mouse for work or play.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img className="img-fluid rounded-top" alt="Keyboard" src={image2}/>
                          <div className="card-body cards-height d-flex flex-column justify-content-end">
                            <h4 className="card-title py-2">Keyboard</h4>
                            <p className="card-text py-2">Discover mechanical and membrane keyboards for all your typing and gaming needs. Our keyboards offer superior tactile feedback and customizable RGB lighting.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img className="img-fluid rounded-top" alt="Printer" src={image3}/>
                          <div className="card-body cards-height d-flex flex-column justify-content-end">
                            <h4 className="card-title py-2">Printer</h4>
                            <p className="card-text py-2">Find reliable printers for home and office, offering high-quality prints and efficiency. Choose from a range of laser and inkjet printers with wireless connectivity.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img className="img-fluid rounded-top" alt="Scanner" src={image4}/>
                          <div className="card-body cards-height d-flex flex-column justify-content-end">
                            <h4 className="card-title py-2">Scanner</h4>
                            <p className="card-text py-2">High-speed scanners for digitizing documents and photos with clarity and ease. Perfect for archiving important documents or preserving old photographs.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item rounded">
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img className="img-fluid rounded-top" alt="Router" src={image5}/>
                          <div className="card-body cards-height d-flex flex-column justify-content-end">
                            <h4 className="card-title py-2">Router</h4>
                            <p className="card-text py-2">Stay connected with our range of high-performance routers. Designed for fast and stable internet connectivity, ideal for streaming, gaming, and remote work.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img className="img-fluid rounded-top" alt="Webcam" src={image6}/>
                          <div className="card-body cards-height d-flex flex-column justify-content-end">
                            <h4 className="card-title py-2">Webcam</h4>
                            <p className="card-text py-2">Enhance your video calls and streaming with our high-definition webcams. Features include auto-focus, low-light correction, and built-in microphones for clear audio.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img className="img-fluid rounded-top" alt="Laptop Bag" src={image7}/>
                          <div className="card-body cards-height d-flex flex-column justify-content-end">
                            <h4 className="card-title py-2">Laptop Bag</h4>
                            <p className="card-text py-2">Protect your laptop with our stylish and durable laptop bags. Available in various sizes and designs, these bags offer ample storage and padding for your device.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img className="img-fluid rounded-top" alt="Monitor" src={image8}/>
                          <div className="card-body cards-height d-flex flex-column justify-content-end">
                            <h4 className="card-title py-2">Monitor</h4>
                            <p className="card-text py-2">Experience vibrant and clear visuals with our range of monitors. Whether for gaming, design, or general use, find the perfect screen size and resolution to suit your needs.</p>
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
