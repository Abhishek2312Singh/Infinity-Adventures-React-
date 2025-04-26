import React from 'react'
const setColor = {
    color : ' #34a4eb'
}
const setStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: '#34a4eb'
}
export default function Process() {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text px-3" style={setColor}>Process</h6>
                <h1 className="mb-5">3 Easy Steps</h1>
            </div>
            <div className="row gy-5 gx-4 justify-content-center">
                
                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={setStyle}>
                            <i className="fa fa-brands fa-whatsapp text-white " style={{fontSize: '60px'}}></i>
                        </div>
                        <h5 className="mt-4">Contact Us</h5>
                        <hr className="w-25 mx-auto bg-primary mb-1"/>
                        <hr className="w-50 mx-auto bg-primary mt-0"/>
                        <p className="mb-0">You can contact us via email and text and start exploring.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={setStyle}>
                            <i className="fa fa-globe fa-3x text-white"></i>
                        </div>
                        <h5 className="mt-4">Choose A Destination</h5>
                        <hr className="w-25 mx-auto bg-primary mb-1"/>
                        <hr className="w-50 mx-auto bg-primary mt-0"/>
                        <p className="mb-0">Choose your destination and plan your trip with us.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={setStyle}>
                            <i className="fa fa-plane fa-3x text-white"></i>
                        </div>
                        <h5 className="mt-4">Fly Today</h5>
                        <hr className="w-25 mx-auto bg-primary mb-1"/>
                        <hr className="w-50 mx-auto bg-primary mt-0"/>
                        <p className="mb-0">Explore the new destinations in the new world of enjoyment.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
