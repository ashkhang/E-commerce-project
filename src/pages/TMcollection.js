import React from 'react'
import Footer from './Footer'
function TMcollection() {
  return (
    <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg.webp" class="card-img" alt="background" height="950px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h1 className="card-title display-3 fw-bolder mb-0">TM COLLECTION</h1>
                    {/* <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p> */}
                  </div>  
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default TMcollection
