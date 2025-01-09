import React from 'react'

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

<section className="about-us-area section-padding-70-100 relative" id="about">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
        <div className="welcome-meter about-sec-wrapper wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
          <img src="img/core-img/about-sec1.png" className="about-i" alt />
          <div className="article special box-shadow">
            <img src="img/icons/s55.png" className="mb-10" alt />
            <h3 className="article__title w-text">Our Mission</h3> 
            <p className="g-text">Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit conse ctetur adipi sicing</p>                
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
                  <div className="foot-c-info">Best Networking &amp; Security Solutions</div>
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
        </div>
      </div>
    </div>
  </div>
</section>

<section className="how section-padding-100-70 relative map-bg map-before">
  <div className="container">
    <div className="section-heading text-center">
      <span>Awesome Features</span>
      <h2 className="wow fadeInUp d-blue bold" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>Our core Features</h2>
      <p className="wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-3">
        {/* Content */}
        <div className="service_single_content box-shadow text-center wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
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
        <div className="service_single_content box-shadow text-center wow wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
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
        <div className="service_single_content box-shadow text-center wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
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
        <div className="service_single_content box-shadow text-center wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
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

<section className="about-us-area section-padding-70-70">
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
          <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
          <p className="fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!</p>
          <a className="btn info-btn green-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default AboutUs