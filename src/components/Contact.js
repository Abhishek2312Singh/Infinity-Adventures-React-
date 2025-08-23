import React from 'react'
import { useEffect } from 'react'
export default function Contact() {
    const colorStyle = {
    color:'#34a4eb',
    backgroundColor: '#34a4eb'
}
    useEffect(()=>{
        document.title = 'Infinity Adventures - Contact'
    })
  return (
    <div>
          <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center px-3" style={colorStyle}>Contact Us</h6>
                <h1 className="mb-5">Contact For Any Query</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h5>Get In Touch</h5>
                    <p className="mb-4"  style={{color: 'rgb(91, 94, 95)'}}>We're Here to Help You Plan Your Dream Trip. <b  style={{color: 'rgba(0, 0, 0, 1)'}}>Let's Talk Travel</b>.</p>
                    <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{backgroundColor:"#34a4eb",width: '50px', height: '50px'}}>
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="" style={{color:"#34a4eb"}}>Office</h5>
                            <p className="mb-0"  style={{color: 'rgb(91, 94, 95)'}}>4068 B wing oberoi garden chandivali andheri east 400072</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{backgroundColor:"#34a4eb",width: '50px', height: '50px'}}>
                            <i className="fa fa-brands fa-whatsapp text-white " style={{fontSize: '25px'}}></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="" style={{color:"#34a4eb"}}>Mobile</h5>
                            <a href="https://api.whatsapp.com/send?phone=919920305057" target="_blank" className='hyper' style={{color:'rgb(91, 94, 95)'}}><p className="mb-0">+91 9920305057</p></a>
                            
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{backgroundColor:"#34a4eb",width: '50px', height: '50px'}}>
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="" style={{color:"#34a4eb"}}>Email</h5>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@infinityadventures.co.in" className='hyper' style={{color: 'rgb(91, 94, 95)'}} target="_blank">
                            <p className="mb-0">sales@infinityadventures.co.in</p>
                        </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}
