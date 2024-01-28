import React from "react";
import {
  ortopeda,
  evaluadora,
  fisioterapeuta,
  fabricador,
  biomedico,
  psicologa,
  Insurance,
  customer,
  InvestigadorClinico,
  Cirujano2,
} from "./imports";
import "./team.css";

const Team = () => {
  return (
    <section>
      <div className="Team" id="Team">
        <div className="Teamheading" id="Team1">
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
            <h3> Physiotherapist</h3>
          </div>
          <div className="row">
            <div className="row-img">
              <img src={ortopeda} alt="Orthopedics" />
            </div>
            <h3>Orthopedist</h3>
          </div>

          <div className="row">
            <div className="row-img">
              <img src={Insurance} alt="Insurance" />
            </div>
            <h3>Insurance</h3>
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
              <img src={fabricador} alt=" Prosthesis manufacturer" />
            </div>
            <h3> Prosthesis manufacturer</h3>
          </div>

          <div className="row">
            <div className="row-img">
              <img src={biomedico} alt="Physiotherapist" />
            </div>
            <h3>Biomedical engineer</h3>
          </div>

          <div className="row">
            <div className="row-img">
              <img src={Cirujano2} alt="Prosthetic surgeon" />
            </div>
            <h3>Prosthetic surgeon</h3>
          </div>

          <div className="row">
            <div className="row-img">
              <img src={InvestigadorClinico} alt="Clinical researcher" />
            </div>
            <h3>Clinical researcher</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
