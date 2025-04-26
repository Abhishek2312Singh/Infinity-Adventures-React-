import React, { useState } from 'react'
import Logo1 from './images/logo-1.png'
import '../bg-hero.jpg'
import {Link} from 'react-router-dom'
// import { NavLink } from 'react-router-dom';


export default function Navbar() {
    const [isActive,setActive] = useState('/')
  return (
    <div>
       <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{height:45+'px'}}>
                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>4068 B wing oberoi garden chandivali andheri east 400072</small>
                    <Link to="https://api.whatsapp.com/send?phone=919920305057" target="_blank" className="hyper">
                    <small className="me-3"><i className="fa fa-brands fa-whatsapp text-white me-2"></i>+91 99203 05057</small>
                </Link>
                <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=sales@infinityadventures.co.in" target="_blank" className="hyper">
                    <small><i className="fa fa-envelope-open me-2"></i>sales@infinityadventures.co.in</small>
                </Link>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{height: 45+'px'}}>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to=""><i className="fab fa-twitter fw-normal"></i></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to=""><i className="fab fa-facebook-f fw-normal"></i></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to=""><i className="fab fa-linkedin-in fw-normal"></i></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://www.instagram.com/infinity.adventure_?igsh=Y3Y4eHExZWFmZXF1&utm_source=qr" target="_blank"><i className="fab fa-instagram fw-normal"></i></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" to=""><i className="fab fa-youtube fw-normal"></i></Link>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End -->


    <!-- Navbar & Hero Start --> */}
    <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <Link to="#" className="navbar-brand p-0">
                <img src={Logo1} style={{width: 120+'px', height:400+'px'}} alt="Logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="/" className={`nav-item nav-link ${isActive === '/' ? 'active' : ''}`} onClick={()=>setActive('/')}>Home</Link>
                    <Link to="/about" className={`nav-item nav-link ${isActive === '/about' ? 'active' : ''}`} onClick={()=>setActive('/about')}>About</Link>
                    <Link to="/services" className={`nav-item nav-link ${isActive === '/services' ? 'active' : ''}`} onClick={()=>setActive('/services')}>Services</Link>
                    <Link to="/packages" className={`nav-item nav-link ${isActive === '/packages' ? 'active' : ''}`} onClick={()=>setActive('/packages')}>Packages</Link>
                    <Link to="/contact" className={`nav-item nav-link ${isActive === '/contact' ? 'active' : ''}`} onClick={()=>setActive('/contact')}>Contact</Link>
                </div>
            </div>
        </nav>

    </div>
    </div>
  )
}
