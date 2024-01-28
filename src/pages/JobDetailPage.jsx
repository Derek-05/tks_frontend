import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchJobOfferingById } from '../api/jobOfferingsAPI';
import JobDetail from '../components/job detail/JobDetail'

const JobDetailPage = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const jobData = await fetchJobOfferingById(id);
        setJob(jobData);
      } catch (error) {
        console.error("Error loading job detail:", error);
      }
    };

    fetchJobData();
  }, [id]);

  const goBack = () => {
    navigate(-1); // Reemplaza useHistory().goBack() con useNavigate() para retroceder
  };

  return (
    <div>
      <button onClick={goBack}>Volver</button>
      {job ? <JobDetail job={job} /> : <p>Cargando...</p>}
    </div>
  );
};

export default JobDetailPage;