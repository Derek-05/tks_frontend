import axios from 'axios';

const authBaseURL = 'http://localhost:8080/api';

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${authBaseURL}/signup`, userData);
    return response.data; // Return response data upon successful registration
  } catch (error) {
    console.error("Error registering user", error.response ? error.response.data : error.message);
    throw error; // Throw error for handling in calling code
  }
};

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${authBaseURL}/signin`, credentials);
    const { token } = response.data;

    // Log the response data
    console.log("Response data:", response.data);

    // Set the token in local storage
    setTokenInLocalStorage(token);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error logging in", error.response ? error.response.data : error.message);
    throw error; // Throw error for handling in calling code
  }
};

// Function to set token in local storage
export const setTokenInLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

// Function to get the token from local storage
export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

// Function to log out a user
export const logoutUser = async () => {
  try {
    // Clear token from local storage
    localStorage.removeItem('token');
    const response = await axios.get(`${authBaseURL}/logout`);
    return response.data; // Return response data upon successful logout
  } catch (error) {
    console.error("Error logging out", error.response ? error.response.data : error.message);
    throw error; // Throw error for handling in calling code
  }
};

// Export the functions for use in other parts of the application
export default {
  registerUser,
  loginUser,
  logoutUser,
  setTokenInLocalStorage,
  getTokenFromLocalStorage
};
