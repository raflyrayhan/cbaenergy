import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_i2j9hx8", "template_yzil5d7", e.target, "Xt4ZOGB2sm39xwRF4")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact Us!</h2>
                <p>Fill out the form below to send us an email and we will get back to you.</p>
              </div>

              {!messageSent ? (
                <form name="sentMessage" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                          onChange={handleChange}
                          value={name}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                          onChange={handleChange}
                          value={email}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                      onChange={handleChange}
                      value={message}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="alert alert-success mt-4">
                  <h4>Message Sent!</h4>
                  <p>Thank you for contacting us!</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3 style={{ color: "#70e509" }}>Find Us Here!</h3>
              <p style={{color: "yellow"}}>
                <i className="fa fa-map-marker"></i> Office<br />
                <a href="https://maps.app.goo.gl/W68d3h57ZGbdyT9C8" target="_blank" rel="noopener noreferrer" className="address-link">
                  {props.data ? props.data.address1 : "loading"}
                </a>
                <br /><br />
                <i className="fa fa-map-marker"></i> Fabrication Shop<br />
                <a href="https://maps.app.goo.gl/8tFjXQbYXC7mbzTH6" target="_blank" rel="noopener noreferrer" className="address-link">
                  {props.data ? props.data.address2 : "loading"}
                </a>
                <br /><br />
                <i className="fa fa-map-marker"></i> Warehouse<br />
                <a href="https://maps.app.goo.gl/RFMtCxgticLdBpAY8" target="_blank" rel="noopener noreferrer" className="address-link">
                  {props.data ? props.data.address3 : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p style={{color: "white"}}>
                <span style={{color: "yellow"}}><i className="fa fa-phone"></i> Phone</span>{" "}
                {props.data ? props.data.phone : "loading"}{" "}<br />
                {props.data ? props.data.phone2 : ""}
              </p>
            </div>
            <div className="contact-item">
              <p style={{color: "white"}}>
                <span style={{color: "yellow"}}><i className="fa fa-envelope-o"></i> Email</span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/cba-energy-a89609375/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/cahaya_bumi_abadi/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/6281110135360" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className="product-footer" style={{ marginTop: "0", background:"rgba(190, 143, 2, 1)" }}>
        <div className="product-footer__inner">
          <p>© 2025 CBA Energy | Website by Infimech</p>
        </div>
      </footer>
    </div>
  );
};
