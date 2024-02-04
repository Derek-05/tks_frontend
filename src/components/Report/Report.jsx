import React from "react";
import "./Report.css";

const Report = () => {
  return (
    <div className="container" id="Contact">
      <main className="row">
        <section className="col left">
          <div className="contactTitle">
            <br />
            <br />
            <br />
            <h2>Get In touch</h2>
            <p>
              Need assistance or want to get in touch? Our Contact Us page is
              the gateway to connect with our team. Drop us a message, and we'll
              get back to you promptly.
            </p>
          </div>
          <div className="contactInfo">
            <div className="iconGroup">
              <div className="icon">
                <i class="bx bx-phone"></i>
              </div>
              <div class="details">
                <span>Phone</span>
                <span>1+787-444-545</span>
              </div>
            </div>

            <div className="iconGroup">
              <div className="icon">
                <i class="bx bx-envelope"></i>
              </div>
              <div class="details">
                <span>Email</span>
                <span>techkidssolutions@gmail.com</span>
              </div>
            </div>

            <div className="iconGroup">
              <div className="icon">
                <i class="bx bx-location-plus"></i>
              </div>
              <div class="details">
                <span>Location</span>
                <span>Aguada, PR</span>
              </div>
            </div>
          </div>
        </section>

        <section className="col right">
          <form
            className="messageform"
            action="https://formsubmit.co/gc102406@gmail.com"
            method="POST"
          >
            <div className="inputGroup halfWidth">
              <input type="text" name="text" required="required" />
              <label>Your Name</label>
            </div>

            <div className="inputGroup halfWidth">
              <input type="email" name="email" required="required" />
              <label>Email</label>
            </div>

            <div className="inputGroup fullWidth">
              <input type="text" name="subject" required="required" />
              <label>Subject</label>
            </div>

            <div className="inputGroup fullWidth">
              <textarea required="required" name="reqired"></textarea>
              <label>Say something</label>
            </div>

            <div className="inputGroup fullWidth">
              <button>Send Message</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Report;
