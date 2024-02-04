import React from "react";
import "./prosthetics.css";
import pasiva from "../../assets/protesispasiva.jpg";
import myoelectric from "../../assets/arm.jpeg";
import basketball from "../../assets/basketball.jpeg";
import patio from "../../assets/patio.jpeg";
import clinic from "../../assets/clinic.jpeg";
import soccer from "../../assets/soccer.jpeg";
import street from "../../assets/street.jpeg";

const Prosthetics = () => {
  return (
    <section>
      <div className="Types-of-prostheses" id="Prosthetic">
        <div class="center-text">
          <h2>Types of prostheses</h2>
        </div>
        <br />
        <br />
        <br />
        <div class="prosthetics">
          <div class="prosthetics-img">
            <img src={pasiva} alt="pasiva" />
          </div>
          <div class="prosthetics-text">
            <h5>Passive prosthetics</h5>
            <h2>They are designed as a cosmetic Prothesis</h2>
            <p>
              This type of prosthesis, known as a non-active or static
              prosthesis, does not incorporate mechanisms or components that
              enable active movement. Instead, its primary purpose lies in
              enhancing the functionality of the affected or pointed side of the
              body. Non-active prostheses are designed to provide essential
              support and facilitate the execution of specific activities that
              may require stability, balance, or additional assistance.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div class="prosthetics">
          <div class="prosthetics-img">
            <img src={myoelectric} alt="basketball" />
          </div>
          <div class="prosthetics-text">
            <h5> Specific Prostheses for an activity</h5>
            <h2> They ara designed for recrational activities</h2>
            <p>
              {" "}
              Activity-specific protheses are designed for an activity in which
              the residual limb without a prosthesis,or passive, mechanical or
              myoelectric prothesis,could damage the prothesis or simply cannot
              or is not suitable for the specific activity. For example, in the
              execution of sports or other hobbies that require a very specific
              subjection.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="prosthetics">
          <div class="prosthetics-img">
            <img src={basketball} alt="basketball" />
          </div>
          <div class="prosthetics-text">
            <h5> Specific Prostheses for an activity</h5>
            <h2> They ara designed for recrational activities</h2>
            <p>
              {" "}
              Activity-specific protheses are designed for an activity in which
              the residual limb without a prosthesis,or passive, mechanical or
              myoelectric prothesis,could damage the prothesis or simply cannot
              or is not suitable for the specific activity. For example, in the
              execution of sports or other hobbies that require a very specific
              subjection.
            </p>
          </div>
        </div>
      </div>

      <section class="prostheticsvariants">
        <div class="center-text" id="Design">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Children's prosthesis designs</h2>
        </div>

        <div class="variants-content">
          <div class="box">
            <img src={patio} alt="patio" />
          </div>

          <div class="box">
            <img src={soccer} alt="soccer" />
          </div>

          <div class="box">
            <img src={street} alt="street" />
          </div>

          <div class="box">
            <img src={clinic} alt="clinic" />
          </div>
        </div>
      </section>
      <br />
      <br />

      <div class="newsletter">
        <div class="newsletter-content">
          <div class="newsletter-text">
            <br />
            <br />
            <br />
            <br />
            <h2>Ready to be part of our team</h2>
            <p> Join us and help us make a better world</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prosthetics;
