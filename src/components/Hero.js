import React from 'react'

export default function Hero(props) {
  return (
    <div className="container-fluid position-relative p-0">
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">{props.data}</h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown">{props.tagLine}</p>
                        <div className="position-relative w-75 mx-auto animated slideInDown">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
