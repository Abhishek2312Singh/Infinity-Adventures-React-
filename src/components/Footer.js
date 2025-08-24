import React from 'react'
import {Link} from 'react-router-dom'
import India from "./images/india_call.svg";
import Dubai from "./images/dubai_call.jpg"

export default function Footer() {
  return (
    <>
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6" >
                    <h4 className="text-white mb-3">Company</h4>
                    <Link style={{textDecoration:"none"}} className="btn btn-link" to="/about">About Us</Link>
                    <Link style={{textDecoration:"none"}} className="btn btn-link" to="/contact">Contact Us</Link>
                    <Link style={{textDecoration:"none"}} className="btn btn-link" to="">Terms & Condition</Link> 
                </div>
                <div className="col-lg-3 col-md-10">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>402, Plot
                            No.170, N D Garden Tower, Sector 9, Ulwe Navi Mumbai
                            (Maharashtra)-410206</p>
                    <div style={{marginBottom:"10px"}}>
                    <Link to="https://api.whatsapp.com/send?phone=919920305057" target="_blank" className="hyper" style={{display:"block", marginBottom:"3px"}}>
                                <small class="me-3">
                                    <img src={India}
                                        style={{width: "20px",
                                    height: "20px", color: "white"}} class="me-1"
                                        alt/>+91
                                    99203 05057</small>
                                    
                   </Link>
                            <Link to="" className='hyper'>
                                <small class="me-3" style={{color: "white"}}>
                                    <img src={Dubai}
                                        style={{width: "20px",height: "15px", border: "1px solid white"}}
                                        class="me-1" alt/>+971 554591787
                                </small>
                            </Link>
             </div>
                    <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=sales@infinityadventures.co.in" target="_blank"  style={{marginTop:"10px"}} className="hyper">
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>sales@infinityadventures.co.in</p></Link>
                    <div className="d-flex pt-2">
                        <Link className="btn btn-sm btn-outline-light btn-social btn-sm-square rounded-circle me-2" to="https://www.instagram.com/infinity.adventure_?igsh=Y3Y4eHExZWFmZXF1&utm_source=qr" target="_blank"><i className="fab fa-instagram fw-normal"></i></Link>
                        <Link className="btn btn-outline-light btn-social" to="https://api.whatsapp.com/send?phone=919920305057" target='_blank'><i className="fa fa-brands fa-whatsapp"></i></Link>
                        <Link className="btn btn-outline-light btn-social" to="https://www.facebook.com/share/1CmffzyeUz/?mibextid=wwXIfr" target='_blank'><i className="fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-outline-light btn-social" to="https://youtube.com/@infinityadventures-v4h?si=q5XoCXztBTpX1KFN" target='_blank'><i className="fab fa-youtube" target='_blank'></i></Link>
                        <Link className="btn btn-outline-light btn-social" to="https://www.linkedin.com/company/infinity-adventures-tour-and-travel/" target='_blank'><i className="fab fa-linkedin-in"></i></Link>
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
