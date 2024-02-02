import React, { useState } from "react";
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
  const images = [
    Tree,
    Positivesign,
    Development,
    Finance2,
    Employee2,
    Wellbeing,
  ]; // Agrega más imágenes según sea necesario
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };
  return (
    <section className="Benefits-heading" id="Benefits">
      <br />
      <br />
      <br />
      <br />
      <br />
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
        <div className="container">
          <div className="Information">
            <div class="Information-img">
              <img src={Employee1} alt="Employee" />
            </div>
            <div className="Information-text">
              <h5> Inspire Smiles</h5>
              <h2>Join Our Team Today</h2>
              <p>
                In our pediatric prosthetics clinic, we are dedicated to
                ensuring the well-being of our team. We provide dental coverage,
                professional development programs, flexible work arrangements,
                and financial incentives to create an environment that promotes
                health, growth, and work-family balance. In our clinic, we don't
                just create prosthetics for children; we also foster a space
                where everyone thrives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Information-text">
        <h5> Benefits Information</h5>
      </div>
      <div className="advantage-container">
        <div className="card1">
          <div className="slider">
            <div
              className="slider-inner"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div className="slider-item" key={index}>
                  <img src={image} alt={`Slider ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="slider-controls">
            <button className="slider-button" onClick={prevSlide}>
              <i class="bx bx-left-arrow-alt"></i>
            </button>
            <button className="slider-button" onClick={nextSlide}>
              <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <div className="card-content1">
            <h3>Financial </h3>
            <p>
              At our clinic encompass various incentives aimed at ensuring
              employee satisfaction. Through initiatives like performance-based
              bonuses, profit-sharing,retirement savings plans, and service
              discounts, we strive tomotivate, align, secure long-term financial
              stability, and strengthen the bond between our staff and the
              clinic's mission.
            </p>
          </div>
        </div>
        <div className="card1">
          <div className="slider">
            <div
              className="slider-inner"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div className="slider-item" key={index}>
                  <img src={image} alt={`Slider ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="slider-controls">
            <button className="slider-button" onClick={prevSlide}>
              <i class="bx bx-left-arrow-alt"></i>
            </button>
            <button className="slider-button" onClick={nextSlide}>
              <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <div className="card-content1">
            <h3> Well being</h3>
            <p>
              At our clinic, we prioritize the health and well-being of our team
              members. We offer comprehensive benefits that encompass dental
              coverage, yoga and fitness programs, check-up assurance, and paid
              health leaves. We understand the importance of fostering a work
              environment that supports both physical and mental wellness
              lifestyle.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="advantage-container">
        <div className="card1">
          <div className="slider">
            <div
              className="slider-inner"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div className="slider-item" key={index}>
                  <img src={image} alt={`Slider ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="slider-controls">
            <button className="slider-button" onClick={prevSlide}>
              <i class="bx bx-left-arrow-alt"></i>
            </button>
            <button className="slider-button" onClick={nextSlide}>
              <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <div className="card-content1">
            <h3>Work-Family</h3>
            <p>
              At our clinic, fostering a supportive environment for our
              employees. With flexible work schedules, on-site childcare
              services, paid parental leave, and additional days off for
              family-related situations, we aim to create a workplace that
              recognizes and accommodates the diverse needs of our staff,
              ensuring a harmonious balance between work and family life.
            </p>
          </div>
        </div>
        <div className="card1">
          <div className="slider">
            <div
              className="slider-inner"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div className="slider-item" key={index}>
                  <img src={image} alt={`Slider ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="slider-controls">
            <button className="slider-button" onClick={prevSlide}>
              <i class="bx bx-left-arrow-alt"></i>
            </button>
            <button className="slider-button" onClick={nextSlide}>
              <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <div className="card-content1">
            <h3>Carrer Development</h3>
            <p>
              At our clinic empowers employees with continuous learning
              initiatives. This includes ongoing training programs, financial
              support for related education through tuition reimbursement, and
              mentorship opportunities. Additionally, internal advancement
              policies motivate our workforce to progress in their careers
              within the clinic, emphasizing our commitment to their success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
