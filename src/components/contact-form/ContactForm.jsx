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
    <section
      class="text-gray-600 body-font relative "
      style={{ paddingBottom: "20px" }}
    >
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-1/2 md:w-1/2 bg-blue-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <img
            src="https://www.cherryhill.in/img/bny/bny9.jpg"
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
          {/* <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://media.istockphoto.com/id/1442716898/photo/modern-interior-design-of-cozy-apartment-living-room-with-beige-sofa-turquoise-armchairs-room.jpg?b=1&s=170667a&w=0&k=20&c=_mdCbI6KjsDJ9u5ZhNt-41U2mjH_uZ_q04dkaRLhqsI="
            // src="https://www.google.com/maps/@30.0823404,78.2817723,15z"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
          ></iframe> */}

          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs ">
                CONTACT US
              </h2>
              <p class="mt-1">To Get Your Dream Home Soon</p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a class="text-indigo-500 leading-relaxed">
                info@pacifencesolutions.com
              </a>
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p class="leading-relaxed">+1888-297-6869</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-4xl mb-1 font-medium title-font text-center">
            Contact us
          </h2>

          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

/* <>
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
              <button className="reset-btn btn">Reset</button> 
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
    </> */
