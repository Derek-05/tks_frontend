import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

export default axios.create({
  baseURL: baseURL,
});

// Obtener todas las ofertas de trabajo
export const getAllJobOfferings = async () => {
    try {
      const job = await axios.get(`${baseURL}/allJobs`)
      console.log('API Response:', job.data);
      return job.data;
    } catch (error) {
      console.error("Error fetching job offerings", error);
      throw error;
    }
  };

// Obtener una oferta de trabajo específica por ID
export const getJobOfferingById = async (id) => {
    try {
      const job = await axios.get(`${baseURL}/job/${id}`);
      console.log('API Response (Job Offering by ID):', job.data);
      return job.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.warn(`Job with ID ${id} not found`);
      } else {
        console.error("Error fetching job offering by ID", error);
      }
      throw error;
    }
  };

//Añadir oferta de trabajo
export const addJobOffering = async (data, config) => {
  try {
    const job = await axios.post(`${baseURL}/createJob`, data, config);
    console.log('API Response (Added Job):', job.newJobOffering);
    return job.new;
  } catch (error) {
    console.error("Error Adding Job", error.response.data);
    throw error;
  }
};





export const deleteJobOffering = async (id) => {
  try {
    const job = await axios.delete(`${baseURL}/deleteJob/${id}`);
    console.log('API Response (Deleted Job):', job.data);
    return job.data;
  } catch (error) {
    if (error.response) {
      // Server-side error
      console.error(`Server Error (${error.response.status}): ${error.response.data}`);
    } else if (error.request) {
      // Client-side error
      console.error(`Client Error: ${error.request}`);
    } else {
      // Other errors
      console.error('Error:', error.message);
    }
    throw error;
  }
};


