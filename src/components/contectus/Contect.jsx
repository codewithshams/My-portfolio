import React from "react";
import "./contect.css";
import {
  FacebookRounded,
  GitHub,
  Instagram,
  Send,
  Twitter,
} from "@mui/icons-material";
const Contect = () => {
  return (
    <div className="contect-div" id="ContectUs">
      <section id="contact">
        <h1 className="section-header">Contact</h1>

        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  //   value=""
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  autoComplete="off"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  //   value=""
                  required
                />
              </div>
            </div>

            <textarea
              id="message"
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                {/* <i className="fa fa-paper-plane"></i> */}

                <span
                  className="send-text"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        marginRight: "5px",
                        fontSize: "16px",
                        marginTop: "-5px",
                      }}
                    >
                      Send
                    </span>
                    <Send className="send-btn" />
                  </div>
                </span>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker fa-2x">
                  <span className="contact-text place">Tank, KPK</span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      (+92) 3492438728
                    </a>
                  </span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      shamsurr924@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <ul className="social-media-list">
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <GitHub />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FacebookRounded />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <Instagram />
                </a>
              </li>
            </ul>
            <hr />

            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contect;
