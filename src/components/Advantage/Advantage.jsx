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
      <div className="container">
        <br />
        <br />
        <br />
      </div>
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

      <div className="container mt-5">
        <div className="Information-heading" id="Info">
          <h2>Benefits Information</h2>
          <br />
          <br />
          <br />
        </div>
        <div className="d-flex justify-content-center">
          <div className="card-container1">
            <div className="card1">
              <div className="card-content1">
                <h1>Health and Well being</h1>
                <p>
                  Promoting health and well-being in the workplace provides
                  significant benefits, such as improving quality of life,
                  reducing stress, and boosting morale. This results in
                  healthier, more productive, and satisfied employees,
                  contributing to a balanced and sustainable work environment.
                </p>
                <div className="container mt-5">
                  <div
                    id="myCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={Tree}
                          className="d-block w-100"
                          alt="First slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Employee2}
                          className="d-block w-100"
                          alt="Second slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Finance2}
                          className="d-block w-100"
                          alt="Third slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Positivesign}
                          className="d-block w-100"
                          alt="Fourth slide"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#myCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#myCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card-content1">
                <h1>Professional Development</h1>
                <p>
                  Professional development enhances employee skills and career
                  growth, leading to a motivated workforce. It improves
                  engagement, expertise, and contributes to organizational
                  success. This commitment also attracts top talent, fostering a
                  culture of continuous learning.
                </p>
                <div className="container mt-5">
                  <div
                    id="myCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={Tree}
                          className="d-block w-100"
                          alt="First slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Employee2}
                          className="d-block w-100"
                          alt="Second slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Finance2}
                          className="d-block w-100"
                          alt="Third slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Positivesign}
                          className="d-block w-100"
                          alt="Fourth slide"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#myCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#myCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <div className="card-container1">
            <div className="card1">
              <div className="card-content1">
                <h1>Financial Incentive</h1>
                <p>
                  Financial incentives play a pivotal role in employee
                  satisfaction and motivation. They include bonuses, salary
                  increases, and other monetary rewards that recognize and
                  appreciate employees' contributions. Offering competitive
                  financial incentives not only attracts top talent but also
                  enhances employee loyalty and engagement. This investment in
                  financial well-being contributes to a positive workplace
                  culture, ultimately driving performance and organizational
                  success.
                </p>
                <div className="container mt-5">
                  <div
                    id="myCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={Tree}
                          className="d-block w-100"
                          alt="First slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Employee2}
                          className="d-block w-100"
                          alt="Second slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Finance2}
                          className="d-block w-100"
                          alt="Third slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Positivesign}
                          className="d-block w-100"
                          alt="Fourth slide"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#myCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#myCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card-content1">
                <h1>Work-Family Balance</h1>
                <p>
                  Maintaining a healthy work-family balance is crucial for
                  employee well-being. It reduces stress, enhances job
                  satisfaction, and promotes overall happiness. Organizations
                  that prioritize work-life balance foster a positive and
                  supportive environment, resulting in more content and
                  committed employees. This approach contributes to increased
                  productivity and employee retention, creating a harmonious
                  workplace culture.
                </p>
                <div className="container mt-5">
                  <div
                    id="myCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={Tree}
                          className="d-block w-100"
                          alt="First slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Employee2}
                          className="d-block w-100"
                          alt="Second slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Finance2}
                          className="d-block w-100"
                          alt="Third slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Positivesign}
                          className="d-block w-100"
                          alt="Fourth slide"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#myCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#myCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
