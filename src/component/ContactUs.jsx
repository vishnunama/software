import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
    
      {/* <div className="breadcumb-content">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <nav aria-label="breadcrumb" className="breadcumb--con text-center">
                <h2 className="w-text title wow fadeInUp" data-wow-delay="0.2s">
                  Contact Us
                </h2>
                <ol className="breadcrumb justify-content-center wow fadeInUp bg-transparent" data-wow-delay="0.4s">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
<div style={{background:"#6A54F3"}}>
      <section className="uf-contact-form-01 mx-auto">
        <div style={{ margin:"150px 0px"}} className="container">
          <div style={{borderRadius:"20px"}} className="row justify-content-center bg-white rounded-4 shadow py-5 gx-5 px-lg-5">
            <div className="col-md-6 text-center">
              <h2 className="uf-ct-01-text-primary text-uppercase fw-bold">Contact Us</h2>
              <p> <a href="mailto:info@metablocktechnologies.in" className="text-decoration-none">info@metablocktechnologies.in</a></p>
              <img src="img/icons/plane.png" alt="Plane" className="uf-img-contact-form-01 pt-4 d-md-block d-none" />
            </div>
            <div className="col-md-6">
              <form>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="uf-iname" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="uf-iname" placeholder="Enter your name" />
                </div>
                
                {/* Phone Number Field */}
                <div className="mb-3">
                  <label htmlFor="uf-iphone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="uf-iphone" placeholder="Enter your phone number" />
                </div>
                
                {/* Email Address Field */}
                <div className="mb-3">
                  <label htmlFor="uf-imail" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="uf-imail" placeholder="Enter your email address" />
                  <div id="emailHelp" className="form-text uf-ct-01-text-primary">We'll never share your email with anyone else.</div>
                </div>
                
                {/* Location Field */}
                <div className="mb-3">
                  <label htmlFor="uf-ilocation" className="form-label">Location</label>
                  <input type="text" className="form-control" id="uf-ilocation" placeholder="Enter your location" />
                </div>
                
                {/* Suitable Time for Call */}
                <div className="mb-3">
                  <label htmlFor="uf-itime" className="form-label">Suitable Time for Call</label>
                  <input type="text" className="form-control" id="uf-itime" placeholder="E.g., 10:00 AM to 2:00 PM" />
                </div>
                
                {/* Requirement Field */}
                <div className="mb-3">
                  <label htmlFor="uf-irequirement" className="form-label">What is your requirement?</label>
                  <textarea className="form-control" id="uf-irequirement" rows={3} placeholder="Briefly explain your requirement"></textarea>
                </div>
                
                {/* Message Field with Black Background */}
               

                {/* Submit Button */}
                <button type="submit" className="btn btn-lg uf-ct-01-btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default ContactUs;
