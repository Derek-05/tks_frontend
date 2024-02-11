import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

export default axios.create({
  baseURL: baseURL,
});

export const getAllUsers = async () => {
    try {
      const response = await axios.get(`${baseURL}/allusers`);
      return response.data; // Assuming the response data contains the list of applicants
    } catch (error) {
      console.error("Error fetching all applicants:", error);
      throw error; // Re-throw the error to handle it in the calling code
    }
  };

  