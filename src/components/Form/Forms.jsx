import React,{useState } from "react";
import "./Form.css";

const Forms = () => {
  const [selectedOption, setSelectedOption] = useState("Prosthetist");
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
  
 
      const response = await fetch('http://localhost:8080/api/create/applicant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone_number: formData.phone_number,
          position: selectedOption,
        }),
      });
  
      if (response.ok) {
        // Handle success (e.g., show a success message)
        alert('Form submitted successfully!');
      } else {
        // Handle server error (e.g., show an error message)
        alert('Error submitting the form. Please try again.');
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first_name">First Name:</label>
      <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />

      <label htmlFor="last_name">Last Name:</label>
      <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />

      <label htmlFor="email">Email:</label>
      <input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
  placeholder="example@example.com"
  required
/>


      <label htmlFor="phone_number">Phone Number:</label>
      <input
        type="text"
        id="phone_number"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="123-456-7890"
        required
      />

      <div>
        <label htmlFor="job_position">
          Select a Job Position:
          <select id="job_position" value={selectedOption} onChange={handleDropdownChange} required>
            <option value="Prosthetist">Prosthetist</option>
            <option value="Therapist">Therapist</option>
            <option value="Engineer">Engineer</option>
          </select>
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;
