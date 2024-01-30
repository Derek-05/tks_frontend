import React from "react";
import "./advantage.css";

import Benefit1 from "../../assets/Benefit1.jpeg";
import Benefit2 from "../../assets/Benefit2.jpeg";
import Benefit3 from "../../assets/Benefit3.jpeg";
import Benefit4 from "../../assets/Benefit4.jpeg";
import Wellbeing from "../../assets/Wellbeing.jpeg";
import Tree from "../../assets/Tree.jpeg";
import girl2 from "../../assets/girl2.jpeg";
import Employee1 from "../../assets/Employee1.jpeg";
import Employee2 from "../../assets/Employee2.jpeg";
import Positivesign from "../../assets/Positivesign.jpeg";
import Development from "../../assets/Devolopment.jpeg";
import Finance2 from "../../assets/Finance2.jpg";

const Advantage = () => {
  return (
    <section className="Benefits-heading">
      <h2> Our Benefits</h2>
      <div className="card-container">
        <div className="card">
          <img src={Benefit4} alt="Health and Well-being" />
          <div className="card-content">
            <h1>Health and Well-being</h1>
            <a href="#Info" class="card-button">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <img src={Benefit3} alt="Professional Development" />
          <div className="card-content">
            <h1>Professional Development</h1>
            <a href="#Info" class="card-button">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <img src={Benefit2} alt="Work-Family Balance" />
          <div className="card-content">
            <h1> Work-Family Balance</h1>
            <a href="#Info" class="card-button">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <img src={Benefit1} alt="Financial-Incentives" />
          <div className="card-content">
            <h1>Financial Incentives</h1>
            <a href="#Info" class="card-button">
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="container"></div>
      <div className="Information">
        <div class="Information-img">
          <img src={Employee1} alt="Employee" />
        </div>
        <div className="Information-text">
          <h5> Empower Lives, Inspire Smiles</h5>
          <h2>Join Our Team Today</h2>
          <p>
            In our pediatric prosthetics clinic, we are dedicated to ensuring
            the well-being of our team. We provide dental coverage, professional
            development programs, flexible work arrangements, and financial
            incentives to create an environment that promotes health, growth,
            and work-family balance. In our clinic, we don't just create
            prosthetics for children; we also foster a space where everyone
            thrives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
