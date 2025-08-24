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
                    <div className="service-item rounded pt-3" style={{height:"180px"}}>
                        <div className="p-4">
                            <i className="fa fa-3x fa-cog text mb-4" style={setColor}></i>
                            <h5>Corporate Event Management</h5>
                            <p> </p>
                        </div>
                    </div>
                </div> 
                    <div class="col-lg-3 col-sm-6 wow fadeInUp"
                        data-wow-delay="0.1s">
                        <div class="service-item rounded pt-3" >
                            <div class="p-4">
                                <i
                                    class="fa-3x fa-solid fa-suitcase-rolling text mb-4"
                                    style={{color: "#34a4eb"}}></i>
                                <h5>Packages</h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp"
                        data-wow-delay="0.3s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i
                                    class="fa-3x fa-solid fa-people-group text mb-4"
                                    style={{color: "#34a4eb"}}></i>
                                <h5>MICE</h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp"
                        data-wow-delay="0.5s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa-3x fa-solid fa-plane text mb-4"
                                    style={{color: "#34a4eb"}}></i>
                                <h5>Flights</h5>
                                <p> </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp"
                        data-wow-delay="0.7s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa-3x fa-brands fa-cc-visa text mb-4"
                                    style={{color: "#34a4eb"}}></i>
                                <h5>Visa</h5>
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
