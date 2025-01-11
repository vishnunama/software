import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  // State to manage the active FAQ index
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first FAQ being open

  // Function to toggle FAQ visibility
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close for the same index
  };

  return (

    <>

           {/* <div className="breadcumb-content">
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12">
        <nav aria-label="breadcrumb" className="breadcumb--con text-center">
          <h2 className="w-text title wow fadeInUp " data-wow-delay="0.2s">FAQ</h2>
          <ol className="breadcrumb justify-content-center wow fadeInUp bg-transparent" data-wow-delay="0.4s">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">FAQ</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div> */}
    
    
   
    <div className="faq-timeline-area section-padding-100-85" id="faq">
      <div className="container">
        <div className="section-heading text-center">
          <span>Important questions</span>
          <h2 className="d-blue bold fadeInUp" data-wow-delay="0.3s">
          Frequently Asked Questions for Our Software Development Services
          </h2>
          {/* <p className="fadeInUp" data-wow-delay="0.4s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p> */}
        </div>

        <div className="row align-items-center">
          <div className="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
            <div
              className="welcome-meter about-sec-wrapper wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <img
                src="img/core-img/about-sec2.png"
                className="about-i"
                alt="About"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-12">
            <div className="info-faq-area mt-s">
              <dl style={{ marginBottom: 0 }}>
                {/* FAQ Items */}
                {faqData.map((item, index) => (
                  <React.Fragment key={index}>
                    <dt
                      className="wave fadeInUp"
                      data-wow-delay="0.2s"
                      onClick={() => toggleFAQ(index)}
                      style={{
                        cursor: "pointer",
                        fontWeight: activeIndex === index ? "bold" : "normal",
                      }}
                    >
                      {item.question}
                    </dt>
                    <dd
                      className="fadeInUp"
                      style={{
                        display: activeIndex === index ? "block" : "none",
                        marginTop: "10px",
                      }}
                    >
                      <p>{item.answer}</p>
                    </dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

// FAQ Data
const faqData = [
  {
    question: "1. What technology features does MetaBlock use? ",
    answer:
      "We have certified and the huge experienced developers into a set of primary languages and frameworks which let them examine all the accessible options whilst selecting a top-grade technology platform for your software project.",
  },
  {
    question: "2. How much do you charge for software development and support?",
    answer:
      "We treat every single project as a unique one to make customers fully satisfied. Our team deals with many innovative projects to find the commonalities, which can help us in rating your project. To know more about us, kindly contact us or download our brochure on software costs.",
  },
  {
    question: "3. Do you offer software support and maintenance?",
    answer:
      "We give a service level agreement (SLA) which guarantees a higher level of support from the time the solution goes live. This includes background system maintenance, team knowledge retention, and general user software support.",
  },
  {
    question: "4. Can the software be updated in the future as new technology becomes accessible?",
    answer:
      "Certainly, we are prosperous to further develop, enhance and upgrade our work. ",
  },
];

export default FAQ;
