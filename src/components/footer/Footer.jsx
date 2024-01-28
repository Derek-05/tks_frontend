import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section class="footer" id="Contact">
      <div class="footer-box">
        <h3>Services</h3>
        <a href="#">Custom Prosthetics</a>
        <a href="#"> Emotional Support</a>
        <a href="#">Updated technology</a>
        <a href="#">Ongoing care</a>
      </div>

      <div class="footer-box">
        <h3>Know us</h3>
        <a href="#Aboutus"> About us</a>
        <a href="#Ourstory"> Our story</a>
        <a href="#Team1">Team</a>
      </div>

      <div class="footer-box">
        <h3>Information</h3>
        <a href="#">Benefits</a>
        <a href="#">Job Offer</a>
        <a href="#"> Apply Now</a>
        <a href="#">Contact</a>
      </div>
    </section>
  );
};

export default Footer;
