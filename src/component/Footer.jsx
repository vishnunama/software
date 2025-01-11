import React from 'react'
import { Link } from 'react-router-dom'
import"./Footer.css"

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
                <div style={{ 
  display: "inline-block", 
  padding: "20px", 
  border: "2px solid #9e6fff", 
  borderRadius: "10px", 
  textAlign: "center", 
  position: "relative", 
  width: "180px" 
}}>
  <h3 className='scan-me-text' style={{ 
    position: "absolute", 
    top: "-12px", 
    left: "50%", 
    transform: "translateX(-50%)", 
    backgroundColor: "#E9F4FA", 
    color: "#888888", 
    padding: "0 10px", 
    fontSize: "14px" 
  }}>
    Scan Me
  </h3>
  <img style={{ width: "150px" }} src="img/icons/qrcode.jpg" alt="QR Code" />
  <div style={{  marginTop: "10px", fontSize: "14px", fontWeight:"bold" }}>Save Contact Details</div>
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
  <h5>PRODUCTS</h5>
  <Link to="./Services">
    <p>WEBSITE</p>
  </Link>
  <Link to="./Services">
    <p>SOFTWARE</p>
  </Link>
  <Link to="./Services">
    <p>BLOCKCHAIN</p>
  </Link>
  <Link to="./Services">
    <p>APPLICATION</p>
  </Link>
  <Link to="./Services">
    <p>METAVERSE</p>
  </Link>
  <Link to="./Services">
    <p>GAME</p>
  </Link>
</div>

            </div>
          </div>
          <div className="col-12 col-lg-2 col-md-6 ">
            {/* Content Info */}
            <div className="contact_info_area d-sm-flex justify-content-between">
             <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.2s">
  <h5>NAVIGATE</h5>
  <Link to="./">
    <p>Home</p>
  </Link>
  <Link to="./AboutUs">
    <p>About Us</p>
  </Link>
  <Link to="./Services">
    <p>Services</p>
  </Link>
  <Link to="./FAQ">
    <p>FAQ</p>
  </Link>
  <Link to="./TermAndCondition">
    <p>Terms & Condition</p>
  </Link>
</div>

            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ">
            <div className="contact_info_area d-sm-flex justify-content-between">
              {/* Content Info */}
              <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.4s">
                <h5>CONTACT US</h5>
                <p> 🏠 30-A, Gopalpura Bypass Rd,</p>
                <p>opp. Holiday Inn Hotel, opp. Holiday Inn,</p>
                                <p>Sultan Nagar, Santi Nagar, Gurjar Ki Thadi,</p>
                 <p>Jaipur, Rajasthan 302020</p>
               <p>
  <a href="mailto:info@metablocktechnologies.in" style={{ color: "inherit", textDecoration: "none" }}>
    ✉️ info@metablocktechnologies.in
  </a>
</p>

               <p>
  <a href="tel:+919358593003" style={{ color: "inherit", textDecoration: "none" }}>
    📞 +91 935 859 3003
  </a>
</p>
<p>
  <a href="tel:+919358593002" style={{ color: "inherit", textDecoration: "none" }}>
    📞 +91 935 859 3002
  </a>
</p>


              <div style={{marginTop: 15}}>
  
  <a target='blank' href="https://www.linkedin.com/in/hemant-ajay-yogi-20o7/" style={{marginRight: 10}}>
    <img src="img/icons/linkedin (1).png" alt="Linkedin" style={{width: 30, height: 30}} />
  </a>
  <a target='blank' href="https://join.skype.com/invite/qb0uxB96FlTH" style={{marginRight: 10}}>
    <img src="img/icons/linkedin (2).png" alt="Skype" style={{width: 30, height: 30}} />
  </a>
  <a  href="https://wa.me/919785211329"
          target="_blank" style={{marginRight: 10}}>
    <img src="img/icons/whatsapp.png" alt="WhatsApp" style={{width: 30, height: 30}} />
  </a>
  <a target='blank' href="https://x.com/hemant_yogi_">
    <img src="img/icons/linkedin (3).png" alt="Skype" style={{width: 30, height: 30}} />
  </a>
</div>

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