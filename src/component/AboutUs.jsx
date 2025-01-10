import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div>
      <div className="breadcumb-content">
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12">
        <nav aria-label="breadcrumb" className="breadcumb--con text-center">
          <h2 className="w-text title wow fadeInUp" data-wow-delay="0.2s">About us</h2>
          <ol className="breadcrumb justify-content-center wow fadeInUp bg-transparent" data-wow-delay="0.4s">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">About us</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>

 <section className="about-us-area section-padding-100 relative" id="about">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
        <div className="welcome-meter about-sec-wrapper wow fadeInUp" data-wow-delay="0.4s">
          <img src="img/core-img/about-sec1.png" className="about-i" alt />
          <div className="article special box-shadow">
            <img src="img/icons/s55.png" className="mb-10" alt />
            <div>
              <h3 className="article__title w-text">Our Mission</h3>
              <p className="g-text">Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit conse sicing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1">
        <div className="who-we-contant mt-s">
          <div className="promo-section">
            <h3 className="special-head ">What we offer</h3>
          </div>
          <h4 className="d-blue fadeInUp" data-wow-delay="0.3s">MetaBlock: Providing Reliable IT Solutions for Blockchain, Gaming, Metaverse, and More</h4>
          <p className="fadeInUp" data-wow-delay="0.4s">MetaBlock provides easy and reliable IT solutions for all types of businesses. We specialize in blockchain, online platforms, metaverse projects, gaming, and software development. Our modern products and solutions help businesses stand out and grow.</p>
          <div className="list-wrap align-items-center">
            <div className="row">
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">Blockchain and Web3 experts offering solutions for NFTs, DeFi, wallets, DAOs, and tokens.</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">Web Development offering secure, responsive, and high-performance websites for business success.</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">Providing software solutions like ERP, SaaS, LMS, and tools for business growth and efficiency.</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">Offering diverse applications for cab booking, communication, learning, messaging, dating, horoscope, and rentals.</div>
                </div>
              </div>
                <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">Focused on gaming with active games like Rummy, Poker, Aviator, tournaments, and engaging designs.</div>
                </div>
              </div>  <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">Providing Metaverse solutions for games, avatars, lands, and interactive virtual events.</div>
                </div>
              </div>
            </div>
          </div>
          <Link to="./Services" className="btn info-btn green-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="/about-us">Read More</Link>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="how section-padding-100-70 relative map-bg map-before">
  <div className="container">
    <div className="section-heading text-center">
      <span>AWESOME BENEFITS</span>
      <h2 className="wow fadeInUp d-blue bold" data-wow-delay="0.3s">BENEFITS TO COLLABORATING WITH US</h2>
      <p className="wow fadeInUp" data-wow-delay="0.4s">At MetaBlock, customers are like a part of the family, and we treat every customer just like family and always put their needs before ours.</p>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-3">
        {/* Content */}
        <div className="service_single_content box-shadow text-center wow fadeInUp" data-wow-delay="0.2s">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/n3.png" className="colored-icon" alt />
          </div>
          <h6>Partner With Us</h6>
          <p>Partner with us for simple, reliable, and secure solutions that give you peace of mind.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        {/* Content */}
        <div className="service_single_content box-shadow text-center wow wow fadeInUp" data-wow-delay="0.3s">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/n5.png" className="colored-icon" alt />
          </div>
          <h6>Tension Free Business</h6>
          <p>Make your business easy and smooth with secure, reliable solutions that remove all the stress.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        {/* Content */}
        <div className="service_single_content box-shadow text-center wow fadeInUp">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/s4.png" className="colored-icon" alt />
          </div>
          <h6>Your Data is Safe With Us </h6>
          <p>We keep your data secure with reliable solutions, ensuring complete protection and privacy.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        {/* Content */}
        <div className="service_single_content box-shadow text-center wow fadeInUp">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/n7.png" className="colored-icon" alt />
          </div>
          <h6>Get Genuine Suggestions</h6>
          <p>Receive honest and reliable suggestions to help your business grow.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <section className="about-us-area section-padding-70-70">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-lg-3 col-md-12 ">
        <div className="col-xs-12">
          <div className="article special">
            <img src="img/icons/n3.png" className="mb-10" alt />
            <h3 className="article__title">Security Solutions</h3> 
            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit</p>               
          </div>
        </div>
        <div className="col-xs-12">
          <div className="article special">
            <img src="img/icons/n5.png" className="mb-10" alt />
            <h3 className="article__title">Managed IT Services</h3> 
            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit</p>                
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-3 col-md-12">
        <div className="col-xs-12">
          <div className="article special mts-50">
            <img src="img/icons/n6.png" className="mb-10" alt />
            <h3 className="article__title">Strong Firewalls</h3> 
            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit</p>                
          </div>
        </div>
        <div className="col-xs-12">
          <div className="article special">
            <img src="img/icons/n7.png" className="mb-10" alt />
            <h3 className="article__title">Cloud Computing</h3> 
            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit</p>               
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1">
        <div className="who-we-contant mt-s">
          <div className="promo-section">
            <h3 className="special-head ">Our Core Features!</h3>
          </div>
          <h4 className="bl-text fadeInUp" data-wow-delay="0.3s">We Are The Trusted Experts We Keep Things Simple</h4>
          <p className="fadeInUp" data-wow-delay="0.4s">We are trusted experts committed to delivering solutions that prioritize simplicity and efficiency.</p>
          <p className="fadeInUp" data-wow-delay="0.5s">Our expertise ensures reliable, straightforward services tailored to meet your unique needs, making complex challenges easier to navigate and solve.</p>
          <Link to="./Services" className="btn info-btn green-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</Link>
        </div>
      </div>
    </div>
  </div>
</section> */}


    </div>
  )
}

export default AboutUs