import React,{useEffect} from 'react'

export default function Services() {
    useEffect(()=>{
        document.title = "Infinity Adventures" ;
      })
    const setColor = {
        color : ' #34a4eb'
    }
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text px-3" style={setColor}>Services</h6>
                <h1 className="mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item-modern">
                        <div className="service-icon">
                            <i className="fa fa-globe"></i>
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
                            <i className="fa fa-hotel"></i>
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
                            <i className="fa fa-user"></i>
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
                            <i className="fa fa-cog"></i>
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
                            <i className="fa fa-suitcase-rolling"></i>
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
                            <i className="fa fa-people-group"></i>
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
                            <i className="fa fa-plane"></i>
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
                            <i className="fa fa-cc-visa"></i>
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
    </div>
  )
}
