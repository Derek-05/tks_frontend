import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

// Create axios instance with base URL
export default axios.create({
  baseURL: baseURL,
});

// Function to create a new applicant
export const newApplicant = async (applicantData) => {
    try {
        const response = await axios.post(`${baseURL}/create/applicant`, applicantData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Change content type to multipart/form-data
            },
            withCredentials: true, // Ensure credentials are sent with the request
        });
        return response.data; 
    } catch (error) {
        // Handle errors
        if (error.response) {
            console.error('Server responded with error:', error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error setting up request:', error.message);
        }
        throw error;
    }
};

// Function to get all applicants
export const getAllApplicants = async () => {
  try {
    const response = await axios.get(`${baseURL}/allApplicants`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all applicants:", error);
    throw error;
  }
};

// Function to delete an applicant by ID
export const deleteApplicant = async (id) => {
  const token = localStorage.getItem('token'); // Get token from local storage
  try {
    // Set token as cookie for server-side authentication
    document.cookie = `token=${token}; path=/; SameSite=None; Secure`;

    // Send request to delete applicant
    const response = await axios.delete(`${baseURL}/deleteApplicants/${id}`, {
      withCredentials: true // Ensure credentials are sent with the request
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting applicant:", error);
    throw error;
  }
};

// Function to get PDF uploads
export const getApplicantPdfUploads = async () => {
  try {
    // Get PDF uploads from server
    const result = await axios.get(`${baseURL}/uploads`);
    
    // Check if request was successful
    if (result.data.success) {
      // Filter PDF files
      const pdfFiles = result.data.files.filter(file => file.endsWith('.pdf'));
      return pdfFiles;
    } else {
      console.error('Error fetching PDF uploads:', result.data.error);
      return []; // Return empty array or handle error accordingly
    }
  } catch (error) {
    console.error('Error fetching PDF uploads:', error);
    return []; // Return empty array or handle error accordingly
  }
};
