import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section class="footer">
      <div class="footer-box">
        <h3>Services</h3>
        <a href="#Prosthetic">Custom Prosthetics</a>
        <a href="#"> Our Services</a>
        <a href="#Design">Prosthesis designs</a>
      </div>

      <div class="footer-box">
        <h3>Know us</h3>
        <a href="#Aboutus"> About us</a>
        <a href="#Ourstory"> Our story</a>
        <a href="#Team1">Team</a>
      </div>

      <div class="footer-box">
        <h3>Information</h3>
        <a href="Benefits">Benefits</a>
        <a href="#">Job Offer</a>
        <a href="#"> Apply Now</a>
        <a href="Contact">Contact</a>
      </div>
    </section>
  );
};

export default Footer;
