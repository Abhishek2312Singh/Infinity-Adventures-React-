import React from 'react'
export default function PopularDestination() {
    const setColor = {
        color : ' #34a4eb'
    }
  return (
    <div>
       <div className="container-xxl py-5 destination" >
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text px-3" style={setColor}>Destination</h6>
                <h1 className="mb-5">Popular Destination</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <div className="destination-card-modern">
                                <a className="position-relative d-block overflow-hidden destination-link" href="">
                                    <img 
                                        className="img-fluid destination-image" 
                                        src="/uttrakhand.jpg" 
                                        alt="Uttrakhand"
                                    />
                                    <div className="destination-overlay">
                                        <div className="destination-content">
                                            <h4 className="destination-title">Uttrakhand</h4>
                                            <p className="destination-description">The Land of Gods</p>
                                            <div className="destination-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <div className="destination-card-modern">
                                <a className="position-relative d-block overflow-hidden destination-link" href="">
                                    <img 
                                        className="img-fluid destination-image" 
                                        src="/goa1.jpg" 
                                        alt="Goa"
                                    />
                                    <div className="destination-overlay">
                                        <div className="destination-content">
                                            <h4 className="destination-title">Goa</h4>
                                            <p className="destination-description">Beach Paradise</p>
                                            <div className="destination-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <div className="destination-card-modern">
                                <a className="position-relative d-block overflow-hidden destination-link" href="">
                                    <img 
                                        className="img-fluid destination-image" 
                                        src="/thailand-1.jpg" 
                                        alt="Thailand"
                                    />
                                    <div className="destination-overlay">
                                        <div className="destination-content">
                                            <h4 className="destination-title">Thailand</h4>
                                            <p className="destination-description">Tropical Paradise</p>
                                            <div className="destination-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <div className="row g-3">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.7s">
                            <div className="destination-card-modern">
                                <a className="position-relative d-block overflow-hidden destination-link" href="">
                                    <img 
                                        className="img-fluid destination-image" 
                                        src="/dubai-1.jpg" 
                                        alt="Dubai"
                                        style={{objectFit: 'cover'}}
                                    />
                                    <div className="destination-overlay">
                                        <div className="destination-content">
                                            <h4 className="destination-title">Dubai</h4>
                                            <p className="destination-description">City of Gold</p>
                                            <div className="destination-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.9s">
                            <div className="destination-card-modern">
                                <a className="position-relative d-block overflow-hidden destination-link" href="">
                                    <img 
                                        className="img-fluid destination-image" 
                                        src="/singapore-1.jpg" 
                                        alt="Singapore"
                                        style={{objectFit: 'cover'}}
                                    />
                                    <div className="destination-overlay">
                                        <div className="destination-content">
                                            <h4 className="destination-title">Singapore</h4>
                                            <p className="destination-description">Garden City</p>
                                            <div className="destination-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
