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
export const addJobOffering = async (data) => {
  // Extract the token from localStorage (for debugging only, not for production)
  const token = localStorage.getItem('token'); // Assume 'token' is the key you've used
  console.log(token);
  try {
    // Manually set the cookie in the browser (for debugging only)
    document.cookie = `token=${token}; path=/; SameSite=None; Secure`;

    // Now make the request with the credentials flag
    const response = await axios.post(`${baseURL}/createJob`, data, {
      withCredentials: true
    });

    console.log('API Response (Added Job):', response.data);
    return response.data;
  } catch (error) {
    console.error("Error Adding Job", error.response?.data || error.message);
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


