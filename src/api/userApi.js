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

  export const deleteUser = async id => {
    const token = localStorage.getItem('token'); // Assume 'token' is the key you've used
    console.log(token);
    try {
      document.cookie = `token=${token}; path=/; SameSite=None; Secure`;
  
      const response = await axios.delete(`${baseURL}/admin/user/delete/${id}`, {
        withCredentials: true
      });
      return response.data; // Assuming the response data contains the list of applicants after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error; // Re-throw the error to handle it in the calling code
    }
  };
  