import React from "react";
import "./prosthetics.css";
import pasiva from "../../assets/protesispasiva.jpg";
import myoelectric from "../../assets/arm.jpeg";
import basketball from "../../assets/basketball.jpeg";
import clinic from "../../assets/clinic.jpeg";
import soccer from "../../assets/soccer.jpeg";
import street from "../../assets/street.jpeg";
import { homepage } from "./imports";

const Prosthetics = () => {
  return (
    <body className="prosthetics-main">
      
    <section>
      <div className="Types-of-prostheses" id="Prosthetic">
        <div class="center-text">
          <h2>TYPES OF PROSTHESES</h2>
        </div>
        <br />
        <br />
        <br />
        <div class="prosthetics">
          <div class="prosthetics-img">
            <img src={pasiva} alt="pasiva" />
          </div>
          <div class="prosthetics-text">
            <h5>Passive Prosthetics</h5>
            <h2>They are designed as a cosmetic Prothesis</h2>
            <p>
            This type of prosthesis, known as a non-active or static prosthesis, does not incorporate mechanisms or 
            components that enable active movement. Instead, its primary purpose lies in enhancing the functionality 
            of the affected or pointed side of the body. Non-active prostheses are designed to provide essential support 
            and facilitate the execution of specific activities that may require stability, balance, or additional assistance. 
            In addition, they are often customized to match the individual's anatomy and lifestyle.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div class="prosthetics">
          <div class="prosthetics-img">
            <br/>
            <br/>
            <img src={myoelectric} alt="Myoelectric Prosthetics" />
          </div>
          <div class="prosthetics-text">
            <h5> Myoelectric Prosthetics</h5>
            <h2> They are driven by voluntary muscle contractions</h2>
            <p>
              {" "}
              Activity-specific prostheses are designed for an activity in which the residual limb without a prosthesis, 
              or passive, mechanical, or myoelectric prosthesis, could damage the prosthesis or simply cannot or is not 
              suitable for the specific activity. For example, in the execution of sports or other hobbies that require a 
              very specific subjection. These specialized prostheses are meticulously crafted to withstand the unique demands
              and stresses associated with particular activities, ensuring durability and optimal performance during pursuits 
              such as running, swimming, or engaging in challenging physical endeavors.
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
            <h5> Specific Prostheses </h5>
            <h2> They ara designed for recrational activities</h2>
            <p>
              {" "}
              Activity-specific prostheses are meticulously crafted to accommodate scenarios 
              where the natural residual limb, or conventional passive, mechanical, or myoelectric 
              prostheses, may pose a risk of damaging the prosthesis, or where they prove inadequate 
              for the demands of the particular activity. These specialized prosthetic devices find
               application in various pursuits such as sports or hobbies that necessitate precise and 
               tailored support, ensuring optimal performance and safety for the wearer.are engineered
                with precision to address the unique challenges presented by specific activities, ensuring 
                optimal functionality and durability. They offer tailored solutions for individuals engaged 
                in sports or hobbies.
            </p>
          </div>
        </div>
      </div>
      <div className="Prosthetics-body">
      <section className="prostheticsvariants">
        <div className="center-text" id="Design">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>CHILDREN'S PROSTHESIS DESIGNS</h2>
        </div>

        <div className="variants-content">
          <div className="box">
            <img src={homepage} alt=" kid running" />
          </div>

          <div className="box">
            <img src={soccer} alt="kid playing soccer" />
          </div>

          <div className="box">
            <img src={street} alt="kid in a street" />
          </div>

          <div className="box">
            <img src={clinic} alt="kid in a clinic" />
          </div>
        </div>
      </section>
      <br />
      <br />
      <br/>
      <br/>
      <br/>
     

      <div className="container3">
    <div className="column-left3">
       <h3>Ready to be part of our team</h3>
       <p>"Join us and help us  make a better world"</p>
       <br/>
       <br/>
       <br/>
    </div>
    <div className="column-right3">
    <button className="btn3">Job Offer</button>
    </div>

    
</div>
</div>

    </section>
    </body>
   
  );
};

export default Prosthetics;
