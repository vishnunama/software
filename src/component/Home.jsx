import React from 'react'
import "./Home.css"
import FAQ from './FAQ'
import { Link } from "react-router-dom";

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
              <h3 className="special-head">Creative Multi-Services IT Services</h3>
            </div>
            <h1 className="bold wow fadeInUp d-blue" data-wow-delay="0.2s">Best Web and blockchain <span className="cyan">Development Company in india
</span></h1>
            <p className="wow fadeInUp" data-wow-delay="0.3s">We are a best web and blockchain development company that provides secure, effective
web and blockchain services. Clients are able to enhance themselves and succeed in the
modern technologically enhanced world with our sophisticated systems in place.</p>
            <div className="info-btn-group fadeInUp" data-wow-delay="0.4s">
              <a
  className="btn info-btn mr-3"
  href="https://wa.me/919785211329"
  target="_blank"
  rel="noopener noreferrer"
>
  Contact Us
</a>

              <Link to="./Services" className="btn info-btn" > learn more</Link>
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
              <p style={{lineHeight:"1.2rem"}} className="g-text  our-mission-text">Helping youth learn blockchain technology to become future leaders in the corporate world.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1">
        <div className="who-we-contant mt-s">
          <div className="promo-section">
            <h3 className="special-head ">Why Choose Us for IT Services?</h3>
          </div>
          <h4 className="d-blue fadeInUp" data-wow-delay="0.3s">MetaBlock: Providing Reliable IT Solutions for Blockchain, Gaming, Metaverse, and More</h4>
          <p className="fadeInUp" data-wow-delay="0.4s">MetaBlock provides easy and reliable IT solutions for all types of businesses. We specialize in blockchain, online platforms, metaverse projects, gaming, and software development. Our modern products and solutions help businesses stand out and grow.</p>
          <div className="list-wrap align-items-center">
            <div className="row">
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">1.Custom Solutions
Tailored IT services designed to meet the unique needs of your business.</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">2.	In-House Development
Complete control over processes, customization, and data security.
</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">3.	Latest Technologies
We use cutting-edge tools and systems to deliver innovative and efficient solutions.
</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">4.	Comprehensive Testing
Rigorous quality checks ensure high performance and reliability.
</div>
                </div>
              </div>
                <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">5.	Timely Delivery
We prioritize deadlines to ensure your projects are completed on time.
</div>
                </div>
              </div>  <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">6.	Dedicated Support
Ongoing after-sale support for troubleshooting, updates, and maintenance.
</div>
                </div>
              </div>
               <div className="col-md-12">
                <div className="side-feature-list-item">
                  <img src="img/icons/check.png" className="check-mark-icon" alt />
                  <div className="foot-c-info">7.	Expert Team
A team of skilled professionals committed to delivering top-notch IT solutions.
</div>
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

  <div className="clearfix" />
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

   <section className="creative-facts section-padding-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-6 col-sm-12">
        <div className="c-facts-box">
          <div className="who-we-contant">
            <div className="promo-section">
              <h3 className="special-head">WHO WE ARE ?</h3>
            </div>
            <h4 className="d-blue wow fadeInUp bold" data-wow-delay="0.3s">A brief introduction to our team and expertise in Web & Blockchain Development</h4>
            <p className="wow fadeInUp" data-wow-delay="0.4s">MetaBlock Technologies, your trusted software company based in Jaipur! We specialize in web development and blockchain technology, offering a diverse range of services including blockchain Development, web and mobile applications, software development, and game development. With our strong background in blockchain development, DEX development, coin and token creation, as well as Decentralized MLM Development & Games.
Our in-house team is dedicated to providing the best IT solutions at affordable prices and given time. Our aim is to provide our clients with unique solutions that are specifically adapted to their needs, going above and beyond their expectations. Let's collaborate to bring your ideas to life!.
</p>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6">
                {/* Single Cool Fact */}
                <div className="single_cool_fact text-center wow fadeInUp" data-wow-delay="0.2s">
                 
                  {/* Single Cool Detail */}
                  <div className="cool_fact_detail">
                    <h3><span className="counter">500</span>+</h3>
                    <h2>Happy Clients</h2>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6">
                {/* Single Cool Fact */}
                <div className="single_cool_fact text-center wow fadeInUp" data-wow-delay="0.5s">
                 
                  {/* Single Cool Detail */}
                  <div className="cool_fact_detail">
                    <h3><span className="counter">50</span>+</h3>
                    <h2> team member</h2>
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
      <h2 className="wow fadeInUp d-blue bold" data-wow-delay="0.3s">Brands We Have Worked With</h2>
      {/* <p className="wow fadeInUp" data-wow-delay="0.4s">MetaBlock collaborates with diverse brands, delivering innovative solutions in gaming, finance, ecommerce, metaverse, analytics, and more.</p> */}
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
        {/* Content */}
        <div className="service_single_content transparent text-center wow fadeInUp" data-wow-delay="0.2s">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/Dsea.webp" className="colored-icon" alt />
          </div>
          <h6>Dsea</h6>
          <p>Dsea focuses on innovative solutions for seamless digital transformation.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        {/* Content */}
        <div className="service_single_content transparent text-center wow wow fadeInUp" data-wow-delay="0.3s">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/haawks.webp" className="colored-icon" alt />
          </div>
          <h6>Haawks</h6>
          <p>Haawks delivers cutting-edge technology solutions for advanced business growth.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        {/* Content */}
        <div className="service_single_content transparent text-center wow fadeInUp">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/Buffy-guffy.webp" className="colored-icon" alt />
          </div>
          <h6>Buffy Guffy
</h6>
          <p>Buffy Guffy creates fun and engaging experiences for gaming enthusiasts.</p>
        </div>
      </div>
    </div>
      <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
        {/* Content */}
        <div className="service_single_content transparent text-center wow fadeInUp" data-wow-delay="0.2s">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/Donation.webp" className="colored-icon" alt />
          </div>
          <h6>Donation</h6>
          <p>Donation simplifies charitable contributions, connecting donors with causes that matter for a better impact.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        {/* Content */}
        <div className="service_single_content transparent text-center wow wow fadeInUp" data-wow-delay="0.3s">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/taTrading.webp" className="colored-icon" alt />
          </div>
          <h6>TA Trading</h6>
          <p>Haawks delivers cutting-edge technology solutions for advanced business growth.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        {/* Content */}
        <div className="service_single_content transparent text-center wow fadeInUp">
          {/* Icon */}
          <div className="how_icon">
            <img src="img/icons/analytics.webp" className="colored-icon" alt />
          </div>
          <h6>Analytical</h6>
          <p>Analytical delivers data-driven insights and tools for smarter business decisions.</p>
        </div>
      </div>
    </div>
  </div>
</section>




 <div>
  <FAQ />
  
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