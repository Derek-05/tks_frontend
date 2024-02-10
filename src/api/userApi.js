import axios from 'axios';

export const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/allusers");
      return response.data; // Assuming the response data contains the list of applicants
    } catch (error) {
      console.error("Error fetching all applicants:", error);
      throw error; // Re-throw the error to handle it in the calling code
    }
  };