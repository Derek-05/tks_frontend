import React, { useState, useEffect } from "react";
import "./Table.css";

import { getAllApplicants} from "../../api/applicantApi"
import { getAllUsers} from "../../api/userApi"
import { getAllJobOfferings, deleteJobOffering, addJobOffering  } from "../../api/jobOfferingsAPI";
import { getTokenFromLocalStorage, getUserProfile } from "../../api/authApi";

const Table = () => {
  // State variables
  const [content, setContent] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [jobOfferList, setJobOfferList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: "",
    qualifications: "",
    available: true,
  });
  

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch applicants data
        const applicantsResponse = await getAllApplicants();
        setEmployeeList(applicantsResponse.applicants);

        // Fetch users data
        const usersResponse = await getAllUsers();
        setUserList(usersResponse.data.users);

        // Fetch job offers data
        const jobOffersResponse = await getAllJobOfferings();
        setJobOfferList(jobOffersResponse.jobOfferings);

        // Fetch user profile and update form data with user ID
        
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here
      }
    };

    fetchData();

    return () => {}; // Cleanup function
  }, []);


  // Event handlers
  const handleApplicantsClick = () => setContent("applicants");
  const handleJobsClick = () => setContent("jobOffers");
  const handleJobFormClick = () => setContent("jobForm");

  const handleEdit = (index) => {
    // Implement edit functionality
  };

  const handleDelete = (index) => {
    // Implement delete functionality
  };

  const handleJobDelete = async (id) => {
    try {
      await deleteJobOffering(id);
      // If the deletion is successful, update the job offer list by refetching
      const jobOffersResponse = await getAllJobOfferings();
      setJobOfferList(jobOffersResponse.jobOfferings);
    } catch (error) {
      console.error("Error deleting job offering:", error);
      // Handle error, maybe show a message to the user
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  
      console.log("Form data before submitting:", formData);
  
      // Añadir la oferta de trabajo
      await addJobOffering(formData);
  
      // Si la creación es exitosa, actualiza la lista de ofertas de trabajo
      const jobOffersResponse = await getAllJobOfferings();
      setJobOfferList(jobOffersResponse.jobOfferings);
  
      // Restablece los datos del formulario
      setFormData({
        title: "",
        description: "",
        salary: "",
        qualifications: "",
        available: true
      });
    } catch (error) {
      console.error("Error creating job offering:", error);
    }
  };



  // Render sidebar
  const renderSidebar = () => (
    <nav className={`sidebar ${content ? "thin" : ""}`}>
      <div className="logo-name-container">
        <nav className="sidebar">
          <div className="logo-name">
            <br />
            <br />
            <br />
            <br />
            <br />
            <ul>
              <li>
                <a href="#" className="logo_name">
                  <i className="bx bxs-dashboard"></i>
                  <span className="logo_name">Admin Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="logo_name" onClick={handleApplicantsClick}>
                  <i className="bx bxs-user-account"></i>
                  <span className="logo_name">Applicants</span>
                </a>
              </li>
              <li>
                <a href="#" className="logo_name" onClick={handleJobsClick}>
                  <i className="bx bx-briefcase-alt"></i>
                  <span className="logo_name">Job Offers</span>
                </a>
              </li>
              <li>
                <a href="#" className="logo_name" onClick={handleJobFormClick}>
                  <i className="bx bx-briefcase-alt"></i>
                  <span className="logo_name">Post Job</span>
                </a>
              </li>
              <li>
                <a href="home" className="logout">
                  <i className="bx bx-log-out"></i>
                  <span className="logo_name">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {content && (
        <div className="restore-button" onClick={() => setContent("")}>
          <i className="bx bx-menu"></i>
        </div>
      )}
    </nav>
  );

  // Render content based on selected tab
  const renderContent = () => (
    <div className="heading1">
      
      <div className="table-container">
        {content === "applicants" && renderApplicantsTable()}
        {content === "jobOffers" && renderJobOffersTable()}
        {content === "jobForm" && renderJobForm()} {/* Updated condition */}
        {content !== "applicants" && content !== "jobOffers" && content !== "jobForm" && <p>Welcome to Dashboard</p>} {/* Additional condition */}
      </div>
    </div>
  );
  

  // Render applicants table
  const renderApplicantsTable = () => (
    <table className="list" id="EmployeeList">
      {/* Table header */}
      <thead>
      <br/>
      <br/>
        <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Job Id</th>
          <th>File Name</th>
          <th>File Type</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {/* Table body */}
      <tbody>
        {employeeList.map((applicant, index) => {
          const user = userList.find((user) => user.user_id === applicant.user_id);
          return (
            <tr key={index}>
              <td>{applicant.applicant_id}</td>
              <td>{applicant.user_id}</td>
              <td>{user ? user.first_name : ""}</td>
              <td>{user ? user.last_name : ""}</td>
              <td>{user ? user.email : ""}</td>
              <td>{user ? user.phone_number : ""}</td>
              <td>{applicant.job_offering_id}</td>
              <td>{applicant.file_name}</td>
              <td>{applicant.file_type}</td>
              <td>{applicant.created_At}</td>
              <td>{applicant.updated_At}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  // Render job offers table
  const renderJobOffersTable = () => (
    <table className="list" id="JobOfferList">
      {/* Table header */}
    
      <thead>
      <br/>
      <br/>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Salary</th>
          <th>Qualifications</th>
          <th>Available</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {/* Table body */}
      <tbody>
        {jobOfferList.map((jobOffer, index) => (
          <tr key={index}>
            <td>{jobOffer.id}</td>
            <td>{jobOffer.title}</td>
            <td>{jobOffer.description}</td>
            <td>{jobOffer.salary}</td>
            <td>{jobOffer.qualifications}</td>
            <td>{jobOffer.available}</td>
            <td>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </td>
            <td>
              <button onClick={() => handleJobDelete(jobOffer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    

    );

  const renderJobForm = () => (
    <div className="job-form">
      <h2>Create Job</h2>
      
      <form onSubmit={handleSubmit}>
        <br/>
       
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} required />

        <label htmlFor="salary">Salary:</label>
        <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleInputChange} required />

        <label htmlFor="qualifications">Qualifications:</label>
        <textarea id="qualifications" name="qualifications" value={formData.qualifications} onChange={handleInputChange} required />

        <input
            type="hidden"
            id="userId"
            name="userId"
            value={formData.userId}
          />

        <button type="submit">Create Job</button>
      </form>
    </div>
  );

  return (
    <div>
      {renderSidebar()}
      {renderContent()}
    </div>
  );
};

export default Table;
