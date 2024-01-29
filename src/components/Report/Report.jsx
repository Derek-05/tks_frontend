import React from "react";
import "./Report.css";

const Report = () => {
  return (
    <div class="content-table">
      <h1>Report</h1>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Derek</td>
            <td>Position</td>
            <td>
              <select>
                <option value="opcion1">Physiotherapist</option>
                <option value="opcion2">Orthopedist</option>
                <option value="opcion3">Prosthesis manufacturer</option>
                <option value="opcion3">Biomedical engineer</option>
              </select>
            </td>
            <td>
              <button onclick="alert('Botón presionado')">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Report;
