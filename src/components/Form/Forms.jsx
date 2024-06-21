import React, { useState, useEffect } from "react";
import "./Form.css";
import { newApplicant } from "../../api/applicantApi";
import { getAllJobOfferings } from "../../api/jobOfferingsAPI";

const Forms = ({ onFormSuccess }) => {
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    dof: "",
    gender: "",
    phone_number: "",
    job_offering_id: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [jobOfferings, setJobOfferings] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [ageError, setAgeError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAllJobOfferings();
      if (response && response.jobOfferings && Array.isArray(response.jobOfferings)) {
        setJobOfferings(response.jobOfferings);
      } else {
        console.error("Invalid response structure:", response);
        setJobOfferings([]);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const age = calculateAge(credentials.dof);
    if (age < 18) {
      setAgeError("You must be at least 18 years old.");
      return;
    }
    if (ageError || firstNameError || lastNameError) return;
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(credentials).forEach(([key, value]) => {
        if (key === "file" && value !== null) {
          formData.append("file", value);
        } else {
          formData.append(key, value);
        }
      });
      const response = await newApplicant(formData);
      onFormSuccess(response.user);
    } catch (error) {
      console.error("Error creating applicant:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setCredentials((prev) => ({
        ...prev,
        file: files[0],
      }));
      setSelectedFileName(files[0].name);
    } else {
      setCredentials((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (name === "dof") {
        validateAge(value);
      } else if (name === "first_name" || name === "last_name") {
        validateName(value, name);
      }
    }
  };

  const validateAge = (date) => {
    const birthdate = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    const dayDifference = today.getDate() - birthdate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    if (age < 18) {
      setAgeError("You must be at least 18 years old.");
    } else {
      setAgeError("");
    }
  };

  const validateName = (value, name) => {
    if (name === "first_name") {
      if (value && value[0] !== value[0].toUpperCase()) {
        setFirstNameError("First name must start with a capital letter.");
      } else {
        setFirstNameError("");
      }
    } else if (name === "last_name") {
      if (value && value[0] !== value[0].toUpperCase()) {
        setLastNameError("Last name must start with a capital letter.");
      } else {
        setLastNameError("");
      }
    }
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleJobChange = (e) => {
    const { value } = e.target;
    setCredentials((prev) => ({ ...prev, job_offering_id: value }));
  };

  return (
    <div className="container-form">
      <section className="container">
        <form onSubmit={handleFormSubmit} className="Newform">
          <h1>Apply Now</h1>
          <div className="input-box">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              value={credentials.first_name}
              onChange={handleChange}
              maxLength={100}
              required
            />
            {firstNameError && <div className="error">{firstNameError}</div>}
          </div>
          <div className="input-box">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              value={credentials.last_name}
              onChange={handleChange}
              maxLength={100}
              required
            />
            {lastNameError && <div className="error">{lastNameError}</div>}
          </div>

          <div className="input-box">
            <label htmlFor="dof">Date of Birth</label>
            <input
              type="date"
              id="dof"
              name="dof"
              value={credentials.dof}
              onChange={handleChange}
              required
            />
            {ageError && <div className="error">{ageError}</div>}
          </div>

          <div className="input-box">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              placeholder="Select Gender"
              value={credentials.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="donotspecify">Do not Specify</option>
            </select>
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@hotmail.com"
              value={credentials.email}
              onChange={handleChange}
              maxLength={100}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="7871234567"
              value={credentials.phone_number}
              onChange={handleChange}
              maxLength={10}
              required
            />
          </div>

          <div className="input-box">
            <label>Job Offers</label>
            <select
              onChange={handleJobChange}
              value={credentials.job_offering_id}
            >
              <option value="">Select Job</option>
              {jobOfferings.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>

          <div className="input-box">
            <label htmlFor="resume">Resume</label>
            <input
              type="file"
              name="file"
              accept="application/pdf"
              onChange={handleChange}
              required
            />
            {selectedFileName && (
              <p className="file-name">Selected file: {selectedFileName}</p>
            )}
          </div>

          {loading && <p>Loading...</p>}
          <button type="submit" disabled={loading || ageError || firstNameError || lastNameError}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Forms;
