import React, { useState, useEffect } from "react";
import "./Table.css";
import { logoutUser } from "../../api/authApi";
import { getAllApplicants, deleteApplicant, getApplicantPdfUploads } from "../../api/applicantApi";
import { getAllUsers } from "../../api/userApi";
import { getAllJobOfferings, deleteJobOffering, addJobOffering } from "../../api/jobOfferingsAPI";

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
  const [pdfFiles, setPdfFiles] = useState([]);

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

        // Fetch PDF files data
        const files = await getApplicantPdfUploads();
        setPdfFiles(files);
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

  const handleApplicantDelete = async (id) => {
    try {
      // Call the deleteApplicant function to delete the applicant with the provided ID
      await deleteApplicant(id);
      setEmployeeList(prevApplicants => prevApplicants.filter(applicant => applicant.applicant_id !== id));
    } catch (error) {
      console.error("Error deleting applicant:", error);
      // Handle errors gracefully
    }
  };

  const handleJobDelete = async (id) => {
    try {
      // Call the deleteJobOffering function to delete the job offering with the provided ID
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
      // Add job offering
      await addJobOffering(formData);
      // If the creation is successful, update the job offer list
      const jobOffersResponse = await getAllJobOfferings();
      setJobOfferList(jobOffersResponse.jobOfferings);
      // Reset form data
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

  const handleLogoutClick = async () => {
    try {
      // Call the logout function to clear token and logout from the server
      await logoutUser();
      // Redirect the user to the login page or any other appropriate page
      window.location.href = '/login'; 
    } catch (error) {
      // Handle any errors that might occur during the logout process
      console.error('Logout failed:', error);
    }
  };

  const openPdfWindow = (file_name) => {
    const baseURL = 'http://localhost:8080/api/uploads'; // Replace with your actual base URL
    const pdfUrl = `${baseURL}/${file_name}`;
    window.open(pdfUrl, '_blank', 'noreferrer');
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
                <a href="home" className="logout" onClick={handleLogoutClick}>
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
      <h1>Admin Dashboard</h1>
      <div className="table-container">
        {content === "applicants" && renderApplicantsTable()}
        {content === "jobOffers" && renderJobOffersTable()}
        {content === "jobForm" && renderJobForm()}
        {content !== "applicants" && content !== "jobOffers" && content !== "jobForm" && <p>Welcome to Dashboard</p>}
      </div>
    </div>
  );

  // Render applicants table
  const renderApplicantsTable = () => (
    <table className="list" id="EmployeeList">
      {/* Table header */}
      <thead>
        <br />
        <br />
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
          <th>Show PDF</th>
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
              <td>
                {/* Render button to open PDF in a new window */}
                <button onClick={() => openPdfWindow(applicant.file_name)}>Show PDF</button>
              </td>
              <td>{applicant.created_At}</td>
              <td>{applicant.updated_At}</td>
              <td>
                <button onClick={() => handleApplicantDelete(applicant.applicant_id)}>Delete</button>
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
        <br />
        <br />
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Salary</th>
          <th>Qualifications</th>
          <th>Available</th>
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
              <button onClick={() => handleJobDelete(jobOffer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  // Render job form
  const renderJobForm = () => (
    <div className="job-form">
      <h2>Create Job</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} required />

        <label htmlFor="salary">Salary:</label>
        <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleInputChange} required />

        <label htmlFor="qualifications">Qualifications:</label>
        <textarea id="qualifications" name="qualifications" value={formData.qualifications} onChange={handleInputChange} required />

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
