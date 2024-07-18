// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState("");

  const addPatient = () => {
    if (newPatient.trim() !== "") {
      setPatients([...patients, newPatient.trim()]);
      setNewPatient("");
    }
  };

  const removePatient = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fila de Espera</h1>
        <div className="form">
          <input
            type="text"
            value={newPatient}
            onChange={(e) => setNewPatient(e.target.value)}
            placeholder="Nome do paciente"
          />
          <button onClick={addPatient}>Adicionar</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{patient}</td>
                <td>
                  <button onClick={() => removePatient(index)}>Atendido</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
