import React, { useEffect } from 'react'
import BackgroundImg from './images/about-img.jpg'


const colorStyle = {
    color:'#34a4eb',
    backgroundColor: '#34a4eb'
}
export default function About(props) {
    useEffect(()=>{
        document.title = "Infinity Adventures - About"
    })
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
                    <h6 className="section-title bg-white text-start text pe-3" style={colorStyle}>Our Story</h6>
                    <h1 className="mb-4">Welcome to <span className="text" style={{color :colorStyle.color}}>INFINITY ADVENTURES</span></h1>
                    <p className="mb-4">Our Story
                        Founded in 2024, Infinity Adventures Tour and Travel was born from a deep passion for exploring the world and a desire to make travel accessible to everyone. What started as a small, ambitious travel agency has quickly grown into a trusted name in the travel industry. With a team of dedicated experts, we specialize in curating unique travel experiences that are tailored to each traveler’s desires.</p>
                    <p className="mb-4">  At Infinity Adventures, we believe travel should be more than just a getaway—it’s an opportunity to immerse yourself in new cultures, create unforgettable memories, and rediscover yourself along the way. Whether you're planning a relaxing tropical escape, a memorable family road trip, or an adrenaline-filled adventure through rugged mountains, we’re here to bring your dream trip to life. </p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={colorStyle}></i>First Class Flights</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={colorStyle}></i>Handpicked Hotels</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={colorStyle}></i>5 Star Accommodations</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={colorStyle}></i>Vehicle Accommodations</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={colorStyle}></i>Premium City Tours</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text me-2" style={colorStyle}   ></i>24/7 Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}
