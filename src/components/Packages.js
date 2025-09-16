import React from 'react'
import { Link } from 'react-router-dom'

export default function Packages() {
    const setColor = {
        color : '#34a4eb'
    }
  return (
    <div>
      <div id="package-start" className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text px-3" style={setColor}>Packages</h6>
                <h1 className="mb-5">Domestic Packages</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/jammu.jpg" alt="Jammu and Kashmir"/>
                            <div className="package-badge">Popular</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Jammu and Kashmir</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>3 Days 4 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Jammu & Kashmir Adventure</h3>
                            <p className="package-description">Experience the breathtaking beauty of Kashmir with our carefully curated package.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹21,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/goa1.jpg" alt="Goa"/>
                            <div className="package-badge">Best Seller</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Goa</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>5 Days 6 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Goa Beach Paradise</h3>
                            <p className="package-description">Relax on pristine beaches and enjoy the vibrant nightlife of Goa.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹29,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/package-3.jpg" alt="Uttrakhand"/>
                            <div className="package-badge">Budget</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Uttrakhand</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>2 Days 3 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Uttrakhand Hills</h3>
                            <p className="package-description">Discover the serene beauty of the Himalayas in Uttrakhand.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹14,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row g-4 justify-content-center" style={{marginTop: '10px'}}>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/keralmunar.jpg" alt="Kerala Munnar"/>
                            <div className="package-badge">Premium</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Kerala Munnar</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>7 Days 6 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Kerala Munnar Hills</h3>
                            <p className="package-description">Experience the tea gardens and misty hills of Kerala's beautiful hill station.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹20,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/mumbai.jpg" alt="Mumbai"/>
                            <div className="package-badge">City Tour</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Mumbai</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>5 Days 4 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Mumbai City Explorer</h3>
                            <p className="package-description">Discover the vibrant city of Mumbai with its iconic landmarks and bustling markets.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹18,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/darjeeling.jpg" alt="Darjeeling"/>
                            <div className="package-badge">Hill Station</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Darjeeling</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>3 Days 2 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Darjeeling Tea Gardens</h3>
                            <p className="package-description">Enjoy the scenic beauty and famous tea gardens of Darjeeling hills.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹22,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mb-5">International Packages</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/thailand-1.jpg" alt="Thailand"/>
                            <div className="package-badge">Tropical</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Thailand</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>4 Days 3 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Thailand Adventure</h3>
                            <p className="package-description">Explore the vibrant culture, beautiful beaches, and delicious cuisine of Thailand.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹32,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/maldives-1.jpg" alt="Maldives"/>
                            <div className="package-badge">Luxury</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Maldives</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>4 Days 3 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Maldives Paradise</h3>
                            <p className="package-description">Experience the ultimate luxury in overwater bungalows and crystal clear waters.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹31,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/dubai-1.jpg" alt="Dubai"/>
                            <div className="package-badge">Premium</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Dubai</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>3 Days 4 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Dubai City of Gold</h3>
                            <p className="package-description">Discover the modern marvels and luxury shopping in the heart of the Middle East.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹51,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4 justify-content-center" style={{marginTop: '10px'}}>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/malasia-1.jpg" alt="Malaysia"/>
                            <div className="package-badge">Cultural</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Malaysia</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>4 Days 3 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Malaysia Cultural Tour</h3>
                            <p className="package-description">Experience the diverse culture, modern cities, and tropical rainforests of Malaysia.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹21,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/singapore-1.jpg" alt="Singapore"/>
                            <div className="package-badge">Modern</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Singapore</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>5 Days 4 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Singapore City State</h3>
                            <p className="package-description">Discover the futuristic city with its iconic landmarks, gardens, and world-class attractions.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹41,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="package-item-modern">
                        <div className="package-image-container">
                            <img className="img-fluid package-image" src="/vietnam-1.jpg" alt="Vietnam"/>
                            <div className="package-badge">Heritage</div>
                        </div>
                        <div className="package-info">
                            <div className="package-location">
                                <i className="fa fa-map-marker-alt me-2" style={setColor}></i>
                                <span>Vietnam</span>
                            </div>
                            <div className="package-duration">
                                <i className="fa fa-calendar-alt me-2" style={setColor}></i>
                                <span>6 Days 5 Nights</span>
                            </div>
                            <div className="package-people">
                                <i className="fa fa-user me-2" style={setColor}></i>
                                <span>Per Person</span>
                            </div>
                        </div>
                        <div className="package-content">
                            <h3 className="package-title">Vietnam Heritage Tour</h3>
                            <p className="package-description">Explore the rich history, stunning landscapes, and vibrant culture of Vietnam.</p>
                            <div className="package-price">
                                <span className="price-label">Starting from</span>
                                <span className="price-amount">₹80,999</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary package-btn">
                                <i className="fa fa-compass me-2"></i>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
