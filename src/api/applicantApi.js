import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

export default axios.create({
  baseURL: baseURL,
});

// Function to create a new applicant
export const newApplicant = async (applicantData) => {
    try {
        const response = await axios.post(`${baseURL}/create/applicant`, applicantData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        return response.data; 
    } catch (error) {
        // Handle errors
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Server responded with error:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up request:', error.message);
        }
        throw error;
    }
};


export const getAllApplicants = async () => {
  try {
    const response = await axios.get(`${baseURL}/allApplicants`);
    return response.data; // Assuming the response data contains the list of applicants
  } catch (error) {
    console.error("Error fetching all applicants:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};
