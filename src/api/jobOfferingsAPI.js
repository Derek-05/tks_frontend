import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

// Create an axios instance with base URL
export default axios.create({
  baseURL: baseURL,
});

// Function to get all job offerings
export const getAllJobOfferings = async () => {
    try {
      const response = await axios.get(`${baseURL}/allJobs`);
      console.log('API Response (All Job Offerings):', response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching job offerings", error);
      throw error;
    }
};

// Function to get a specific job offering by ID
export const getJobOfferingById = async (id) => {
    try {
      const response = await axios.get(`${baseURL}/job/${id}`);
      console.log('API Response (Job Offering by ID):', response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.warn(`Job with ID ${id} not found`);
      } else {
        console.error("Error fetching job offering by ID", error);
      }
      throw error;
    }
};

// Function to add a job offering
export const addJobOffering = async (data) => {
  try {
    const token = localStorage.getItem('token');
    console.log(token);
    document.cookie = `token=${token}; path=/; SameSite=None; Secure`;

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

// Function to delete a job offering
export const deleteJobOffering = async (id) => {
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      document.cookie = `token=${token}; path=/; SameSite=None; Secure`;

      const response = await axios.delete(`${baseURL}/deleteJob/${id}`, {
        withCredentials: true
      });
        
      console.log('API Response (Deleted Job):', response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error(`Server Error (${error.response.status}): ${error.response.data}`);
      } else if (error.request) {
        console.error(`Client Error: ${error.request}`);
      } else {
        console.error('Error:', error.message);
      }
      throw error;
    }
};
