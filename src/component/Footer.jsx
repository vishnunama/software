import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
 <div className="footer-bg">
  {/* ##### Footer Area Start ##### */}
  <footer className="footer-area bg-img">
    {/* ##### Contact Area Start ##### */}
    <div className="contact_us_area section-padding-100-0" id="contact">
      <div className="container">
        <div className="call-us-sec">
          <div className="row align-items-center">
            <div className="col-12 col-lg-9">
              <div className="text-left">
                <h3 className="g-text fadeInUp" data-wow-delay="0.3s">Get Your Quote or Call:+919785211329</h3>
                <h2 className="bold w-text mb-0">Are You Ready? Book Appointment Now!</h2>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <a  href="https://wa.me/919785211329" target="_blank" className="btn info-btn more-btn fadeInUp mt-s" data-wow-delay="0.6s">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ##### Contact Area End ##### */}
    <div className="footer-content-area spec">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-lg-4 col-md-6">
            <div className="footer-copywrite-info">
              {/* Copywrite */}
              <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                <div className="footer-logo">
                  <Link to="/">
  <img style={{width:"150px"}} src="img/icons/metablock-logos-main.png" alt="logo" />                     </Link>
                </div>
                {/* <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.</p> */}
              </div>
              {/* Social Icon */}
              {/* <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                <a href="#"> <i className="fa fa-twitter" aria-hidden="true" /></a>
                <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="contact_info_area d-sm-flex justify-content-between">
              {/* Content Info */}
              <div className="contact_info mt-x text-center fadeInUp" data-wow-delay="0.3s">
                <h5>PRIVACY &amp; TOS</h5>
                <a href>
                  <p>Advertiser Agreement</p>
                </a>
                <a href>
                  <p>Acceptable Use Policy</p>
                </a>
                <a href>
                  <p>Privacy Policy</p>
                </a>
                <a href>
                  <p>Technology Privacy</p>
                </a>
                <a href>
                  <p>Developer Agreement</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-md-6 ">
            {/* Content Info */}
            <div className="contact_info_area d-sm-flex justify-content-between">
              <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.2s">
                <h5>NAVIGATE</h5>
                <a href>
                  <p>Advertisers</p>
                </a>
                <a href>
                  <p>Developers</p>
                </a>
                <a href>
                  <p>Resources</p>
                </a>
                <a href>
                  <p>Company</p>
                </a>
                <a href>
                  <p>Connect</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ">
            <div className="contact_info_area d-sm-flex justify-content-between">
              {/* Content Info */}
              <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.4s">
                <h5>CONTACT US</h5>
                <p>30-A, Gopalpura Bypass Rd,</p>
                <p>opp. Holiday Inn Hotel, opp. Holiday Inn,</p>
                                <p>Sultan Nagar, Santi Nagar, Gurjar Ki Thadi,</p>
                 <p>Jaipur, Rajasthan 302020</p>
                <p>+91 935 859 3003</p>
                <p>info@metablocktechnologies.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* ##### Footer Area End ##### */}
</div>

  )
}

export default Footer