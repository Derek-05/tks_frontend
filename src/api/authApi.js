import axios from 'axios';

const authBaseURL = 'http://localhost:8080/api'; 

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${authBaseURL}/signup`, userData);
    return response.data; 
  } catch (error) {
    console.error("Error registering user", error.response.data);
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${authBaseURL}/signin`, credentials);
    return response.data; 
  } catch (error) {
    console.error("Error logging in", error.response.data);
    throw error;
  }
};

// Function to log out a user
export const logoutUser = async () => {
  try {
    const response = await axios.get(`${authBaseURL}/logout`);
    return response.data; 
  } catch (error) {
    console.error("Error logging out", error.response.data);
    throw error;
  }
};

// Function to get the user's profile using the authentication token
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${authBaseURL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data; // This should include the user's profile
  } catch (error) {
    console.error("Error fetching user profile", error.response.data);
    throw error;
  }
};

// Export the functions for use in other parts of the application
export default {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile
};