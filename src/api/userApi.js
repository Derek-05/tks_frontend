import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

// Create an axios instance with base URL
export default axios.create({
  baseURL: baseURL,
});

// Function to get all users
export const getAllUsers = async () => {
    try {
      const response = await axios.get(`${baseURL}/allusers`);
      return response.data; // Assuming the response data contains the list of users
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error; // Re-throw the error to handle it in the calling code
    }
};

// Function to delete a user by ID
export const deleteUser = async (id) => {
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      document.cookie = `token=${token}; path=/; SameSite=None; Secure`;

      const response = await axios.delete(`${baseURL}/admin/user/delete/${id}`, {
        withCredentials: true
      });
      return response.data; // Assuming the response data contains a success message or similar
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error; // Re-throw the error to handle it in the calling code
    }
};
