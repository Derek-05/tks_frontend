import React, { useState, useEffect } from "react";
import "./Table.css";
import { getAllApplicants } from "../../api/applicantApi";
import { getAllUsers } from "../../api/userApi"; // Import the API function

const Table = () => {

const [employeeList, setEmployeeList] = useState([]);
const [userList, setUserList] = useState([]);
useEffect(() => {
    const fetchData = async () => {
        try {
          // Fetch applicants data
          const applicantsResponse = await getAllApplicants();
          setEmployeeList(applicantsResponse.applicants);
  
          // Fetch users data
          const usersResponse = await getAllUsers();
            console.log("usersResponse:", usersResponse); // Add this line to check the value
  
            if (usersResponse && usersResponse.data && Array.isArray(usersResponse.data.users)) {
              setUserList(usersResponse.data.users);
            } else {
              console.error("Invalid users response:", usersResponse);
            }
              } catch (error) {
                console.error("Error fetching data:", error);
                // Handle errors here
              }
            };
  
      fetchData();
  
      return () => {}; // Cleanup function
    }, []);
  
    const handleEdit = (index) => {
      // Implement edit functionality
    };
  
    const handleDelete = (index) => {
      // Implement delete functionality
    };


    const handleApplicantsClick = () => {
        setContent("Applicants content");
    };

    const handleJobsClick = () => {
        setContent("Job Offers content");
    };

    return (
        <body>
            <nav className={`sidebar ${content ? "thin" : ""}`}>
                <div className="logo-name-container">
                    <nav className="sidebar">
                        <div className="logo-name">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <ul>
                                <li>
                                    <a href="#" className="logo_name">
                                        <i className='bx bxs-dashboard'></i>
                                        <span className="logo_name">Admi Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="logo_name" onClick={handleApplicantsClick}>
                                        <i className='bx bxs-user-account'></i>
                                        <span className="logo_name">Applicants</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="logo_name" onClick={handleJobsClick}>
                                        <i className='bx bx-briefcase-alt'></i>
                                        <span className="logo_name">Job Offers</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="home" className="logout">
                                        <i className='bx bx-log-out'></i>
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
            <div className="heading1">
      <h1>Admin Dashboard</h1>
      <div className="table-container">
        {employeeList.length > 0 ? (
          <table className="list" id="EmployeeList">
            <thead>
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
            <tbody>
              {employeeList.map((applicant, index) => {
                // Find the corresponding user data for this applicant
                const user = userList.find(user => user.user_id === applicant.user_id);

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
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
        </body>
    );

};

export default Table;
