import React, { useEffect, useState } from 'react';
import { fetchJobOfferings } from '../api/jobOfferingsAPI';
import JobListing from '../components/job list/JobListing';

const JobListPage = () => {
  const [jobOfferings, setJobOfferings] = useState([]);

  useEffect(() => {
    const getJobOfferings = async () => {
      try {
        const data = await fetchJobOfferings();
        setJobOfferings(data);
      } catch (error) {
        console.error("Error loading job offerings:", error);
      }
    };

    getJobOfferings();
  }, []);

  return (
    <div id='job_offers'>
      {jobOfferings.map(job => (
        <JobListing key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobListPage;