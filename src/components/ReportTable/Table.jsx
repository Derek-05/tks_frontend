import React, { useState } from "react";
import "./Table.css";

const Table = () => {
    const [content, setContent] = useState("");

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
            <div className="content">
                {content ? (
                    <div className="dynamic-content">
                        {content === "Applicants content" ? (
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                    <tr>
                                        <td>Applicant 1</td>
                                        <td>applicant1@example.com</td>
                                    </tr>
                                    <tr>
                                        <td>Applicant 2</td>
                                        <td>applicant2@example.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Position</th>
                                        <th>Salary</th>
                                    </tr>
                                    <tr>
                                        <td>Job Offer 1</td>
                                        <td>$50000</td>
                                    </tr>
                                    <tr>
                                        <td>Job Offer 2</td>
                                        <td>$60000</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                ) : (
                    <div className="info-display">
                        {/* Aquí va tu contenido predeterminado */}
                    </div>
                )}
            </div>
        </body>
    );
};

export default Table;
