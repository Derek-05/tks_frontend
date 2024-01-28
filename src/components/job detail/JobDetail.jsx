import React from 'react';
import './JobDetail.css';

const JobDetail = ({ job }) => {
  return (
    <div className="job-detail">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Responsibilities:</strong> {job.responsibilities}</p>
      <p><strong>Qualifications:</strong> {job.qualifications}</p>
      <p><strong>Benefits:</strong> {job.benefits}</p>
    </div>
  );
};

export default JobDetail;