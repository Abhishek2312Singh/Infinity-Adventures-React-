import React, { useEffect } from 'react'
import BackgroundImg from './images/about-img.jpg'

const colorStyle = {
    color: '#34a4eb',
    backgroundColor: 'white'
}

export default function About(props) {
    useEffect(() => {
        document.title = "Infinity Adventures - About"
    })
    
  return (
        <div style={{marginTop: '80px', paddingTop: '20px'}}>
            {/* Hero Section */}
            <div className="container-xxl py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 text-white mb-4">About Infinity Adventures</h1>
                            <p className="lead text-white mb-4">
                                Your trusted partner in creating unforgettable travel experiences across the globe. 
                                We specialize in crafting personalized journeys that transform ordinary trips into extraordinary adventures.
                            </p>
                            <div className="d-flex gap-3">
                                <div className="text-white">
                                    <h4 className="mb-0">500+</h4>
                                    <small>Happy Travelers</small>
                                </div>
                                <div className="text-white">
                                    <h4 className="mb-0">50+</h4>
                                    <small>Destinations</small>
                                </div>
                                <div className="text-white">
                                    <h4 className="mb-0">98%</h4>
                                    <small>Satisfaction Rate</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={BackgroundImg} alt="About Us" className="img-fluid rounded shadow-lg" style={{objectFit: 'cover', height: '400px', width: '100%'}} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h6 className="section-title bg-white text-center text px-3" style={colorStyle}>Our Story</h6>
                            <h2 className="mb-4">Founded on a Dream</h2>
                            <p className="lead mb-4">
                                Infinity Adventures was born from a simple yet powerful belief: travel has the power to transform lives, 
                                broaden perspectives, and create lasting memories that define who we are.
                            </p>
                            <p className="mb-4">
                                Founded in 2024 by a team of passionate travelers and industry experts, we started with a vision to make 
                                world-class travel accessible to everyone. What began as a small, ambitious travel agency has quickly 
                                grown into a trusted name in the travel industry, serving clients from all walks of life.
                            </p>
                            <p className="mb-4">
                                Our journey began when our founders, after years of exploring the world themselves, realized that many 
                                people were missing out on truly transformative travel experiences due to lack of proper guidance, 
                                planning, or access to unique destinations. We set out to change that.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="container-xxl py-5" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="text-center p-4">
                                <div className="mb-4">
                                    <i className="fa fa-bullseye fa-3x" style={colorStyle}></i>
                                </div>
                                <h4 className="mb-3">Our Mission</h4>
                                <p className="mb-0">
                                    To create extraordinary travel experiences that inspire, connect, and transform lives through 
                                    authentic cultural immersion and unforgettable adventures. We believe every journey should be 
                                    a gateway to personal growth and discovery.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center p-4">
                                <div className="mb-4">
                                    <i className="fa fa-eye fa-3x" style={colorStyle}></i>
                                </div>
                                <h4 className="mb-3">Our Vision</h4>
                                <p className="mb-0">
                                    To be the world's most trusted travel partner, making every journey a gateway to discovery, 
                                    growth, and lifelong memories. We envision a world where travel is not just a luxury, but 
                                    an essential part of human experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Overview Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="section-title bg-white text-center text px-3" style={colorStyle}>What We Offer</h6>
                        <h2 className="mb-4">Comprehensive Travel Solutions</h2>
                        <p className="lead">From planning to execution, we handle every aspect of your journey</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4 border rounded h-100">
                                <i className="fa fa-globe fa-2x mb-3" style={colorStyle}></i>
                                <h5>Worldwide Tours</h5>
                                <p>Explore destinations across all continents with our expertly crafted tour packages.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4 border rounded h-100">
                                <i className="fa fa-hotel fa-2x mb-3" style={colorStyle}></i>
                                <h5>Luxury Accommodations</h5>
                                <p>Stay in handpicked hotels and resorts that offer comfort and authentic local experiences.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4 border rounded h-100">
                                <i className="fa fa-plane fa-2x mb-3" style={colorStyle}></i>
                                <h5>Flight Bookings</h5>
                                <p>Get the best deals on domestic and international flights with major airlines worldwide.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4 border rounded h-100">
                                <i className="fa fa-user fa-2x mb-3" style={colorStyle}></i>
                                <h5>Expert Guides</h5>
                                <p>Professional local guides to enhance your travel experience with insider knowledge.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4 border rounded h-100">
                                <i className="fa fa-suitcase-rolling fa-2x mb-3" style={colorStyle}></i>
                                <h5>Travel Packages</h5>
                                <p>Curated packages designed to provide the best value and unforgettable experiences.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4 border rounded h-100">
                                <i className="fa fa-people-group fa-2x mb-3" style={colorStyle}></i>
                                <h5>Group Travel</h5>
                                <p>Specialized solutions for family reunions, corporate retreats, and group adventures.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4 border rounded h-100">
                                <i className="fa fa-cog fa-2x mb-3" style={colorStyle}></i>
                                <h5>Event Management</h5>
                                <p>Complete event management for corporate meetings, conferences, and special occasions.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4 border rounded h-100">
                                <i className="fa fa-cc-visa fa-2x mb-3" style={colorStyle}></i>
                                <h5>Visa Services</h5>
                                <p>Complete visa assistance and documentation support for hassle-free international travel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container-xxl py-5" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="section-title bg-white text-center text px-3" style={colorStyle}>Why Choose Us</h6>
                        <h2 className="mb-4">What Makes Us Different</h2>
                        <p className="lead">We go beyond just booking trips - we create life-changing experiences</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="text-center p-4">
                                <div className="mb-3">
                                    <i className="fa fa-shield-alt fa-3x" style={colorStyle}></i>
                                </div>
                                <h5>Trusted & Reliable</h5>
                                <p>Licensed and insured with 5+ years of experience in creating memorable travel experiences. Your safety and satisfaction are our top priorities.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="text-center p-4">
                                <div className="mb-3">
                                    <i className="fa fa-users fa-3x" style={colorStyle}></i>
                                </div>
                                <h5>Expert Team</h5>
                                <p>Our passionate travel experts have personally visited every destination we offer. We bring first-hand knowledge and local insights to every trip.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="text-center p-4">
                                <div className="mb-3">
                                    <i className="fa fa-dollar-sign fa-3x" style={colorStyle}></i>
                                </div>
                                <h5>Best Price Guarantee</h5>
                                <p>We offer competitive prices with no hidden fees and flexible payment options. If you find a better price elsewhere, we'll match it.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="text-center p-4">
                                <div className="mb-3">
                                    <i className="fa fa-heart fa-3x" style={colorStyle}></i>
                                </div>
                                <h5>Personalized Service</h5>
                                <p>Every trip is customized to your preferences, budget, and travel style. We take the time to understand what makes your perfect vacation.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="text-center p-4">
                                <div className="mb-3">
                                    <i className="fa fa-headset fa-3x" style={colorStyle}></i>
                                </div>
                                <h5>24/7 Support</h5>
                                <p>Round-the-clock assistance before, during, and after your trip. We're always here to help, no matter where you are in the world.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="text-center p-4">
                                <div className="mb-3">
                                    <i className="fa fa-star fa-3x" style={colorStyle}></i>
                                </div>
                                <h5>Quality Assured</h5>
                                <p>We partner only with the finest hotels, airlines, and local service providers to ensure your experience exceeds expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="section-title bg-white text-center text px-3" style={colorStyle}>Our Values</h6>
                        <h2 className="mb-4">What We Stand For</h2>
                        <p className="lead">Our core values guide everything we do and every experience we create</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="text-center p-4">
                                <div className="mb-3">
                                    <i className="fa fa-globe-americas fa-3x" style={colorStyle}></i>
                                </div>
                                <h5>Sustainability</h5>
                                <p>We promote responsible tourism and work with eco-friendly accommodations and local communities. We believe in leaving destinations better than we found them.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center p-4">
                                <div className="mb-3">
                                    <i className="fa fa-handshake fa-3x" style={colorStyle}></i>
                                </div>
                                <h5>Integrity</h5>
                                <p>We maintain the highest standards of honesty, transparency, and ethical business practices. Trust is the foundation of every relationship we build.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center p-4">
                                <div className="mb-3">
                                    <i className="fa fa-lightbulb fa-3x" style={colorStyle}></i>
                                </div>
                                <h5>Innovation</h5>
                                <p>We continuously evolve our services and embrace new technologies to enhance your travel experience while maintaining the personal touch that makes us special.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            {/* <div className="container-xxl py-5" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="section-title bg-white text-center text px-3" style={colorStyle}>Testimonials</h6>
                        <h2 className="mb-4">What Our Travelers Say</h2>
                        <p className="lead">Real stories from real travelers who experienced the magic of Infinity Adventures</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                    </div>
                                    <p className="card-text mb-4">"Infinity Adventures made our honeymoon absolutely perfect! Every detail was taken care of, and we had the most amazing time in the Maldives. The team's attention to detail was incredible."</p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                                            <span className="text-white fw-bold">SM</span>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Sarah & Michael</h6>
                                            <small className="text-muted">Honeymoon Travelers</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                    </div>
                                    <p className="card-text mb-4">"The family trip to Thailand was incredible! The kids loved every moment, and the guides were fantastic. Highly recommended for families looking for adventure and culture."</p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                                            <span className="text-white fw-bold">JW</span>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Jennifer Wilson</h6>
                                            <small className="text-muted">Family Traveler</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                        <i className="fa fa-star" style={colorStyle}></i>
                                    </div>
                                    <p className="card-text mb-4">"As a solo traveler, I felt completely safe and supported throughout my journey. The team went above and beyond to ensure I had an amazing experience in Japan."</p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                                            <span className="text-white fw-bold">DC</span>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">David Chen</h6>
                                            <small className="text-muted">Solo Traveler</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Call to Action Section */}
            <div className="container-xxl py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="text-white mb-4">Ready to Start Your Adventure?</h2>
                            <p className="lead text-white mb-4">
                                Let us help you create the perfect travel experience. Contact us today and let's plan your next unforgettable journey.
                            </p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <a href="/contact" className="btn btn-light btn-lg">
                                    <i className="fa fa-phone me-2"></i>Get in Touch
                                </a>
                                <a href="/packages" className="btn btn-outline-light btn-lg">
                                    <i className="fa fa-compass me-2"></i>Explore Packages
                                </a>
                                <a href="/services" className="btn btn-outline-light btn-lg">
                                    <i className="fa fa-cogs me-2"></i>Our Services
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
