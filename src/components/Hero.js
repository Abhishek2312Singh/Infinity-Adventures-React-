import React from 'react'

import { Link } from 'react-router-dom'

export default function Hero(props) {
  return (
    <div className="container-fluid position-relative p-0">
      <div className="container-fluid py-5 mb-5 hero-header-modern">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <div className="hero-content">
                <h1 className="display-3 text-white mb-4 animated slideInDown hero-title">
                  {props.data}
                </h1>
                <p className="fs-4 text-white mb-5 animated slideInDown hero-subtitle">
                  {props.tagLine}
                </p>
                <div className="hero-buttons animated slideInDown">
                  <Link to="/packages" className="btn btn-primary btn-lg me-3 hero-btn-primary">
                    <i className="fa fa-compass me-2"></i>
                    Explore Now
                  </Link>
                  <Link to="/about" className="btn btn-outline-light btn-lg hero-btn-secondary">
                    <i className="fa fa-info-circle me-2"></i>
                    Learn More
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
