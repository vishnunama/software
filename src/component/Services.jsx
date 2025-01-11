import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>

        <div className="breadcumb-content">
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12">
        <nav aria-label="breadcrumb" className="breadcumb--con text-center">
          <h2 className="w-text title wow fadeInUp " data-wow-delay="0.2s">Services</h2>
          <ol className="breadcrumb justify-content-center wow fadeInUp bg-transparent" data-wow-delay="0.4s">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
        <h2 className="d-blue bold fadeInUp" data-wow-delay="0.3s">What we offers</h2>
        <p className="fadeInUp" data-wow-delay="0.4s">MetaBlock provides easy, reliable IT solutions for businesses, focusing on blockchain, metaverse, gaming, and software development. We deliver modern solutions to elevate any business.</p>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 ">
          {/* Content */}
          <div className="service_single_content v2 text-center wow fadeInUp" data-wow-delay="0.2s">
            <div className="serv_icon">
              <img src="img/icons/s1.png" alt />
            </div>
            <div className="service-content">
              <h6 className="d-blue bold">Blockchain / Web3</h6>
              <p>MetaBlock is a leading blockchain and Web3 software development company offering innovative and future-ready solutions. Our expertise includes token creation, decentralized exchanges (DEX), Decentralized Finance (DeFi) platforms, NFT marketplaces, crypto wallets, and Decentralized Autonomous Organizations (DAOs). We provide businesses with secure, scalable, and customized solutions designed to tackle complex challenges and ensure success in the Web3 environment</p>
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
              <h6 className="d-blue bold">Web Development</h6>
              <p>MetaBlock specializes in creating secure, efficient, and accessible websites using cutting-edge technologies. We design responsive, scalable, and high-performance websites tailored to meet the unique needs of businesses. Our focus is on delivering solutions that enhance online presence, drive growth, and ensure long-term success.</p>
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
              <h6 className="d-blue bold">Software Development</h6>
              <p>MetaBlock specializes in developing a wide range of software solutions, including ERP systems, SaaS platforms, LMS with live classes, CRM tools, inventory management systems, HR management software, billing and invoicing software, POS systems, e-learning platforms, custom analytics tools, travel management software, restaurant management systems, marketing automation tools, hospital management systems, and supply chain management software Etc.</p>
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
              <h6 className="d-blue bold">Application Development</h6>
              <p>MetaBlock itself offers an array of applications for quite diverse purposes: to book a cab, for communication, as a learning management platform, for instant messaging, dating, horoscope, and rentals. Every one of the applications is made to be intuitive and easy to use and navigate.</p>
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
              <h6 className="d-blue bold">Gaming Development</h6>
              <p>MetaBlock excels in the gaming industry, delivering a diverse range of popular games such as Rummy, Ludo, Teen Patti, Car Racing, Dream11, Chess, Sudoku, Fantasy Cricket, call-break, Snakes and Ladders, and many more. We also specialize in hosting tournament services, offering engaging and competitive events for players.
</p>
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
              <h6 className="d-blue bold">Metaverse</h6>
              <p>MetaBlock provides end-to-end Metaverse development solutions, including Metaverse games, custom avatars, virtual lands, and event platforms for immersive and interactive digital experiences. Our goal is to design unique, engaging, and dynamic virtual environments that push the boundaries of innovation and creativity in the digital world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Services