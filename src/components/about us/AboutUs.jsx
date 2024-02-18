import React from "react";
import sunset from "../../assets/sunset.jpeg";
import OurStory2 from "../../assets/OurStory2.jpg";
import "./about_us.css";

const AboutUs = () => {
  return (
    <body className="body-about-us">
     
    <section className="About-us">
      
      <div className="About-us-img">

      

        <img src={sunset} alt="Little girl with her mom" />
      </div>
      <div className="About-us-text" id="Aboutus">
       


     
        <h5>About Us</h5>
        <br />
        <h2>Specialization of the prosthesis center</h2>
        <p>
          Our prothesis center specializes in providing a prothesis services to
          children according to their needs, being personalized and advanced for
          each child who requires a prothesis. Our mission is to be able to
          design adaptive protheses that allow adequate growth for each child.
          We seek to provide emotional support to both children and families
          during this process.Our vision is to become leaders in the field of
          protheses for children and also provide an environment where child can
          reach their full potential and feel safe with themselves through our
          prosthesis.
        </p>
      </div>

      <div className="Our-story-img">
        <br />
        <br />
        <br />
        <br/>
        <br/>
        <br/>
       
       

        <img src={OurStory2} alt="OurStory2" />
      </div>
      <div className="Our-story-text" id="Ourstory">
        

        <h5>Our Story</h5>
        <h2>
          Unveiling Our Essence
          
        </h2>
        <p>
          Founded with an inspiring purpose, our children`s prothesis company
          was born from a passion for improving lives. Since our beginnings, we
          have dedicated efforts to developing innovative prostheses. Each
          product has success stories that reflect our commitment to child
          welfare. We collaborate closely with charities and hospitals
          consolidating alliances that strengthen our mission. Looking to the
          future,we aspire to continue to be leaders in providing hope mobility
          to children with functional diversity.
        </p>
      </div>
    </section>
    </body>
  );
};

export default AboutUs;
