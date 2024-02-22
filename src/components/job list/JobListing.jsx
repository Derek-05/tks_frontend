import React from 'react';
import { Link } from 'react-router-dom';
import './JobListing.css';

const JobListing = ({ job = {} }) => {
  return (
 
    
    <Link to={`/job/${job.id || ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      
      <div className="job-listing">
        <h3>{job.title}</h3>
      </div>
    </Link>

   
   
   
  );
};

export default JobListing;

