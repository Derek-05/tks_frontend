import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobOfferingById } from '../api/jobOfferingsAPI';
import JobDetail from '../components/job detail/JobDetail';

const JobDetailPage = () => {
  const [job, setJob] = useState();
  const { id } = useParams();
  

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const job = await getJobOfferingById(id);
        console.log('Fetched Job:', job);
        setJob(job);
      } catch (error) {
        console.error("Error loading job detail:", error);
      }
    };
  
    fetchJobData();
  }, [id, setJob]);

  
  return (
      /* Job Details Page */
    <div>
      
      {job ? <JobDetail job={job} /> : <p>Cargando...</p>}
    </div>
  );
};

export default JobDetailPage;
