import React,{useEffect} from 'react'

export default function Services() {
    useEffect(()=>{
        document.title = "Infinity Adventures" ;
      })
    const setColor = {
        color : ' #34a4eb'
    }
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text px-3" style={setColor}>Services</h6>
                <h1 className="mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe text mb-4" style={setColor}></i>
                            <h5>WorldWide Tours</h5>
                            <p></p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-hotel text mb-4" style={setColor}></i>
                            <h5>Hotel Reservation</h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-user text mb-4" style={setColor}></i>
                            <h5>Travel Guides</h5>
                            <p> </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-cog text mb-4" style={setColor}></i>
                            <h5>Event Management</h5>
                            <p> </p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    </div>
  )
}
