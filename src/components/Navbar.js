import React, { useState } from "react";
import Logo1 from "./images/logo-1.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isActive, setActive] = useState("");
  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <nav
          className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 modern-navbar"
          style={{ backgroundColor: "white" }}
        >
          <Link to="#" className="navbar-brand p-0">
            <img
              src={Logo1}
              style={{ width: 160 + "px", height: 80 + "px", objectFit: "contain" }}
              alt="Logo"
              className="navbar-logo"
            />
          </Link>
          <button
            className="navbar-toggler modern-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <div className="nav-item">
                <Link
                  to="/"
                  className={`modern-nav-link ${
                    isActive === "/" ? "active" : ""
                  }`}
                  onClick={() => setActive("/")}
                >
                  <i className="fa fa-home me-1"></i>
                  <span>Home</span>
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="/about"
                  className={`modern-nav-link ${
                    isActive === "/about" ? "active" : ""
                  }`}
                  onClick={() => setActive("/about")}
                >
                  <i className="fa fa-info-circle me-1"></i>
                  <span>About</span>
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="/services"
                  className={`modern-nav-link ${
                    isActive === "/services" ? "active" : ""
                  }`}
                  onClick={() => setActive("/services")}
                >
                  <i className="fa fa-cogs me-1"></i>
                  <span>Services</span>
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="/packages"
                  className={`modern-nav-link ${
                    isActive === "/packages" ? "active" : ""
                  }`}
                  onClick={() => setActive("/packages")}
                >
                  <i className="fa fa-suitcase me-1"></i>
                  <span>Packages</span>
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="/contact"
                  className={`modern-nav-link ${
                    isActive === "/contact" ? "active" : ""
                  }`}
                  onClick={() => setActive("/contact")}
                >
                  <i className="fa fa-envelope me-1"></i>
                  <span>Contact</span>
                </Link>
              </div>
              <div className="nav-divider"></div>
              {/* <div className="nav-item">
                <Link
                  to="/login"
                  className={`modern-nav-link login-link ${
                    isActive === "/login" ? "active" : ""
                  }`}
                  onClick={() => setActive("/login")}
                >
                  <i className="fa fa-sign-in-alt me-1"></i>
                  <span>Login</span>
                </Link>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
