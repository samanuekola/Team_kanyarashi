import React from 'react'
import Mainimage from '../updatedimages/Header-Iamge.png';
const IndexMainsection = () => {
  return (
    <section className="container bod">
        <div className="row py-4">
            <div className="col-md-6 col-12">
                <h1 className="h1-bod">The Future <br/>Belongs to <span className="text-green"><br/>Renwable Energy</span></h1>
                <h2 className="py-5">Switch to <span className="text-vol">#Future</span></h2>
                <div className="row">
                    <div className="col-lg-5 col-12 py-2">
                        <button className="btn-body px-3 py-3">Request a Quote <i className="bi bi-arrow-right"></i></button>
                        
                    </div>
                    <div className="col-lg-4 col-12 py-2">
                        <button className="btn-header2 px-4 py-3">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-12 py-3 py-md-0">
                <img src={Mainimage} className="img-fluid"/>
            </div>
        </div>
    </section>
  )
}

export default IndexMainsection
