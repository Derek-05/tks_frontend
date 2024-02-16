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
    const response = await axios.get(`${baseURL}/allApplicants`, );
    return response.data; // Assuming the response data contains the list of applicants
  } catch (error) {
    console.error("Error fetching all applicants:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};



export const getApplicantFilesById = async (id) => {
  const token = localStorage.getItem('token');
  try {
    document.cookie = `token=${token}; path=/; SameSite=None; Secure`;

    const response = await axios.get(`${baseURL}/getApplicantWithFiles/${id}`, {
      responseType: 'blob', // Set the response type to 'blob'
      withCredentials: true,
    });

    // Create a Blob object from the response data
    const blob = new Blob([response.data], { type: 'application/pdf' });

    // Create a URL for the Blob object
    const url = URL.createObjectURL(blob);

    return url;
  } catch (error) {
    console.error("Error fetching applicant files:", error);
    throw error;
  }
};





export const deleteApplicant = async (id) => {
  const token = localStorage.getItem('token'); // Assume 'token' is the key you've used
  console.log(token);
  try {
    document.cookie = `token=${token}; path=/; SameSite=None; Secure`;

    const response = await axios.delete(`${baseURL}/deleteApplicants/${id}`, {
      withCredentials: true
    });
    return response.data; // Assuming the response data contains the list of applicants after deletion
  } catch (error) {
    console.error("Error deleting applicant:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};


