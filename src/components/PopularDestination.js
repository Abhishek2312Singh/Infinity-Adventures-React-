import React from 'react'
import Goa from './images/goa.jpg'
import Uttra from './images/uttrakhand-1.jpg'
import Thai from './images/thailand.jpg'
import Dubai from './images/dubai.jpg'

export default function PopularDestination() {
    const setColor = {
        color : ' #34a4eb'
    }
  return (
    <div>
       <div className="container-xxl py-5 destination">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text px-3" style={setColor}>Destination</h6>
                <h1 className="mb-5">Popular Destination</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={Uttra} alt=""/>
                                <div className="bg-white text fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={setColor}>Uttrakhand</div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={Goa} alt=""/>
                                <div className="bg-white text fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={setColor}>Goa</div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={Thai} alt=""/>
                                <div className="bg-white text fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={setColor}>Thailand</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: '350px'}}>
                    <a className="position-relative d-block h-100 overflow-hidden" href="">
                        <img className="img-fluid position-absolute w-100 h-100" src={Dubai} alt="" style={{objectFit: 'cover'}}/>
                        
                        <div className="bg-white text fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={setColor}>Dubai</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
