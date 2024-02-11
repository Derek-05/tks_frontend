import axios from 'axios';

const authBaseURL = 'http://localhost:8080/api'; 

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${authBaseURL}/signup`, userData);
    return response.data; 
  } catch (error) {
    console.error("Error registering user", error.response ? error.response.data : error.message);
    throw error;
  }
};




// loginUser function
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${authBaseURL}/signin`, credentials);
    const { token } = response.data;

    console.log("Response data:", response.data); // Log the response data

    // Set the token in local storage
    setTokenInLocalStorage(token);
    return response.data; // Return the response data as before
  } catch (error) {
    console.error("Error logging in", error.response ? error.response.data : error.message);
    throw error;
  }
};




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
    return response.data; 
  } catch (error) {
    console.error("Error logging out", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Function to get the user's profile using the authentication token
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${authBaseURL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data; // This should include the user's profile
  } catch (error) {
    console.error("Error fetching user profile", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Export the functions for use in other parts of the application
export default {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  setTokenInLocalStorage,
  getTokenFromLocalStorage
};
