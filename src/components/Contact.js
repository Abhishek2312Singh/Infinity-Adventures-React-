import React, { useState } from "react";
import { useEffect } from "react";
export default function Contact() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")   
    const [contact, setContact] = useState("")
    const [message, setMessage] = useState("")
    const [showPopup, setShowPopup] = useState(false)
    const [popupData, setPopupData] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const [errors, setErrors] = useState({})
    const [isValidating, setIsValidating] = useState(false)

     // Validation functions
     const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
     }

     const validateMobile = (mobile) => {
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
     }

     const validateForm = () => {
        const newErrors = {};
        
        // Full name validation
        if (!fullName.trim()) {
            newErrors.fullName = "Full name is required";
        } else if (fullName.trim().length < 2) {
            newErrors.fullName = "Full name must be at least 2 characters";
        } else if (fullName.trim().length > 50) {
            newErrors.fullName = "Full name must be no more than 50 characters";
        } else if (!/^[a-zA-Z\s]+$/.test(fullName.trim())) {
            newErrors.fullName = "Full name must contain only letters and spaces";
        }
        
        // Email validation
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        // Mobile validation
        if (!contact.trim()) {
            newErrors.contact = "Contact number is required";
        } else if (!validateMobile(contact)) {
            newErrors.contact = "Please enter a valid 10-digit phone number";
        }
        
        // Message validation - removed
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
     }

     // Individual field validation function
     const validateField = (fieldName) => {
        const newErrors = { ...errors };
        
        switch (fieldName) {
            case 'fullName':
                if (!fullName.trim()) {
                    newErrors.fullName = "Full name is required";
                } else if (fullName.trim().length < 2) {
                    newErrors.fullName = "Full name must be at least 2 characters";
                } else if (fullName.trim().length > 50) {
                    newErrors.fullName = "Full name must be no more than 50 characters";
                } else if (!/^[a-zA-Z\s]+$/.test(fullName.trim())) {
                    newErrors.fullName = "Full name must contain only letters and spaces";
                } else {
                    delete newErrors.fullName;
                }
                break;
            case 'email':
                if (!email.trim()) {
                    newErrors.email = "Email is required";
                } else if (!validateEmail(email)) {
                    newErrors.email = "Please enter a valid email address";
                } else {
                    delete newErrors.email;
                }
                break;
            case 'contact':
                if (!contact.trim()) {
                    newErrors.contact = "Contact number is required";
                } else if (!validateMobile(contact)) {
                    newErrors.contact = "Please enter a valid 10-digit phone number";
                } else {
                    delete newErrors.contact;
                }
                break;
            case 'message':
                // Message validation removed
                delete newErrors.message;
                break;
        }
        
        setErrors(newErrors);
        return !newErrors[fieldName];
     }
     const handle = async (e) => {
        e.preventDefault();
        
        // Clear previous errors
        setErrors({});
        setIsValidating(true);
        
        // Validate form
        if (!validateForm()) {
            setIsValidating(false);
            return;
        }
        
        const data = {
            fullName: fullName.trim(),
            contact: contact.trim(),
            email: email.trim(),
            message: message.trim()
        };
        
        try {
            const response = await fetch('https://www.infinityadventures.co.in/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include', // Important for cookies if needed
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Success - check content type first
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const result = await response.json();
                    setPopupData(result.message || 'Message sent successfully! We will get back to you soon.');
                } else {
                    const result = await response.text();
                    setPopupData(result || 'Message sent successfully! We will get back to you soon.');
                }
                setIsSuccess(true);
                setShowPopup(true);
                // Clear form on success
                setFullName("");
                setContact("");
                setEmail("");
                setMessage("");
                // Auto-hide success message after 5 seconds
                setTimeout(() => {
                    setShowPopup(false);
                }, 5000);
            } else {
                // Error - check content type first
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    setPopupData(errorData.message || 'Failed to send message. Please try again.');
                } else {
                    const errorText = await response.text();
                    setPopupData(errorText || 'Failed to send message. Please try again.');
                }
                setIsSuccess(false);
                setShowPopup(true);
            }
        } catch (error) {
            // Network or other error
            setPopupData('Unable to connect to server. Please check your connection and try again.');
            setIsSuccess(false);
            setShowPopup(true);
            console.error('Error:', error);
        } finally {
            setIsValidating(false);
        }
     }

     const closePopup = () => {
        setShowPopup(false);
        setPopupData("");
     }

  const colorStyle = {
    color: "#34a4eb",
    backgroundColor: "#34a4eb",
  };
  useEffect(() => {
    document.title = "Infinity Adventures - Contact";
  });
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6
              className="section-title bg-white text-center px-3"
              style={colorStyle}
            >
              Contact Us
            </h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4" style={{display:"flex",justifyContent:"space-evenly"}}>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h5>Get In Touch</h5>
              <p className="mb-4" style={{ color: "rgb(91, 94, 95)" }}>
                We're Here to Help You Plan Your Dream Trip.{" "}
                <b style={{ color: "rgba(0, 0, 0, 1)" }}>Let's Talk Travel</b>.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    backgroundColor: "#34a4eb",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <i className="fa fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="" style={{ color: "#34a4eb" }}>
                    Office
                  </h5>
                  <p className="mb-0" style={{ color: "rgb(91, 94, 95)" }}>
                    402, Plot No.170, N D Garden Tower, Sector 9, Ulwe Navi Mumbai (Maharashtra)-410206
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    backgroundColor: "#34a4eb",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <i
                    className="fa fa-brands fa-whatsapp text-white "
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
                <div className="ms-3">
                  <a href="https://api.whatsapp.com/send?phone=919920305057" target="_blank" style={{textDecoration: "none"}}>
                    <h5 className="" style={{ color: "#34a4eb" }}>
                      Mobile
                    </h5>
                  </a>
                  <div className="row" style={{width: "200px", marginTop: "-10px"}}>
                    <a href="https://api.whatsapp.com/send?phone=919920305057" target="_blank" style={{color: "#808B8D", marginBottom: "3px", textDecoration: "none"}}>
                      <img src="/india_call.svg" style={{width: "20px", height: "20px", marginRight: "5px"}} alt="India" onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline';}} />
                      <span style={{display: 'none', color: "#FF9933", marginRight: "5px", fontWeight: "bold"}}>🇮🇳</span>  +91 9920305057
                    </a>
                    <a href="" target="_blank" style={{color: "#808B8D", textDecoration: "none"}}>
                      <img src="/dubai_call.svg" style={{width: "20px", height: "15px", marginRight: "5px"}} alt="Dubai" onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline';}} />
                      <span style={{display: 'none', color: "#00A651", marginRight: "5px", fontWeight: "bold"}}>🇦🇪</span>  +971 554591787
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    backgroundColor: "#34a4eb",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ms-3">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@infinityadventures.co.in" target="_blank" style={{textDecoration: "none"}}>
                    <h5 className="" style={{ color: "#34a4eb" }}>
                      Email
                    </h5>
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@infinityadventures.co.in" style={{color: "#808B8D", textDecoration: "none"}} target="_blank">
                    <p className="mb-0">sales@infinityadventures.co.in</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="contact-form h-100 p-5">
                <h4>Send us a Message</h4>
                <form id="contactForm" onSubmit={handle}>
                  <div className="row g-4">
                    <div className="col-12 col-sm-6">
                      <div className="form-floating">
                        <input 
                          type="text" 
                          className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} 
                          id="fullName" 
                          name="fullName" 
                          placeholder="Your Name" 
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) {
                              setErrors(prev => ({ ...prev, fullName: '' }));
                            }
                          }}
                          onBlur={() => {
                            if (fullName.trim()) {
                              validateField('fullName');
                            }
                          }}
                          required 
                        />
                        <label htmlFor="fullName">Full Name</label>
                        {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-floating">
                        <input 
                          type="tel" 
                          className={`form-control ${errors.contact ? 'is-invalid' : ''}`} 
                          id="contact" 
                          name="contact" 
                          placeholder="1234567890" 
                          maxLength="10" 
                          value={contact}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                            setContact(value);
                            if (errors.contact) {
                              setErrors(prev => ({ ...prev, contact: '' }));
                            }
                          }}
                          onBlur={() => {
                            if (contact.trim()) {
                              validateField('contact');
                            }
                          }}
                          required 
                        />
                        <label htmlFor="contact">Contact Number</label>
                        {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input 
                          type="email" 
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                          id="email" 
                          name="email" 
                          placeholder="Your Email" 
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) {
                              setErrors(prev => ({ ...prev, email: '' }));
                            }
                          }}
                          onBlur={() => {
                            if (email.trim()) {
                              validateField('email');
                            }
                          }}
                          required 
                        />
                        <label htmlFor="email">Email Address</label>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea 
                          className="form-control" 
                          placeholder="Leave a message here" 
                          id="message" 
                          name="message" 
                          style={{height: "120px"}} 
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        ></textarea>
                        <label htmlFor="message">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button 
                        className="btn btn-submit w-100" 
                        type="submit" 
                        id="submitBtn"
                        disabled={isValidating}
                        style={{ 
                          opacity: isValidating ? 0.6 : 1,
                          cursor: isValidating ? 'not-allowed' : 'pointer'
                        }}
                      >
                        <i className="fa fa-paper-plane me-2"></i>
                        <span id="btnText">{isValidating ? 'Sending...' : 'Send Message'}</span>
                      </button>
                    </div>
                    <div className="col-12" id="messageContainer" style={{display: showPopup ? 'block' : 'none'}}>
                      <div id="alertMessage" className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`} role="alert">
                        {popupData}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
