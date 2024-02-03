import React, { useState, useEffect } from 'react';
import { getAllJobOfferings } from '../api/jobOfferingsAPI';
import JobListing from '../components/job list/JobListing';

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
  <div>
    {jobOfferings.map(job => (
      <JobListing key={job.id} job={job} />
    ))}
  </div>
);
};

export default JobListPage;