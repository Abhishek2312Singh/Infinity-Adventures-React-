import React from 'react'
import BackgroundImg from './images/about-img.jpg'
export default function HomeAbout() {
    const setColor = {
        color : ' #34a4eb'
    }
  return (
    <div>
      <div id="about-us" className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src={BackgroundImg} alt="" style={{objectFit: 'cover'}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text pe-3" style={setColor}>About Us</h6>
                    <h1 className="mb-4">Welcome to <span className="text" style={setColor}>INFINITY ADVENTURES</span></h1>
                    <p className="mb-4">Explore the World with Us
                        Welcome to Infinity Adventures Tour and travel, your trusted partner in unforgettable travel experiences. </p>
                    <p className="mb-4">We specialize in providing personalized travel solutions for individuals, families, and groups who seek adventure, relaxation, and everything in between. Our mission is to turn every trip into a dream vacation by offering tailor-made itineraries, exceptional customer service, and the best value for your money.</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={setColor}></i>First Class Flights</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={setColor}></i>Handpicked Hotels</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={setColor}></i>5 Star Accommodations</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={setColor}></i>Vehicle Accommodations</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={setColor}></i>Premium City Tours</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={setColor}></i>24/7 Service</p>
                        </div>
                    </div>
                    <a className="btn py-3 px-5 mt-2" href="" style={{backgroundColor: '#34a4eb', color: 'white'}}>Read More</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
