import React from 'react';
import './JobDetail.css';

const JobDetail = ({ job ={} }) => {
  return (
    <div className="job-detail">
      <p><strong>Description:</strong> {job.jobOffering.description ?? 'Not provided'}</p>
      <p><strong>Salary:</strong> {job.jobOffering.salary ??  'Not provided'}</p>
      <p><strong>Qualifications:</strong> {job.jobOffering.qualifications ??  'Not provided'}</p>
      <p><strong>Available:</strong> {job.jobOffering.available !== undefined ? (job.jobOffering.available ? 'Yes' : 'No') : 'Not provided'}</p>
    </div>
  );
};



export default JobDetail;