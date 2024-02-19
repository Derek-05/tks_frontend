import React, { useState } from "react";
import "./advantage.css";

import Benefit1 from "../../assets/Benefit1.jpeg";
import Benefit2 from "../../assets/Benefit2.jpeg";
import Benefit3 from "../../assets/Benefit3.jpeg";
import Benefit4 from "../../assets/Benefit4.jpeg";
import Tree from "../../assets/Tree.jpeg";
import Employee1 from "../../assets/Employee1.jpeg";
import Employee2 from "../../assets/Employee2.jpeg";
import Finance2 from "../../assets/Finance2.jpg";
import Finanza1 from "../../assets/Finanza1.jpeg";
import Familia1 from "../../assets/Familia1.jpeg";
import Familia2 from "../../assets/Familia2.jpeg";
import Desarrollopersonal1 from "../../assets/Desarrollopersonal1.jpeg";
import Desarrollopersonal2 from "../../assets/Desarrollopersonal2.jpeg";
import Desarrollopersonal3 from "../../assets/Desarrollopersonal3.jpeg";
import Bienestar1 from "../../assets/Bienestar1.jpeg";
import Bienestar2 from "../../assets/Bienestar2.jpeg";
import Bienestar3 from "../../assets/Bienestar3.jpeg";
const Advantage = () => {
  const images2 = [
    Finanza1,
    Finance2,
    Benefit1,
    
  ]; 
  const images1 = [
    Bienestar1,
    Bienestar2,
    Bienestar3,
    
    
  ];

  const images3 = [
   Familia1,
   Familia2,
   Benefit2,
   
    
  ];

  const images4 = [
    Desarrollopersonal1,
    Desarrollopersonal2,
    Desarrollopersonal3,
    
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images2.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images2.length) % images2.length
    );
    
    
  };
  
  
   
   
  

  
  return (
    <section className="Benefits-heading" id="Benefits">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2> OUR BENEFITS</h2>
      <div className="card-container">
        <div className="card">
          <img src={Benefit4} alt="Health and Well-being" />
          <div className="card-content">
            <h1>Health and Well-being</h1>
            <a href="#Benefits-Info" class="card-button">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <img src={Benefit3} alt="Professional Development" />
          <div className="card-content">
            <h1>Professional Development</h1>
            <a href="#Benefits-Info" class="card-button">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <img src={Benefit2} alt="Work-Family Balance" />
          <div className="card-content">
            <h1> Work-Family Balance</h1>
            <a href="#Benefits-Info" class="card-button">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <img src={Benefit1} alt="Financial-Incentives" />
          <div className="card-content">
            <h1>Financial Incentives</h1>
            <a href="#Benefits-Info" class="card-button">
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
              In our pediatric prosthetics clinic, we are dedicated to ensuring the well-being of our team. We provide dental coverage, 
              professional development programs, flexible work arrangements, and financial incentives to create an environment that promotes
              health, growth, and work-family balance. Additionally, we offer mental health resources and counseling services to support our
              team members through any challenges they may face. In our clinic, we don't just create prosthetics for children; we also foster
              a space where everyone thrives, recognizing the importance of holistic support for our staff's overall well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Information-text" id="Benefits-Info">
        <h5> Benefits Information</h5>
      </div>
      <div className="advantage-container">
        <div className="card1">
          <div className="slider">
            <div
              className="slider-inner"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images2.map((image, index) => (
                <div className="slider-item" key={index}>
                  <img src={image} alt={`Finance-images ${index + 1}`}  /> 
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
             At our clinic, we offer different benefits to make sure our employees are happy. We give bonuses 
             based on performance, share profits, help with retirement savings, and offer discounts on services.
              These things help keep our staff motivated, financially secure, and connected to our clinic's goals.
            </p>
          </div>
        </div>
        <div className="card1">
          <div className="slider">
            <div
              className="slider-inner"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images1.map((image2, index) => (
                <div className="slider-item" key={index}>
                  <img src={image2} alt={`Well-being-images ${index + 1}`} />
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
              {images3.map((image2, index) => (
                <div className="slider-item" key={index}>
                  <img src={image2} alt={`Family-images ${index + 1}`} />
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
              {images4.map((image2, index) => (
                <div className="slider-item" key={index}>
                  <img src={image2} alt={`Career Development ${index + 1}`} />
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
            <h3>Career Development</h3>
            <p>
              At our clinic empowers employees with continuous learning
              initiatives. This includes ongoing training programs, financial
              support for related education through tuition reimbursement, and
              mentorship opportunities.  our workforce to progress in their careers
              within the clinic, emphasizing our commitment to their success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
