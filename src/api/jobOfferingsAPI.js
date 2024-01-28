import axios from 'axios';

const baseURL = 'http://localhost:3002/api/v1/job_offerings';

// Obtener todas las ofertas de trabajo
export const fetchJobOfferings = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error("Error fetching job offerings", error);
    throw error;
  }
};

// Obtener una oferta de trabajo específica por ID
export const fetchJobOfferingById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job offering by ID", error);
    throw error;
  }
};