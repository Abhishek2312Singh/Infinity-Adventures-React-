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
       <div class="container-xxl py-5 destination">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text px-3" style={setColor}>Destination</h6>
                <h1 class="mb-5">Popular Destination</h1>
            </div>
            <div class="row g-3">
                <div class="col-lg-7 col-md-6">
                    <div class="row g-3">
                        <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <a class="position-relative d-block overflow-hidden" href="">
                                <img class="img-fluid" src={Uttra} alt=""/>
                                <div class="bg-white text fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={setColor}>Uttrakhand</div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a class="position-relative d-block overflow-hidden" href="">
                                <img class="img-fluid" src={Goa} alt=""/>
                                <div class="bg-white text fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={setColor}>Goa</div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a class="position-relative d-block overflow-hidden" href="">
                                <img class="img-fluid" src={Thai} alt=""/>
                                <div class="bg-white text fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={setColor}>Thailand</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: '350px'}}>
                    <a class="position-relative d-block h-100 overflow-hidden" href="">
                        <img class="img-fluid position-absolute w-100 h-100" src={Dubai} alt="" style={{objectFit: 'cover'}}/>
                        
                        <div class="bg-white text fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={setColor}>Dubai</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
