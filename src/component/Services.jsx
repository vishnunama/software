import React from 'react'

function Services() {
  return (
  
    <div>
      <div className="breadcumb-content">
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12">
        <nav aria-label="breadcrumb" className="breadcumb--con text-center">
          <h2 className="w-text title wow fadeInUp" data-wow-delay="0.2s">Services</h2>
          <ol className="breadcrumb justify-content-center wow fadeInUp bg-transparent" data-wow-delay="0.4s">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Services</li>
          </ol>
        </nav>
      </div>
    </div>
    
  </div>
</div>
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
    </div>
  )
}

export default Services