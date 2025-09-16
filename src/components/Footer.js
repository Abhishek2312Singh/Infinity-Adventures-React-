import React from 'react'
import {Link} from 'react-router-dom'
import India from "./images/india_call.svg";
import Dubai from "./images/dubai_call.jpg"

export default function Footer() {
  return (
    <>
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn modern-footer" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <div className="footer-section">
                        <h4 className="text-white mb-4">Company</h4>
                        <div className="footer-links">
                            <Link to="/about" className="footer-link">
                                <i className="fa fa-arrow-right me-2"></i>
                                About Us
                            </Link>
                            <Link to="/contact" className="footer-link">
                                <i className="fa fa-arrow-right me-2"></i>
                                Contact Us
                            </Link>
                            <Link to="/services" className="footer-link">
                                <i className="fa fa-arrow-right me-2"></i>
                                Our Services
                            </Link>
                            <Link to="/packages" className="footer-link">
                                <i className="fa fa-arrow-right me-2"></i>
                                Travel Packages
                            </Link>
                            <Link to="#" className="footer-link">
                                <i className="fa fa-arrow-right me-2"></i>
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-section">
                        <h4 className="text-white mb-4">Contact Info</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="fa fa-map-marker-alt me-3"></i>
                                <div>
                                    <p className="mb-0">402, Plot No.170, N D Garden Tower</p>
                                    <p className="mb-0">Sector 9, Ulwe Navi Mumbai</p>
                                    <p className="mb-0">(Maharashtra)-410206</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fa fa-phone me-3"></i>
                                <div>
                                    <Link to="https://api.whatsapp.com/send?phone=919920305057" target="_blank" className="contact-link">
                                        <img src={India} style={{width: "20px", height: "20px"}} className="me-2" alt="India"/>
                                        +91 99203 05057
                                    </Link>
                                    <br/>
                                    <Link to="#" className="contact-link">
                                        <img src={Dubai} style={{width: "20px", height: "15px", border: "1px solid white"}} className="me-2" alt="Dubai"/>
                                        +971 554591787
                                    </Link>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fa fa-envelope me-3"></i>
                                <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=sales@infinityadventures.co.in" target="_blank" className="contact-link">
                                    sales@infinityadventures.co.in
                                </Link>
                            </div>
                        </div>
                        <div className="social-links mt-4">
                            <h6 className="text-white mb-3">Follow Us</h6>
                            <div className="social-icons">
                                <Link to="https://www.instagram.com/infinity.adventure_?igsh=Y3Y4eHExZWFmZXF1&utm_source=qr" target="_blank" className="social-icon">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link to="https://api.whatsapp.com/send?phone=919920305057" target="_blank" className="social-icon">
                                    <i className="fab fa-whatsapp"></i>
                                </Link>
                                <Link to="https://www.facebook.com/share/1CmffzyeUz/?mibextid=wwXIfr" target="_blank" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to="https://youtube.com/@infinityadventures-v4h?si=q5XoCXztBTpX1KFN" target="_blank" className="social-icon">
                                    <i className="fab fa-youtube"></i>
                                </Link>
                                <Link to="https://www.linkedin.com/company/infinity-adventures-tour-and-travel/" target="_blank" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-section">
                        <h4 className="text-white mb-4">Gallery</h4>
                        <div className="gallery-grid">
                            <div className="gallery-item">
                                <img className="img-fluid" src={'/keralmunar.jpg'} alt="Kerala Munnar"/>
                                <div className="gallery-overlay">
                                    <i className="fa fa-search-plus"></i>
                                </div>
                            </div>
                            <div className="gallery-item">
                                <img className="img-fluid" src={'/goa1.jpg'} alt="Goa"/>
                                <div className="gallery-overlay">
                                    <i className="fa fa-search-plus"></i>
                                </div>
                            </div>
                            <div className="gallery-item">
                                <img className="img-fluid" src={'/dubai-1.jpg'} alt="Dubai"/>
                                <div className="gallery-overlay">
                                    <i className="fa fa-search-plus"></i>
                                </div>
                            </div>
                            <div className="gallery-item">
                                <img className="img-fluid" src={'/vietnam-1.jpg'} alt="Vietnam"/>
                                <div className="gallery-overlay">
                                    <i className="fa fa-search-plus"></i>
                                </div>
                            </div>
                            <div className="gallery-item">
                                <img className="img-fluid" src={'/uttrakhand.jpg'} alt="Uttrakhand"/>
                                <div className="gallery-overlay">
                                    <i className="fa fa-search-plus"></i>
                                </div>
                            </div>
                            <div className="gallery-item">
                                <img className="img-fluid" src={'/mumbai.jpg'} alt="Mumbai"/>
                                <div className="gallery-overlay">
                                    <i className="fa fa-search-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-section">
                        <h4 className="text-white mb-4">Newsletter</h4>
                        <p className="mb-4">Subscribe to our newsletter for the latest travel deals and updates.</p>
                        <div className="newsletter-form">
                            <div className="input-group">
                                <input type="email" className="form-control newsletter-input" placeholder="Enter your email"/>
                                <button className="btn btn-primary newsletter-btn" type="button">
                                    <i className="fa fa-paper-plane"></i>
                                </button>
                            </div>
                            <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                        <div className="footer-features mt-4">
                            <div className="feature-item">
                                <i className="fa fa-shield-alt me-2"></i>
                                <span>Secure Booking</span>
                            </div>
                            <div className="feature-item">
                                <i className="fa fa-headset me-2"></i>
                                <span>24/7 Support</span>
                            </div>
                            <div className="feature-item">
                                <i className="fa fa-award me-2"></i>
                                <span>Best Price Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0" style={{textAlign: 'center',margin:"auto", width:"454px"}}>
                        &copy; 2025 Copyright by  <Link className="border-bottom hyper" to="/">Infinity Adventures</Link>, All Right Reserved.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
