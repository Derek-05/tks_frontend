import React, { useState, useEffect } from "react";
import "./Form.css";
import { newApplicant } from "../../api/applicantApi";
import { getAllJobOfferings } from "../../api/jobOfferingsAPI";

const Forms = ({ onFormSuccess }) => {
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    job_offering_id: "",
    file_name: "",
    file_type: "",
    file_size: "",
    data: "",
  });

  const [loading, setLoading] = useState(false);
  const [jobOfferings, setJobOfferings] = useState([]);
  const [fileName, setFileName] = useState("")

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
      const formData = new FormData();
      Object.entries(credentials).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Call the onFormSuccess callback with user data
      const response = await newApplicant(formData);
      console.log("Applicant created successfully:", response);
      onFormSuccess(response.user);
    } catch (error) {
      console.error("Error creating applicant:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    // If the input is a file input
    if (name === "cv_file") {
      // Set file name, type, size, and data in credentials
      const file = files && files[0];
      if (file) {
        const fileSize = file.size; // Get the file size in bytes
        const reader = new FileReader();
        reader.onloadend = () => {
          // After reading the file, set the data in credentials
          setCredentials((prev) => ({
            ...prev,
            file_name: file.name,
            file_type: file.type,
            file_size: fileSize,
          }));
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      } else {
        // If no file is selected, reset the file-related fields
        setCredentials((prev) => ({
          ...prev,
          file_name: "",
          file_type: "",
          file_size: "",
          data: "",
        }));
      }
      // Set file name for display
      setFileName(file ? file.name : "");
    } else {
      // For other input fields, update credentials as usual
      setCredentials((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  
  
  const handleJobChange = (e) => {
    const { value } = e.target;
    setCredentials((prev) => ({ ...prev, job_offering_id: value }));
  };

  const handleUndo = () => {
    setCredentials((prev) => ({ ...prev, cv_file: null }));
    setFileName("");
    // Reset file input value
    document.getElementById("cv_file").value = "";
  };
  

  return (
    <section className="container"> 
     
      <form onSubmit={handleFormSubmit} className="Newform" >
        <h1>Apply Now</h1>
        <div className="input-box" >
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First Name"
            value={credentials.first_name}
            onChange={handleChange}
            required
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
            required
          />
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
              required
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
              >
                <option value="">Select Job</option>
                {jobOfferings.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>
            {credentials.job_offering_id && (
              <div className="input-box address">
                <label htmlFor="resume">Resume</label>
                {fileName && (
                  <div className="filename">
                    <p>Selected file: {fileName}</p>
                    <button type="button" onClick={handleUndo}>
                      Undo
                    </button>
                  </div>
                )}
                <div className="column">
                  <div className="CVbtn">
                    <input
                      type="file"
                      name="cv_file"
                      placeholder="Upload CV"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            )}
            <br />
            <br />
            {loading && <p>Loading...</p>}
            <button
              type="submit"
              className="containerbtn"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Forms;
