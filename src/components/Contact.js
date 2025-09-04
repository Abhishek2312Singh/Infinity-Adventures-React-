import React, { useState } from "react";
import { useEffect } from "react";
export default function Contact() {
    const [firstName,setFirstName] = useState("")
     const [lastName,setLastName] = useState("") 
     const [email,setEmail] =useState("")   
     const [contact,setContact] = useState("")
     const [checkOutDate,setCheckOutDate] = useState("")
     const [checkInDate,setCheckInDate] = useState("")

     const handle =async (e)=>{
        e.preventDefault()
        
        const data = {
        firstName,
        lastName,
        contact,
        email,
        checkOutDate,
        checkInDate
     };
     try{
        const response = await fetch("http://13.60.11.106:8080/form/add",{
            method : "Post",
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(data),
        });
        const result = await response.text();
        console.log(JSON.stringify(data));
        alert(result);
     }catch(e){
        console.error("Error:",e);
        alert(e)
     }

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
                <label className="form-label">Full Name</label>
                <div  className="col">
                  <input
                    type="text"
                     className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    id="firstName"
                    value={firstName}
                    onChange={(e)=>{setFirstName(e.target.value)}}
                    required
                  />
                </div>
                <div  className="col">
                  <input
                    type="text"
                     className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    id="lastName"
                    value={lastName}
                    onChange={(e)=>{setLastName(e.target.value)}}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="name" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  placeholder=""
                  required
                  value={contact}
                  onChange={(e)=>{setContact(e.target.value)}}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                required
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
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
                    className="form-control"
                    id="checkInDate"
                    required
                    value={checkInDate}
                    onChange={(e)=>{setCheckInDate(e.target.value)}}
                  />
                </div>

                {/* Check-out */}
                <div className="d-flex flex-column">
                  <label htmlFor="checkOutDate" className="form-label">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="checkOutDate"
                    value={checkOutDate}
                    onChange={(e)=>{setCheckOutDate(e.target.value)}}
                  />
                </div>
              </div>

              <button type="submit"  className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
