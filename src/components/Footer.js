import React from 'react'
// import '../style.css'

export default function Footer() {
  return (
    <>
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Company</h4>
                    <a className="btn btn-link" href="about.html">About Us</a>
                    <a className="btn btn-link" href="contact.html">Contact Us</a>
                    <a className="btn btn-link" href="">Terms & Condition</a> 
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>4068 B wing oberoi garden chandivali andheri east 400072</p>
                    <a href="https://api.whatsapp.com/send?phone=919920305057" target="_blank" className="hyper">
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 99203 05057</p>
                </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@infinityadventures.co.in" target="_blank" className="hyper">
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>sales@infinityadventures.co.in</p></a>
                    <div className="d-flex pt-2">
                        <a className="btn btn-sm btn-outline-light btn-social btn-sm-square rounded-circle me-2" href="https://www.instagram.com/infinity.adventure_?igsh=Y3Y4eHExZWFmZXF1&utm_source=qr" target="_blank"><i className="fab fa-instagram fw-normal"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Gallery</h4>
                    <div className="row g-2 pt-2">
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={'/keralmunar.jpg'} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={'/goa1.jpg'} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={'/dubai-1.jpg'} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={'/vietnam-1.jpg'} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={'/uttrakhand.jpg'} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={'/mumbai.jpg'} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Coming Soon</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0" style={{margin: 'auto'}}>
                        &copy; <a className="border-bottom hyper" href="#">Infinity Adventures</a>, All Right Reserved.
                        Designed By Abhishek Singh<a className="border-bottom" href="https://htmlcodex.com" hidden>HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
