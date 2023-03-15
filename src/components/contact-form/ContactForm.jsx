import React, { useState } from "react";
import "./contact-form.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Thanks for submitting the form");
    setFormData({
      name: "",
      email: "",
      companyName: "",
      message: "",
    });
  };
  return (
    <>
      <h1
        style={{ fontSize: "1.6rem", textAlign: "center", marginTop: "2rem" }}
      >
        Contact Us
      </h1>
      <div className="contain">
        <div className="wrapper">
          <div className="form">
            <h4>GET IN TOUCH</h4>
            <h2 className="form-headline">Send us a message</h2>
            <form id="submit-form" onSubmit={handleSubmit}>
              <p>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <small className="name-error"></small>
              </p>
              <p>
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <small className="name-error"></small>
              </p>
              <p className="full-width">
                <input
                  id="company-name"
                  className="form-input"
                  type="text"
                  placeholder="Company Name*"
                  required
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      companyName: e.target.value,
                    }))
                  }
                />
                <small></small>
              </p>
              <p className="full-width">
                <textarea
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Your Message*"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                ></textarea>
                <small></small>
              </p>

              <p className="full-width">
                <input
                  type="submit"
                  className="submit-btn btn"
                  value="Submit"
                />
                {/* <button className="reset-btn btn">Reset</button> */}
              </p>
            </form>
          </div>

          <div className="contacts contact-wrapper">
            <ul>
              <li>
                We've driven online revenues of over{" "}
                <span className="highlight-text-grey">$2 billion</span> for our
                clients. Ready to know how we can help you?
              </li>
              <span className="hightlight-contact-info">
                <li className="email-info">
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  info@demo.com
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                  <span className="highlight-text">+91 11 1111 2900</span>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
