import React, { useState, useEffect } from "react";
import "./Form.css";
import { newApplicant } from "../../api/applicantApi";
import { getAllJobOfferings } from "../../api/jobOfferingsAPI";

const Forms = ({ onFormSuccess }) => {
  // State variables
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    dof: "",
    gender: "",
    phone_number: "",
    job_offering_id: "",
    file: null, // Store file object here
  });
  const [loading, setLoading] = useState(false);
  const [jobOfferings, setJobOfferings] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState(""); // To display selected file name

  // Fetch job offerings when component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  // Function to fetch job offerings
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

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
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
      // Call the newApplicant API function with form data
      const response = await newApplicant(formData);
      // Call the onFormSuccess callback with user data
      onFormSuccess(response.user);
    } catch (error) {
      console.error("Error creating applicant:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setCredentials((prev) => ({
        ...prev,
        file: files[0], // Store only the first file
      }));
      setSelectedFileName(files[0].name); // Update selected file name
    } else {
      setCredentials((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle job selection change
  const handleJobChange = (e) => {
    const { value } = e.target;
    setCredentials((prev) => ({ ...prev, job_offering_id: value }));
  };

  return (
      /*Form page body  */
      <body className="container-form">
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
          <label htmlFor="dof">Date of Birth
          <input
            type="date"
            id="dof"
            name="dof"
            value={credentials.dof}
            onChange={handleChange}
            required // Required attribute added
          />
          </label>
        </div>
        <div className="input-box">
          <label htmlFor="gender">Gender</label>
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
            maxLength={15}
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
            // Display selected file name if available
            <p className="file-name">Selected file: {selectedFileName}</p>
          )}
        </div>
        {loading && <p>Loading...</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
    </body>
  );
};

export default Forms;
