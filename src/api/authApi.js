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
    const { token } = response.data;
    setTokenInCookie(token);
    return response.data; 
  } catch (error) {
    console.error("Error logging in", error.response.data);
    throw error;
  }
};

const setTokenInCookie = (token) => {
  // Set the token in a cookie with appropriate options (e.g., secure, HttpOnly)
  // For example:
  document.cookie = `jwt=${token}; path=/; SameSite=None; Secure; HttpOnly`;
};

export const getTokenFromCookie = () => {
  const token = document.cookie.split('; ').find(row => row.startsWith('jwt='));
  return token ? token.split('=')[1] : null;
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
    const response = await axios.get(`${authBaseURL}/me`, {
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