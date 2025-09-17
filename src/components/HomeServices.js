import React from 'react'

export default function HomeServices() {
    const setColor = {
        color : ' #34a4eb'
    }
    const ColorWhite = {
        color: 'white',
        fontSize: '30px'
    }
  return (
    <div>
      {/* Main Services Section - No Hero Section for Home Page */}
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text px-3" style={setColor}>Core Services</h6>
                <h1 className="mb-5">What We Offer</h1>
                <p className="lead mb-5">Discover our wide range of travel services designed to make your journey unforgettable</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item-modern">
                        <div className="service-icon">
                            <i className="fa fa-globe" style={ColorWhite}></i>
                        </div>
                        <div className="service-content">
                            <h5>WorldWide Tours</h5>
                            <p>Explore the world with our comprehensive tour packages to destinations across the globe.</p>
                            <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item-modern">
                        <div className="service-icon">
                            <i className="fa fa-hotel" style={ColorWhite}></i>
                        </div>
                        <div className="service-content">
                            <h5>Hotel Reservation</h5>
                            <p>Book premium accommodations with our extensive network of partner hotels worldwide.</p>
                            <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item-modern">
                        <div className="service-icon">
                            <i className="fa fa-user" style={ColorWhite}></i>
                        </div>
                        <div className="service-content">
                            <h5>Travel Guides</h5>
                            <p>Professional local guides to enhance your travel experience with insider knowledge.</p>
                            <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item-modern">
                        <div className="service-icon">
                            <i className="fa fa-cog" style={ColorWhite}></i>
                        </div>
                        <div className="service-content">
                            <h5>Corporate Events</h5>
                            <p>Complete event management solutions for corporate meetings, conferences, and retreats.</p>
                            <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item-modern">
                        <div className="service-icon">
                            <i className="fa fa-suitcase-rolling" style={ColorWhite}></i>
                        </div>
                        <div className="service-content">
                            <h5>Travel Packages</h5>
                            <p>Curated travel packages designed to provide the best value and unforgettable experiences.</p>
                            <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item-modern">
                        <div className="service-icon">
                            <i className="fa fa-people-group" style={ColorWhite}></i>
                        </div>
                        <div className="service-content">
                            <h5>MICE Tourism</h5>
                            <p>Meetings, Incentives, Conferences, and Exhibitions - specialized business travel solutions.</p>
                            <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item-modern">
                        <div className="service-icon">
                            <i className="fa fa-plane" style={ColorWhite}></i>
                        </div>
                        <div className="service-content">
                            <h5>Flight Booking</h5>
                            <p>Best deals on domestic and international flights with major airlines worldwide.</p>
                            <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item-modern">
                        <div className="service-icon">
                            <i className="fa fa-cc-visa" style={ColorWhite}></i>
                        </div>
                        <div className="service-content">
                            <h5>Visa Services</h5>
                            <p>Complete visa assistance and documentation support for hassle-free international travel.</p>
                            <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text px-3" style={setColor}>Specialized Services</h6>
            
            <h1 className="mb-5">Premium Travel Solutions</h1>
            <p className="lead mb-5">Tailored services for discerning travelers and corporate clients</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item-modern">
                <div className="service-icon">
                  <i className="fa fa-crown" style={ColorWhite}></i>
                </div>
                <div className="service-content">
                  <h5>Luxury Travel</h5>
                  <p>Exclusive luxury travel experiences with premium accommodations, private transfers, and personalized concierge services.</p>
                  <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item-modern">
                <div className="service-icon">
                  <i className="fa fa-heart" style={ColorWhite}></i>
                </div>
                <div className="service-content">
                  <h5>Honeymoon Packages</h5>
                  <p>Romantic getaways and honeymoon packages to the world's most beautiful destinations for your special moments.</p>
                  <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item-modern">
                <div className="service-icon">
                  <i className="fa fa-mountain" style={ColorWhite}></i>
                </div>
                <div className="service-content">
                  <h5>Adventure Tours</h5>
                  <p>Thrilling adventure tours including trekking, water sports, and extreme activities for adrenaline seekers.</p>
                  <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item-modern">
                <div className="service-icon">
                  <i className="fa fa-graduation-cap" style={ColorWhite}></i>
                </div>
                <div className="service-content">
                  <h5>Educational Tours</h5>
                  <p>Educational and cultural tours designed for students and groups to learn about different cultures and histories.</p>
                  <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
              <div className="service-item-modern">
                <div className="service-icon">
                  <i className="fa fa-umbrella-beach" style={ColorWhite}></i>
                </div>
                <div className="service-content">
                  <h5>Beach Resorts</h5>
                  <p>Exclusive beach resort packages with all-inclusive amenities and water activities in tropical paradises.</p>
                  <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.1s">
              <div className="service-item-modern">
                <div className="service-icon">
                  <i className="fa fa-camera" style={ColorWhite}></i>
                </div>
                <div className="service-content">
                  <h5>Photography Tours</h5>
                  <p>Specialized photography tours with professional guides to capture the most stunning landscapes and moments.</p>
                  <a href="#" className="service-link">Learn More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Our Services Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text px-3" style={setColor}>Why Choose Us</h6>
            <h1 className="mb-5">Our Service Advantages</h1>
            <p className="lead mb-5">What makes our travel services stand out from the competition</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-start">
                <div className="service-icon me-3" style={{width: '60px', height: '60px', flexShrink: 0}}>
                  <i className="fa fa-shield-alt" style={ColorWhite}></i>
                </div>
                <div>
                  <h5>24/7 Support</h5>
                  <p>Round-the-clock customer support to assist you during your travels, ensuring peace of mind throughout your journey.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex align-items-start">
                <div className="service-icon me-3" style={{width: '60px', height: '60px', flexShrink: 0}}>
                  <i className="fa fa-dollar-sign" style={ColorWhite}></i>
                </div>
                <div>
                  <h5>Best Price Guarantee</h5>
                  <p>We guarantee the best prices for all our services. If you find a better deal elsewhere, we'll match it.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="d-flex align-items-start">
                <div className="service-icon me-3" style={{width: '60px', height: '60px', flexShrink: 0}}>
                  <i className="fa fa-users" style={ColorWhite}></i>
                </div>
                <div>
                  <h5>Expert Team</h5>
                  <p>Our experienced travel experts have extensive knowledge of destinations worldwide to create perfect itineraries.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="d-flex align-items-start">
                <div className="service-icon me-3" style={{width: '60px', height: '60px', flexShrink: 0}}>
                  <i className="fa fa-clock" style={ColorWhite}></i>
                </div>
                <div>
                  <h5>Flexible Booking</h5>
                  <p>Flexible booking options with easy modifications and cancellations to accommodate your changing plans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Process Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text px-3" style={setColor}>Our Process</h6>
            <h1 className="mb-5">How We Work</h1>
            <p className="lead mb-5">Simple steps to plan your perfect trip with us</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="text-center">
                <div className="service-icon mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fa fa-search" style={ColorWhite}></i>
                </div>
                <h5>1. Consultation</h5>
                <p>We discuss your travel preferences, budget, and requirements to understand your needs.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="text-center">
                <div className="service-icon mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fa fa-map-marked-alt" style={ColorWhite}></i>
                </div>
                <h5>2. Planning</h5>
                <p>Our experts create a detailed itinerary tailored to your preferences and interests.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="text-center">
                <div className="service-icon mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fa fa-calendar-check" style={ColorWhite}></i>
                </div>
                <h5>3. Booking</h5>
                <p>We handle all bookings including flights, hotels, activities, and transportation.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="text-center">
                <div className="service-icon mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fa fa-plane-departure" style={ColorWhite}></i>
                </div>
                <h5>4. Travel</h5>
                <p>Enjoy your trip with our continuous support and assistance throughout your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
