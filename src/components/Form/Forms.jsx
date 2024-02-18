import React, { useState, useEffect } from "react";
import "./Form.css";
import { newApplicant } from "../../api/applicantApi";
import { getAllJobOfferings } from "../../api/jobOfferingsAPI";

const Forms = ({ onFormSuccess }) => {
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    dof: "",
    gender: "",
    email: "",
    phone_number: "",
    job_offering_id: "",
    education: "",
    skills: "",
    experience: "",
    achievements: "",
   });

  const [loading, setLoading] = useState(false);
  const [jobOfferings, setJobOfferings] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAllJobOfferings();
      if (
        response &&
        response.jobOfferings &&
        Array.isArray(response.jobOfferings)
      ) {
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
    setLoading(true);

    try {
      // Call the onFormSuccess callback with user data
      const response = await newApplicant(credentials);
      console.log("Applicant created successfully:", response);
      onFormSuccess(response.user);
    } catch (error) {
      console.error("Error creating applicant:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limit input length for certain fields
    const maxLength = {
      first_name: 100,
      last_name: 100,
      email: 100,
      phone_number: 15,
      education: 500,
      skills: 200,
      achievements: 200,
      experience: 500,
    };

    if (value.length > maxLength[name]) {
      return; // Don't update state if character limit exceeded
    }

    setCredentials((prev) => ({
      ...prev,
      [name]: name === "sex" ? e.target.value : value,
    }));
  };

  const handleJobChange = (e) => {
    const { value } = e.target;
    setCredentials((prev) => ({ ...prev, job_offering_id: value }));
  };

  return (
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
            maxLength={100} // Limiting input length
            required // Required attribute added
          />
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
            maxLength={100} // Limiting input length
            required // Required attribute added
          />
        </div>
        <div className="input-box">
          <label htmlFor="dof">Date of Birth</label>
          <input
            type="date"
            id="dof"
            name="dof"
            value={credentials.dof}
            onChange={handleChange}
            required // Required attribute added
          />
        </div>
        <div className="input-box">
          <label htmlFor="sex">Gender</label>
          <select
            id="gender"
            name="gender"
            placeholder="Select Gender"
            value={credentials.gender}
            onChange={handleChange}
            required // Required attribute added
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="column">
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@hotmail.com"
              value={credentials.email}
              onChange={handleChange}
              maxLength={100} // Limiting input length
              required // Required attribute added
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
              maxLength={15} // Limiting input length
              required // Required attribute added
            />
          </div>
        </div>
        <div className="input-box address">
          <label>Job Offers</label>
          <div className="column">
            <div className="select-box">
              <select
                onChange={handleJobChange}
                value={credentials.job_offering_id}
                required // Required attribute added
              >
                <option value="">Select Job</option>
                {jobOfferings.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="input-box">
          <label htmlFor="description">Education</label>
          <textarea
            id="education"
            name="education"
            value={credentials.education}
            onChange={handleChange}
            placeholder="Your Education"
            maxLength={500} // Limiting input length
            required // Required attribute added
          />
        </div>

        <div className="input-box">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            placeholder="Your skills"
            value={credentials.skills}
            onChange={handleChange}
            maxLength={200} // Limiting input length
            required // Required attribute added
          />
        </div>
        <div className="input-box">
          <label htmlFor="experience">Experience</label>
          <textarea
            id="experience"
            name="experience"
            value={credentials.experience}
            onChange={handleChange}
            placeholder="Your experience"
            maxLength={500} // Limiting input length
            required // Required attribute added
            ></textarea>
        </div>
        <div className="input-box">
          <label htmlFor="achievements">Achievements </label>
          <input
            type="text"
            id="achievements"
            name="achievements"
            placeholder="Your achievements"
            value={credentials.achievements}
            onChange={handleChange}
            maxLength={200} // Limiting input length
            required // Required attribute added
          />
        </div>
        
        <br />
        <br />
        {loading && <p>Loading...</p>}
        <button type="submit" className="containerbtn" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default Forms;
