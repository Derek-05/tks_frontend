import React from "react";
import Table from "../components/ReportTable/Table";
import { getTokenFromLocalStorage } from "../api/authApi"; // Import the API

const Dashboard = () => {
  // Retrieve the token from local storage
  const token = getTokenFromLocalStorage();

  return (
    <div className="Info">
      <Table token={token} /> {/* Pass the token to child components if needed */}
    </div>
  );
};

export default Dashboard;
