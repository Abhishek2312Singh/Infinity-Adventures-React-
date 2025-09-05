import React, { useState } from "react";
import { useEffect } from "react";
export default function Contact() {
    const [firstName,setFirstName] = useState("")
     const [lastName,setLastName] = useState("") 
     const [email,setEmail] =useState("")   
     const [contact,setContact] = useState("")
     const [checkOutDate,setCheckOutDate] = useState("")
     const [checkInDate,setCheckInDate] = useState("")
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
        
        // First name validation
        if (!firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
        
        // Last name validation
        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required";
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
            newErrors.contact = "Contact number must be valid";
        }
        
        // Check-in date validation
        if (!checkInDate) {
            newErrors.checkInDate = "Check-in date is required";
        }
        
        // Check-out date validation
        // if (!checkOutDate) {
        //     newErrors.checkOutDate = "Check-out date is required";
        // } else if (checkInDate && checkOutDate && new Date(checkOutDate) <= new Date(checkInDate)) {
        //     newErrors.checkOutDate = "Check-out date must be after check-in date";
        // }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
     }
     const handle =async (e)=>{
        e.preventDefault()
        
        // Clear previous errors
        setErrors({});
        setIsValidating(true);
        
        // Validate form
        if (!validateForm()) {
            setIsValidating(false);
            return;
        }
        
        const data = {
        firstName,
        lastName,
        contact,
        email,
        checkOutDate,
        checkInDate
     };
     try{
        const response = await fetch("http://localhost:80/form/add",{
            method : "Post",
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(data),
        });
        const result = await response.text();
        
        // Show popup with result
        setPopupData(result);
        setIsSuccess(response.ok);
        setShowPopup(true);
        
        // Clear form only on success
        if (response.ok) {
            setFirstName("")
            setLastName("")
            setContact("")
            setEmail("")
            setCheckOutDate("")
            setCheckInDate("")
        }
        
        console.log(JSON.stringify(data));
     }catch(e){
        console.error("Error:",e);
        setPopupData(`Error: ${e.message}`);
        setIsSuccess(false);
        setShowPopup(true);
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
                    4068 B wing oberoi garden chandivali andheri east 400072
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
                  <h5 className="" style={{ color: "#34a4eb" }}>
                    Mobile
                  </h5>
                  <a
                    href="https://api.whatsapp.com/send?phone=919920305057"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hyper"
                    style={{ color: "rgb(91, 94, 95)" }}
                  >
                    <p className="mb-0">+91 9920305057</p>
                  </a>
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
                  <h5 className="" style={{ color: "#34a4eb" }}>
                    Email
                  </h5>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@infinityadventures.co.in"
                    className="hyper"
                    rel="noopener noreferrer"
                    style={{ color: "rgb(91, 94, 95)" }}
                    target="_blank"
                  >
                    <p className="mb-0">sales@infinityadventures.co.in</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.1s" style={{display:"inline", width:"500px"}}>
            <form className="container mx-auto" method="post" onSubmit={handle} style={{marginTop:"-25px", maxWidth: "600px" }}>
              <div className="mt-5 row">
                <label className="form-label">Name :-</label>
                <div  className="col">
                  <input
                    type="text"
                     className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    placeholder="First name"
                    aria-label="First name"
                    id="firstName"
                    value={firstName}
                    onChange={(e)=>{
                      setFirstName(e.target.value);
                      if (errors.firstName) {
                        setErrors(prev => ({ ...prev, firstName: '' }));
                      }
                    }}
                    required
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                <div  className="col">
                  <input
                    type="text"
                     className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    placeholder="Last name"
                    aria-label="Last name"
                    id="lastName"
                    value={lastName}
                    onChange={(e)=>{
                      setLastName(e.target.value);
                      if (errors.lastName) {
                        setErrors(prev => ({ ...prev, lastName: '' }));
                      }
                    }}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="name" className="form-label">
                  Contact Number :-
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                  id="contact"
                  placeholder="Enter your 10-digit contact number"
                  required
                  value={contact}
                  onChange={(e)=>{
                    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                    setContact(value);
                    if (errors.contact) {
                      setErrors(prev => ({ ...prev, contact: '' }));
                    }
                  }}
                  maxLength="10"
                />
                {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
              </div>
              <div className="mt-3">
                <label htmlFor="email" className="form-label">
                  Email address :-
                </label>
                <input
                required
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value);
                    if (errors.email) {
                      setErrors(prev => ({ ...prev, email: '' }));
                    }
                  }}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mt-3">
                <label htmlFor="destination" className="form-label">
                  Destination :-
                </label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="destination"
                  placeholder="e.g., Manali, Goa, Bali"
                /> */}
              </div>

              <div className="d-flex flex-wrap gap-3 mt-3">
                {/* Check-in */}
                <div className="d-flex flex-column">
                  <label htmlFor="checkInDate" className="form-label">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    className={`form-control ${errors.checkInDate ? 'is-invalid' : ''}`}
                    id="checkInDate"
                    required
                    value={checkInDate}
                    onChange={(e)=>{
                      setCheckInDate(e.target.value);
                      if (errors.checkInDate) {
                        setErrors(prev => ({ ...prev, checkInDate: '' }));
                      }
                    }}
                  />
                  {errors.checkInDate && <div className="invalid-feedback">{errors.checkInDate}</div>}
                </div>

                {/* Check-out */}
                <div className="d-flex flex-column">
                  <label htmlFor="checkOutDate" className="form-label">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    className={`form-control ${errors.checkOutDate ? 'is-invalid' : ''}`}
                    id="checkOutDate"
                    value={checkOutDate}
                    onChange={(e)=>{
                      setCheckOutDate(e.target.value);
                      if (errors.checkOutDate) {
                        setErrors(prev => ({ ...prev, checkOutDate: '' }));
                      }
                    }}
                  />
                  {errors.checkOutDate && <div className="invalid-feedback">{errors.checkOutDate}</div>}
                </div>
              </div>

              <button 
                type="submit"  
                className="btn btn-primary mt-3"
                disabled={isValidating}
                style={{ 
                  opacity: isValidating ? 0.6 : 1,
                  cursor: isValidating ? 'not-allowed' : 'pointer'
                }}
              >
                {isValidating ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div className="popup-content" style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <button 
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
            
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: isSuccess ? '#28a745' : '#dc3545',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '30px',
                color: 'white'
              }}>
                {isSuccess ? '✓' : '✗'}
              </div>
              <h4 style={{ 
                color: isSuccess ? '#28a745' : '#dc3545',
                marginBottom: '10px'
              }}>
                {isSuccess ? 'Success!' : 'Error!'}
              </h4>
            </div>
            
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '15px',
              borderRadius: '5px',
              border: `1px solid ${isSuccess ? '#d4edda' : '#f5c6cb'}`,
              marginBottom: '20px'
            }}>
              <p style={{ 
                margin: 0, 
                color: '#333',
                wordBreak: 'break-word'
              }}>
                {popupData}
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={closePopup}
                style={{
                  backgroundColor: '#34a4eb',
                  color: 'white',
                  border: 'none',
                  padding: '10px 30px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#34a4eb'}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
