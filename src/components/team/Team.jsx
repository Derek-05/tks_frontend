import React from "react";
import {
  ortopeda,
  evaluadora,
  fisioterapeuta,
  fabricador,
  psicologa,
  Insurance,
  customer,
  Cirujano2,
} from "./imports";
import "./team.css";

const Team = () => {
  return (
    <section>
      <div className="Team" id="Team">
        <div className="Teamheading" id="Team1">
          <br />
          <br />
          <br />
          <br />
          <br />
          
          <h1>
            <strong>Team</strong>
          </h1>
        </div>
      </div>
      <br />
      <br />

      <div className="feature">
        <div className="feature-content">
          <div className="row">
            <div className="row-img">
              <img src={fisioterapeuta} alt="Physiotherapist" />
            </div>
            <h3> Physical Therapist</h3>
          </div>
          <div className="row">
            <div className="row-img">
              <img src={ortopeda} alt="Orthopedics" />
            </div>
            <h3>Orthopedist</h3>
          </div>

          <div className="row">
            <div className="row-img">
              <img src={Insurance} alt="Nurse" />
            </div>
            <h3>Nurse</h3>
          </div>

          <div className="row">
            <div className="row-img">
              <img src={psicologa} alt="Psychologist" />
            </div>
            <h3>Psychologist</h3>
          </div>

          <div className="row">
            <div className="row-img">
              <img src={evaluadora} alt="Evaluator" />
            </div>
            <h3>Evaluator</h3>
          </div>

          <div className="row">
            <div className="row-img">
              <img src={customer} alt="Customer services" />
            </div>
            <h3>Customer Services</h3>
          </div>
          <div className="row">
            <div className="row-img">
              <img src={fabricador} alt="Secretary" />
            </div>
            <h3> Secretary</h3>
          </div>

         

          <div className="row">
            <div className="row-img">
              <img src={Cirujano2} alt="Prosthetic surgeon" />
            </div>
            <h3>Prosthetic surgeon</h3>
          </div>

          
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </section>
  );
};

export default Team;
