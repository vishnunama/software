import React, { useState } from "react";

const FAQ = () => {
  // State to manage the active FAQ index
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first FAQ being open

  // Function to toggle FAQ visibility
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close for the same index
  };

  return (
    
    <div className="faq-timeline-area section-padding-100-85" id="faq">
      <div className="container">
        <div className="section-heading text-center">
          <span>Important questions</span>
          <h2 className="d-blue bold fadeInUp" data-wow-delay="0.3s">
            Frequently Questions
          </h2>
          <p className="fadeInUp" data-wow-delay="0.4s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
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
  );
};

// FAQ Data
const faqData = [
  {
    question: "What are the objectives of this Service?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
  },
  {
    question: "What is the best features and services we deliver?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
  },
  {
    question: "Why is this app important to me?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
  },
  {
    question: "How may I take part in and purchase this Software?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
  },
];

export default FAQ;
