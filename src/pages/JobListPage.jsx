import React, { useState, useEffect } from 'react';
import { getAllJobOfferings } from '../api/jobOfferingsAPI';
import JobListing from '../components/job list/JobListing';
import "./job-list-page.css";

const JobListPage = () => {
  const [jobOfferings, setJobOfferings] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllJobOfferings();
  
        if (response && response.jobOfferings && Array.isArray(response.jobOfferings)) {
          setJobOfferings(response.jobOfferings);
        } else {
          console.error("Invalid response structure:", response);
          setJobOfferings([]);
        }
      } catch (error) {
        console.error("Error loading job offerings:", error);
      }
    };
  
    console.log("Before fetching - jobOfferings:", jobOfferings);
    fetchData();
  }, [jobOfferings]); 
console.log("Render - jobOfferings:", jobOfferings);

return (
    /* Job Offer page */
  <body className='job-page-edit'>
  <div className='job-list-page'>
    <div className='job-offer-heading'>
      <br/>
      <br/>
        <h2 className='job-title-heading'>JOB OFFERS</h2>
      </div>
      <div className='job-title-content'>
      <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h5>Join us for growth and success!</h5>

          <h3>
            {" "}
            Let's embark on this journey together
           
           
          </h3>
      </div>
    {jobOfferings.map(job => (
      <JobListing key={job.id} job={job} />
    ))}
  </div>
  </body>
);
};

export default JobListPage;