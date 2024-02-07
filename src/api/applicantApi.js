import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

// Function to retrieve the JWT token from the cookie


// Function to create a new applicant
export const newApplicant = async (applicantData,token, baseURL = API_BASE_URL) => {
    if (!token) {
        throw new Error("No JWT token found.");
    }
    
    try {
        const response = await axios.post(`${baseURL}/create/applicant`, applicantData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        return response.data; 
    } catch (error) {
        // Error handling logic...
    }
};
