import React, { useState } from "react";
import "./Table.css";

const Table = () => {
  const initialFormData = {
    Employee1: "",
    Employee2: "",
    "Employee-email": "",
    "Employee-Job": ""
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [employeeList, setEmployeeList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Actualizar la fila existente si estamos en modo de edición
      const updatedList = [...employeeList];
      updatedList[editIndex] = { ...formData };
      setEmployeeList(updatedList);
      setEditIndex(null);
    } else {
      // Agregar una nueva fila si no estamos en modo de edición
      setEmployeeList([...employeeList, { ...formData }]);
    }
    setFormData({ ...initialFormData });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEdit = (index) => {
    // Mostrar los datos de la fila seleccionada en el formulario de entrada
    setFormData({ ...employeeList[index] });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    // Eliminar la fila seleccionada de la lista de empleados
    setEmployeeList(employeeList.filter((_, i) => i !== index));
  };

  return (
    <div className="heading1">
    
      <h1>Admi Dashboard</h1>
    <div className="table-container">
      
      
      
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="Employee1">First Name</label>
          <input
            type="text"
            name="Employee1"
            id="Employee1"
            value={formData.Employee1}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="Employee2">Last Name</label>
          <input
            type="text"
            name="Employee2"
            id="Employee2"
            value={formData.Employee2}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="Employee-email">Email</label>
          <input
            type="text"
            name="Employee-email"
            id="Employee-email"
            value={formData["Employee-email"]}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="Employee-Job">Job Role</label>
          <input
            type="text"
            name="Employee-Job"
            id="Employee-Job"
            value={formData["Employee-Job"]}
            onChange={handleInputChange}
          />
        </div>

        <div className="form_action--button">
          <input type="submit" value={editIndex !== null ? "Save" : "Submit"} />
          <input type="reset" value="Reset" onClick={() => { setFormData({ ...initialFormData }); setEditIndex(null); }} />
        </div>
      </form>

      <table className="list" id="EmployeeList">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee, index) => (
            <tr key={index}>
              <td>{employee.Employee1}</td>
              <td>{employee.Employee2}</td>
              <td>{employee["Employee-email"]}</td>
              <td>{employee["Employee-Job"]}</td>
              <td><button onClick={() => handleEdit(index)}>Edit</button></td>
              <td><button onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Table;
