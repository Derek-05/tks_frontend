import React from 'react';
import './JobDetail.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JobDetail = ({ job = {} }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {/* Job Detail page body */}
      <div className='Job-details-heading'>
        <h2>DETAIL</h2>
      </div>
      <br />
      <div className="job-detail">
        <p><strong>Description:</strong> {job.jobOffering?.description ?? 'Not provided'}</p>
        <p><strong>Salary:</strong> {job.jobOffering?.salary ?? 'Not provided'}</p>
        <p><strong>Qualifications:</strong> {job.jobOffering?.qualifications ?? 'Not provided'}</p>
        <p><strong>Available:</strong> {job.jobOffering?.available !== undefined ? (job.jobOffering.available ? 'Yes' : 'No') : 'Not provided'}</p>
        <div className='detail-btn'>
          <br />
          <br />
          <br />
          <br />
          <div className='Second-BTN'>
            <button className="BTN-2" onClick={goBack}>Back</button>
          <div className='Second-BTN'>
            <Link to="/apply_now">
              <button className="BTN-2">Apply Now</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
