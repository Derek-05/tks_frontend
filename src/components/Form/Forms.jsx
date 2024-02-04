import React from "react";
import "./Form.css";

const Forms = () => {
  return (
    <section className="container">
      <form action="#" className="Newform">
        <h1>Apply Now</h1>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" required />
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="column">
          <div className="input-box">
            <label>Email</label>
            <input type="text" placeholder="example@gmail.com" required />
          </div>
          <div className="input-box">
            <label>Phone Number</label>
            <input type="text" placeholder="123-345-678" required />
          </div>
        </div>

        <div className="input-box addres">
          <label>Job Offers</label>
          <div className="column">
            <div className="select-box">
              <select>
                <option>Job</option>
                <option>Psychologist</option>
                <option>Prosthesis manufacturer</option>
                <option>Biomedical engineer</option>
                <option>Prosthetic surgeon</option>
              </select>
            </div>
            <div className="CVbtn">
              <input type="file" placeholder="Upload CV" required />
            </div>
          </div>
        </div>

        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check">Male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check">Female</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check">Other</label>
            </div>
          </div>
        </div>
        <div className="containerbtn">
          <br />
          <br />
          <button>Sumbit</button>
        </div>
      </form>
    </section>
  );
};

export default Forms;
