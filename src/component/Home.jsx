import React from 'react'
import "./Home.css"
import FAQ from './FAQ'
import Services from './Services'

function Home() {
  return (
    <>
   <section className="hero-section ai2 relative" id="home">
  <div className="overlay" />
  {/* Hero Content */}
  <div className="hero-section-content">
    <div className="container ">
      <div className="row ">
        {/* Welcome Content */}
        <div className="col-12 col-lg-6 col-md-12">
          <div className="welcome-content text-left">
            <div className="promo-section">
              <h3 className="special-head">Creative Multi-Services IT Agency</h3>
            </div>
            <h1 className="bold wow fadeInUp d-blue" data-wow-delay="0.2s">All The Services You Expect From an <span className="cyan">IT &amp; Technology Agency</span></h1>
            <p className="wow fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores, voluptate, tempora dolorem fugiat fuga autem .</p>
            <div className="info-btn-group fadeInUp" data-wow-delay="0.4s">
              <a className="btn info-btn mr-3" href="/contact-us">contact us</a>
              <a className="btn info-btn" href="/services"> learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
            <h3 className="special-head ">Welcome to Our Agency!</h3>
          </div>
          <h4 className="d-blue fadeInUp" data-wow-delay="0.3s">IT Solutions with Experienced Staff of Engineers provide you with optimal IT experience</h4>
          <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
          <div className="list-wrap align-items-center">
            <div className="row">
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">Providing Expansions or Consolidations</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">Best Networking &amp; Security Solutions</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">Affordable Security Packages &amp; Detailed Results</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">It is a long established fact that a reader will</div>
                </div>
              </div>
            </div>
          </div>
          <a className="btn info-btn green-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="/about-us">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="how section-padding-100-70 relative map-bg map-before">
  <div className="container">
    <div className="section-heading text-center">
      <span>Awesome Features</span>
      <h2 className="wow fadeInUp d-blue bold" data-wow-delay="0.3s">Our core Features</h2>
      <p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-3">
        {/* Content */}
        <div className="service_single_content box-shadow text-center wow fadeInUp" data-wow-delay="0.2s">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/n3.png" className="colored-icon" alt />
          </div>
          <h6>Security Solutions</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        {/* Content */}
        <div className="service_single_content box-shadow text-center wow wow fadeInUp" data-wow-delay="0.3s">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/n5.png" className="colored-icon" alt />
          </div>
          <h6>Managed IT Services</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        {/* Content */}
        <div className="service_single_content box-shadow text-center wow fadeInUp">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/s4.png" className="colored-icon" alt />
          </div>
          <h6>Latest Equipment</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        {/* Content */}
        <div className="service_single_content box-shadow text-center wow fadeInUp">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/n7.png" className="colored-icon" alt />
          </div>
          <h6>Cloud Computing</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam</p>
        </div>
      </div>
    </div>
  </div>
</section>

  <div className="clearfix" />
 <section className="our_services_area section-padding-100-0" id="services">
    <div className="container">
      <div className="section-heading text-center">
        <span>Our Services</span>
        <h2 className="d-blue bold fadeInUp" data-wow-delay="0.3s">Our Core Services</h2>
        <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 ">
          {/* Content */}
          <div className="service_single_content v2 text-center wow fadeInUp" data-wow-delay="0.2s">
            <div className="serv_icon">
              <img src="img/icons/s1.png" alt />
            </div>
            <div className="service-content">
              <h6 className="d-blue bold">Website Development</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {/* Content */}
          <div className="service_single_content v2 text-center wow fadeInUp" data-wow-delay="0.2s">
            <div className="serv_icon">
              <img src="img/icons/s2.png" alt />
            </div>
            <div className="service-content">
              <h6 className="d-blue bold">Software Development</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {/* Content */}
          <div className="service_single_content v2 text-center wow fadeInUp" data-wow-delay="0.2s">
            <div className="serv_icon">
              <img src="img/icons/s3.png" alt />
            </div>
            <div className="service-content">
              <h6 className="d-blue bold">BlockChain Development</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {/* Content */}
          <div className="service_single_content v2 text-center wow fadeInUp" data-wow-delay="0.4s">
            <div className="serv_icon">
              <img src="img/icons/s4.png" alt />
            </div>
            <div className="service-content">
              <h6 className="d-blue bold">Metaverse Development</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {/* Content */}
          <div className="service_single_content v2 text-center wow fadeInUp" data-wow-delay="0.4s">
            <div className="serv_icon">
              <img src="img/icons/s5.png" alt />
            </div>
            <div className="service-content">
              <h6 className="d-blue bold">Application Development</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {/* Content */}
          <div className="service_single_content v2 text-center wow fadeInUp" data-wow-delay="0.4s">
            <div className="serv_icon">
              <img src="img/icons/s6.png" alt />
            </div>
            <div className="service-content">
              <h6 className="d-blue bold">Game Development</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

   <section className="creative-facts section-padding-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-6 col-sm-12">
        <div className="c-facts-box">
          <div className="who-we-contant">
            <div className="promo-section">
              <h3 className="special-head">Our Numbers Are Talking</h3>
            </div>
            <h4 className="d-blue wow fadeInUp bold" data-wow-delay="0.3s">We Care Too Much About Our Customers Satisfication</h4>
            <p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6">
                {/* Single Cool Fact */}
                <div className="single_cool_fact text-center wow fadeInUp" data-wow-delay="0.2s">
                 
                  {/* Single Cool Detail */}
                  <div className="cool_fact_detail">
                    <h3><span className="counter">3215</span>+</h3>
                    <h2>Happy Clients</h2>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6">
                {/* Single Cool Fact */}
                <div className="single_cool_fact text-center wow fadeInUp" data-wow-delay="0.5s">
                 
                  {/* Single Cool Detail */}
                  <div className="cool_fact_detail">
                    <h3><span className="counter">230</span>+</h3>
                    <h2>Awards Won</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
  <section className="section-padding-100-70 relative map-before">
  <div className="container">
    <div className="section-heading text-center">
      <span>How It Works</span>
      <h2 className="wow fadeInUp d-blue bold" data-wow-delay="0.3s">Become Totaly Secured in 3 Easy Steps</h2>
      <p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
        {/* Content */}
        <div className="service_single_content transparent text-center wow fadeInUp" data-wow-delay="0.2s">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/h1.png" className="colored-icon" alt />
          </div>
          <h6>Choose Security Package</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        {/* Content */}
        <div className="service_single_content transparent text-center wow wow fadeInUp" data-wow-delay="0.3s">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/h2.png" className="colored-icon" alt />
          </div>
          <h6>Prepare for Security Test </h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        {/* Content */}
        <div className="service_single_content transparent text-center wow fadeInUp">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/h3.png" className="colored-icon" alt />
          </div>
          <h6>Get Test Results</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam</p>
        </div>
      </div>
    </div>
  </div>
</section>



 <div>
  <FAQ/>
  
</div>
<div>

<div>
<img src="img/icons/whatsapp.png" alt="WhatsApp Icon" className="fixed-icon-whatsapp" />
  </div>
  </div>




    </>

  )
}

export default Home